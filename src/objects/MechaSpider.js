import * as THREE from "three";
import { gsap } from "gsap";
import { events } from "../lib/EventEmitter";

export class Mecha {
  /**
   * Creates a Mecha Spider - a biomechanical-inspired robotic spider
   * that interacts with the environment and follows user input.
   *
   * This 3D object features:
   * - A procedural skeletal structure with multiple articulated legs.
   * - Dynamic movement that responds to user clicks/touches on the ground.
   * - Smooth animations and physics-driven positioning.
   *
   * @param {THREE.Scene} scene - The scene where the mecha will be added.
   * @param {THREE.Camera} camera - The camera used to track interactions.
   * @param {Object} ground - The ground object to interact with.
   */
  constructor(scene, camera, ground) {
    this.scene = scene;
    this.camera = camera;
    this.ground = ground;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.groupHolder = new THREE.Object3D();
    this.groupHolder.matrixAutoUpdate = false;
    this.material = null;
    this.dae = null;
    this.bonesCount = 8;
    this.bonesPositions = [];
    this.bonesPositionsTween = [];
    this.center = new THREE.Vector3();
    this.centerTween = new THREE.Vector3();
    this.mouseControl = false;
    this.meshes = [];
    this.groundMesh = null;
    this.clock = new THREE.Clock();
    this.tempVec3 = new THREE.Vector3();
    this.targetVec3 = new THREE.Vector3();

    this.scene.add(this.groupHolder);

    this.update = this.update.bind(this);
    this.setupEvents();
    this.setupGround();
    this.reload();
  }

  /** Sets up event listeners for updates and interactions */
  setupEvents() {
    this.onMouseDownHandler = this.onMouseDown.bind(this);
    this.onTouchStartHandler = this.onTouchStart.bind(this);

    events.on("update", this.update);
    document.addEventListener("mousedown", this.onMouseDownHandler);
    document.addEventListener("touchstart", this.onTouchStartHandler);
  }

  /** Initializes ground and listens for its readiness */
  setupGround() {
    if (this.ground) {
      this.ground.init(this.scene);
      events.on("groundReady", (mesh) => {
        this.groundMesh = mesh;
      });
    }
  }

  /** Reloads Spider, reinitializing materials and bones */
  reload() {
    if (!this.material) {
      this.material = new THREE.MeshPhysicalMaterial({
        color: 0x66fff2,
        metalness: 0.6,
        roughness: 0.1,
        flatShading: true,
        transmission: 1,
        clearcoat: 0.6,
        clearcoatRoughness: 0.4,
        envMap: this.scene.environment,
        envMapIntensity: 0.5,
        side: THREE.DoubleSide,
      });
    }

    if (this.dae) {
      this.groupHolder.remove(this.dae);
      this.dae.geometry.dispose();
      this.dae = null;
    }

    this.initBones();
  }

  /** Initializes bones of Spider */
  initBones() {
    const segmentHeight = 5;
    const segmentCount = 2;
    const height = segmentHeight * segmentCount;
    const halfHeight = height * 0.5;

    const sizing = { segmentHeight, segmentCount, height, halfHeight };

    for (let i = 0; i < this.bonesCount; i++) {
      const geometry = this.createGeometry(sizing);
      const bones = this.createBones(sizing);
      const mesh = this.createMesh(geometry, bones);
      mesh.scale.set(0.05, 0.05, 0.05);
      mesh.updateMatrix();

      this.groupHolder.add(mesh);
      this.meshes.push(mesh);

      const pos = new THREE.Vector3();
      pos.oldCenter = new THREE.Vector3();
      this.bonesPositions.push(pos);
      this.bonesPositionsTween.push(pos.clone());
    }
  }

  /** Creates bone structure (skeleton) */
  createGeometry(sizing) {
    const geometry = new THREE.CylinderGeometry(
      0,
      3,
      sizing.height,
      8,
      sizing.segmentCount * 3,
      true
    );
    const positionAttribute = geometry.attributes.position;
    const vertexCount = positionAttribute.count;

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

      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);

      skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
      skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
    }

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

  createInstancedLegs(sizing) {
    const geometry = new THREE.CylinderGeometry(
      0,
      3,
      sizing.height,
      8,
      sizing.segmentCount * 3,
      true
    );
    const instanceCount = this.bonesCount;
    this.legs = new THREE.InstancedMesh(geometry, this.material, instanceCount);

    const matrix = new THREE.Matrix4();
    for (let i = 0; i < instanceCount; i++) {
      matrix.setPosition(
        Math.sin((i / instanceCount) * Math.PI * 2) * 3,
        0,
        Math.cos((i / instanceCount) * Math.PI * 2) * 3
      );
      this.legs.setMatrixAt(i, matrix);
    }

    this.legs.instanceMatrix.needsUpdate = true; // 🔹 Mise à jour unique
    this.legs.matrixAutoUpdate = false; // 🔹 Optimisation ici
    this.scene.add(this.legs);
  }

  /** Creates the skinned mesh */
  createBones(sizing) {
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

  /** Creates skinned mesh */
  createMesh(geometry, bones) {
    const skeleton = new THREE.Skeleton(bones);
    const skinnedMesh = new THREE.SkinnedMesh(geometry, this.material);

    skinnedMesh.add(bones[0]);
    skinnedMesh.bind(skeleton);
    skinnedMesh.castShadow = true;
    skinnedMesh.receiveShadow = true;

    return skinnedMesh;
  }

  /** Handles mouse click interaction */
  onMouseDown(event) {
    this.processInteraction(event.clientX, event.clientY);
  }

  /** Handles touch event interaction */
  onTouchStart(event) {
    if (event.touches.length === 1) {
      this.processInteraction(event.touches[0].pageX, event.touches[0].pageY);
    }
  }

  /** Processes interactions (clicks/touches) and moves Spider */
  processInteraction(x, y) {
    if (!this.groundMesh) return;

    this.mouse.set(
      (x / window.innerWidth) * 2 - 1,
      -(y / window.innerHeight) * 2 + 1
    );
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.groundMesh, true);

    if (intersects.length > 0) {
      this.mouseControl = true;
      this.targetVec3.copy(intersects[0].point);

      gsap.to(this.center, {
        duration: this.center.distanceTo(this.targetVec3) * 0.1,
        x: this.targetVec3.x * 0.6,
        z: this.targetVec3.z * 0.6,
        ease: "linear",
        onComplete: () => (this.mouseControl = false),
      });
    }
  }

  /** Updates Spider movement and animations */
  update() {
    const time = this.clock.getElapsedTime() * 0.1;
    const spd = 0.2;

    if (!this.mouseControl) {
      const offsetX = (window.innerWidth / window.innerHeight) * 10;
      this.tempVec3.set(
        offsetX * Math.sin(time * 2) * Math.sin(time * 3.5),
        0,
        15 * Math.sin(time) * Math.sin(time * 4.5)
      );

      gsap.to(this.center, {
        duration: this.center.distanceTo(this.tempVec3) * 0.1,
        x: this.tempVec3.x,
        z: this.tempVec3.z,
        ease: "none",
        onUpdate: () => {
          this.groupHolder.matrixWorldNeedsUpdate = true;
        },
      });
    }

    gsap.to(this.center, {
      duration: 0,
      y: 2 * Math.sin(time * 10),
      ease: "none",
    });

    gsap.to(this.centerTween, {
      duration: spd * 5,
      x: this.center.x,
      y: this.center.y,
      z: this.center.z,
      ease: "none",
    });

    for (let j = 0; j < this.bonesCount; j++) {
      const mesh = this.meshes[j];
      const bonePos = this.bonesPositions[j];
      const bonePosTween = this.bonesPositionsTween[j];

      if (
        bonePos.x === 0 ||
        Math.random() < 0.003 ||
        (bonePos.distanceTo(this.center) > 13 && !gsap.isTweening(bonePosTween))
      ) {
        const r = 2 * Math.PI * (j / this.bonesCount + Math.random() / 10);

        bonePos.x = this.center.x + Math.sin(r) * 10;
        bonePos.y = 0;
        bonePos.z = this.center.z + Math.cos(r) * 10;
        bonePos.oldCenter.copy(this.center);

        gsap.killTweensOf(bonePosTween);

        gsap.to(bonePosTween, {
          duration: spd * 2,
          x: bonePos.x,
          z: bonePos.z,
        });

        gsap.to(bonePosTween, {
          duration: spd,
          y: 5,
        });

        gsap.to(bonePosTween, {
          duration: spd,
          delay: spd,
          y: bonePos.y,
        });
      }

      // Bones 1
      mesh.skeleton.bones[0].position.copy(this.centerTween);
      mesh.skeleton.bones[0].position.add(
        this.centerTween.clone().multiplyScalar(0.5)
      );

      // Bones 2
      mesh.skeleton.bones[1].position.set(
        bonePosTween.x / 2,
        5 + bonePosTween.y / 2,
        bonePosTween.z / 2
      );
      mesh.skeleton.bones[1].position.sub(
        this.centerTween.clone().multiplyScalar(0.5)
      );

      // Bones 3
      mesh.skeleton.bones[2].position.set(
        bonePosTween.x,
        -10 + bonePosTween.y,
        bonePosTween.z
      );
      mesh.skeleton.bones[2].position.sub(
        this.centerTween.clone().multiplyScalar(1)
      );
    }
  }

  /** Cleans up event listeners and removes Spider */
  dispose() {
    events.off("update", this.update);
    document.removeEventListener("mousedown", this.onMouseDownHandler);
    document.removeEventListener("touchstart", this.onTouchStartHandler);
    this.meshes.forEach((mesh) => {
      mesh.castShadow = true;
      mesh.receiveShadow = false;
    });
    this.meshes.length = 0;
    this.scene.remove(this.groupHolder);
  }
}
