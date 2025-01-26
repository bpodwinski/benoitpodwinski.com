import * as THREE from "three";
import { gsap } from "gsap";
import { scene } from "./scene";
import { events } from "../lib/eventEmitter";
import { TextureManager } from "./textureManager";

let groupHolder;
let material;
let dae = null;
const bonesCount = 10;
const bonesPositions = [];
const bonesPositionsTween = [];
const center = new THREE.Vector3();
const centerTween = new THREE.Vector3();
let mouseControl = false;
let meshes = [];
let cubeMesh;

function init() {
  events.on("update", update);

  groupHolder = new THREE.Object3D();
  scene.getScene().add(groupHolder);

  reload();

  const groundBump = new THREE.TextureLoader().load("textures/ground_bump.jpg");
  groundBump.wrapS = THREE.RepeatWrapping;
  groundBump.wrapT = THREE.RepeatWrapping;
  groundBump.repeat.set(15, 15);

  const cubeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.3,
    roughness: 0.1,
    transparent: true,
    bumpMap: groundBump,
    bumpScale: 1,
  });

  cubeMesh = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), cubeMaterial);
  cubeMesh.rotation.x = -Math.PI / 2;
  cubeMesh.position.y = -0.25;
  cubeMesh.castShadow = true;
  cubeMesh.receiveShadow = true;
  groupHolder.add(cubeMesh);

  document.addEventListener("mousemove", onDocumentMouseDown);
  document.addEventListener("touchmove", onDocumentTouchStart, false);
}

function onDocumentTouchStart(event) {
  if (event.touches.length === 1) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.touches[0].pageX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.touches[0].pageY / window.innerHeight) * 2 + 1;
    boom(mouse);
  }
}

function onDocumentMouseDown(event) {
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  boom(mouse);
}

function boom(mouse) {
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, scene.getCamera());
  const intersects = raycaster.intersectObject(cubeMesh, true);

  if (intersects[0]) {
    mouseControl = true;
    const p = intersects[0].point.multiplyScalar(1 / 0.05);

    gsap.to(center, {
      duration: center.distanceTo(p) * 0.1,
      x: p.x * 0.6,
      z: p.z * 0.6,
      ease: "linear",
      onComplete: () => {
        mouseControl = false;
      },
    });
  }
}

function reload() {
  if (dae) {
    groupHolder.remove(dae);
    dae.geometry.dispose();
    dae = null;
  }

  material = new THREE.MeshStandardMaterial({
    bumpScale: 0.5,
    color: 0xffffff,
    metalness: 0.9,
    roughness: 0.5,
    flatShading: true,
    envMap: TextureManager.getCubeMap(0),
    side: THREE.DoubleSide,
  });

  initBones();
}

function initBones() {
  const segmentHeight = 5;
  const segmentCount = 2;
  const height = segmentHeight * segmentCount;
  const halfHeight = height * 0.5;

  const sizing = {
    segmentHeight,
    segmentCount,
    height,
    halfHeight,
  };

  for (let i = 0; i < bonesCount; i++) {
    const geometry = createGeometry(sizing);
    const bones = createBones(sizing);
    const mesh = createMesh(geometry, bones);
    mesh.scale.set(0.05, 0.05, 0.05);

    groupHolder.add(mesh);
    meshes.push(mesh);

    const pos = new THREE.Vector3();
    pos.oldCenter = new THREE.Vector3();
    bonesPositions.push(pos);
    bonesPositionsTween.push(pos.clone());
  }
}

function createGeometry(sizing) {
  const geometry = new THREE.CylinderGeometry(
    0, // radiusTop
    3, // radiusBottom
    sizing.height, // height
    7, // radiusSegments
    sizing.segmentCount * 3, // heightSegments
    true // openEnded
  );

  // Récupère les attributs des positions
  const positionAttribute = geometry.attributes.position;
  const vertexCount = positionAttribute.count;

  // Crée des tableaux pour skinIndices et skinWeights
  const skinIndices = [];
  const skinWeights = [];

  for (let i = 0; i < vertexCount; i++) {
    const vertex = new THREE.Vector3(
      positionAttribute.getX(i),
      positionAttribute.getY(i),
      positionAttribute.getZ(i)
    );

    const y = vertex.y + sizing.halfHeight;

    const skinIndex = Math.floor(y / sizing.segmentHeight);
    const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;

    // Modifie les positions
    vertex.x -= (0.5 - Math.random()) * 2;
    vertex.z -= (0.5 - Math.random()) * 2;

    if (vertex.y === -sizing.segmentHeight) {
      vertex.x = vertex.z = 0;
    }

    // Met à jour la position de l'attribut
    positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);

    // Ajoute les indices et poids de la peau
    skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
    skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
  }

  // Ajoute les nouveaux attributs à la géométrie
  geometry.setAttribute(
    "skinIndex",
    new THREE.Uint16BufferAttribute(skinIndices, 4)
  );
  geometry.setAttribute(
    "skinWeight",
    new THREE.Float32BufferAttribute(skinWeights, 4)
  );

  return geometry;
}

function createBones(sizing) {
  const bones = [];
  const rootBone = new THREE.Bone();
  rootBone.position.y = -sizing.halfHeight;
  bones.push(rootBone);

  let prevBone = rootBone;
  for (let i = 0; i < sizing.segmentCount; i++) {
    const bone = new THREE.Bone();
    bone.position.y = sizing.segmentHeight;
    bones.push(bone);
    prevBone.add(bone);
    prevBone = bone;
  }

  return bones;
}

function createMesh(geometry, bones) {
  const skeleton = new THREE.Skeleton(bones);
  const skinnedMesh = new THREE.SkinnedMesh(geometry, material);

  skinnedMesh.add(bones[0]);
  skinnedMesh.bind(skeleton);
  skinnedMesh.castShadow = true;
  skinnedMesh.receiveShadow = true;

  return skinnedMesh;
}

function update() {
  const time = Date.now() * 0.0001;
  const i = 0;

  const spd = 0.2;
  if (!mouseControl) {
    const des = new THREE.Vector3(
      (window.innerWidth / window.innerHeight) *
        10 *
        Math.sin(i + 2 * time) *
        Math.sin(i + 3.5 * time) *
        1,
      0,
      15 * Math.sin(i + 1 * time) * Math.sin(i + 4.5 * time) * 1
    );

    gsap.to(center, {
      duration: center.distanceTo(des) * 0.2,
      x: des.x,
      z: des.z,
      ease: "none",
    });
  }

  gsap.to(center, {
    duration: 0,
    y: 2 * Math.sin(i + time * 10),
    ease: "none",
  });

  gsap.to(centerTween, {
    duration: spd * 5,
    x: center.x,
    y: center.y,
    z: center.z,
    ease: "none",
  });

  for (let j = 0; j < bonesCount; j++) {
    const mesh = meshes[j];

    if (
      bonesPositions[j].x == 0 ||
      Math.random() < 0.003 ||
      (bonesPositions[j].distanceTo(center) > 13 &&
        !gsap.isTweening(bonesPositionsTween[j]))
    ) {
      const r = 2 * Math.PI * (j / bonesCount + Math.random() / 10);

      bonesPositions[j].x = center.x + Math.sin(r) * 10;
      bonesPositions[j].y = 0;
      bonesPositions[j].z = center.z + Math.cos(r) * 10;
      bonesPositions[j].oldCenter.copy(center);

      gsap.killTweensOf(bonesPositionsTween[j]);

      gsap.to(bonesPositionsTween[j], {
        duration: spd * 2,
        x: bonesPositions[j].x,
        z: bonesPositions[j].z,
      });

      gsap.to(bonesPositionsTween[j], {
        duration: spd,
        y: 5,
      });

      gsap.to(bonesPositionsTween[j], {
        duration: spd,
        delay: spd,
        y: bonesPositions[j].y,
      });
    }

    mesh.skeleton.bones[0].position.copy(centerTween);
    mesh.skeleton.bones[0].position.add(
      centerTween.clone().multiplyScalar(0.5)
    );

    mesh.skeleton.bones[1].position.set(
      bonesPositionsTween[j].x / 2,
      5 + bonesPositionsTween[j].y / 2,
      bonesPositionsTween[j].z / 2
    );

    mesh.skeleton.bones[1].position.sub(
      centerTween.clone().multiplyScalar(0.5)
    );

    mesh.skeleton.bones[2].position.set(
      bonesPositionsTween[j].x,
      -10 + bonesPositionsTween[j].y,
      bonesPositionsTween[j].z
    );

    mesh.skeleton.bones[2].position.sub(centerTween.clone().multiplyScalar(1));
  }
}

export const Mecha = {
  init,
  update,
  reload,
};
