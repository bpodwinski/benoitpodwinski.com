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

    this.groupHolder = new THREE.Object3D();
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

    this.scene.add(this.groupHolder);

    this.setupEvents();
    this.setupGround();
    this.reload();
  }

  /** Sets up event listeners for updates and interactions */
  setupEvents() {
    events.on("update", this.update.bind(this));
    document.addEventListener("touchstart", (event) =>
      this.onTouchStart(event)
    );
    document.addEventListener("mousedown", (event) => this.onMouseDown(event));
  }

  /** Initializes ground and listens for its readiness */
  setupGround() {
    if (this.ground) {
      this.ground.init(this.scene);
      events.on("groundReady", (mesh) => {
        this.groundMesh = mesh;
        console.log("Ground mesh is ready:", this.groundMesh);
      });
    }
  }

  /** Reloads Spider, reinitializing materials and bones */
  reload() {
    if (this.dae) {
      this.groupHolder.remove(this.dae);
      this.dae.geometry.dispose();
      this.dae = null;
    }

    this.material = new THREE.MeshPhysicalMaterial({
      color: 0x66fff2,
      metalness: 0.6,
      roughness: 0,
      flatShading: true,
      transparent: false,
      transmission: 1,
      clearcoat: 0.6,
      clearcoatRoughness: 0.4,
      envMap: this.scene.environment,
      envMapIntensity: 10,
      side: THREE.DoubleSide,
    });

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

    const mouse = new THREE.Vector2(
      (x / window.innerWidth) * 2 - 1,
      -(y / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, this.camera);
    const intersects = raycaster.intersectObject(this.groundMesh, true);

    if (intersects[0]) {
      this.mouseControl = true;
      const p = intersects[0].point.multiplyScalar(1 / 0.05);
      gsap.to(this.center, {
        duration: this.center.distanceTo(p) * 0.1,
        x: p.x * 0.6,
        z: p.z * 0.6,
        ease: "linear",
        onComplete: () => {
          this.mouseControl = false;
        },
      });
    }
  }

  /** Updates Spider movement and animations */
  update() {
    const time = Date.now() * 0.0001;
    const i = 0;

    const spd = 0.2;
    if (!this.mouseControl) {
      const des = new THREE.Vector3(
        (window.innerWidth / window.innerHeight) *
          10 *
          Math.sin(i + 2 * time) *
          Math.sin(i + 3.5 * time),
        0,
        15 * Math.sin(i + time) * Math.sin(i + 4.5 * time)
      );

      gsap.to(this.center, {
        duration: this.center.distanceTo(des) * 0.2,
        x: des.x,
        z: des.z,
        ease: "none",
      });
    }

    gsap.to(this.center, {
      duration: 0,
      y: 2 * Math.sin(i + time * 10),
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

      if (
        this.bonesPositions[j].x === 0 ||
        Math.random() < 0.003 ||
        (this.bonesPositions[j].distanceTo(this.center) > 13 &&
          !gsap.isTweening(this.bonesPositionsTween[j]))
      ) {
        const r = 2 * Math.PI * (j / this.bonesCount + Math.random() / 10);

        this.bonesPositions[j].x = this.center.x + Math.sin(r) * 10;
        this.bonesPositions[j].y = 0;
        this.bonesPositions[j].z = this.center.z + Math.cos(r) * 10;
        this.bonesPositions[j].oldCenter.copy(this.center);

        gsap.killTweensOf(this.bonesPositionsTween[j]);

        gsap.to(this.bonesPositionsTween[j], {
          duration: spd * 2,
          x: this.bonesPositions[j].x,
          z: this.bonesPositions[j].z,
        });

        gsap.to(this.bonesPositionsTween[j], {
          duration: spd,
          y: 5,
        });

        gsap.to(this.bonesPositionsTween[j], {
          duration: spd,
          delay: spd,
          y: this.bonesPositions[j].y,
        });
      }

      // Bones 1
      mesh.skeleton.bones[0].position.copy(this.centerTween);
      mesh.skeleton.bones[0].position.add(
        this.centerTween.clone().multiplyScalar(0.5)
      );

      // Bones 2
      mesh.skeleton.bones[1].position.set(
        this.bonesPositionsTween[j].x / 2,
        5 + this.bonesPositionsTween[j].y / 2,
        this.bonesPositionsTween[j].z / 2
      );
      mesh.skeleton.bones[1].position.sub(
        this.centerTween.clone().multiplyScalar(0.5)
      );

      // Bones 3
      mesh.skeleton.bones[2].position.set(
        this.bonesPositionsTween[j].x,
        -10 + this.bonesPositionsTween[j].y,
        this.bonesPositionsTween[j].z
      );
      mesh.skeleton.bones[2].position.sub(
        this.centerTween.clone().multiplyScalar(1)
      );
    }
  }

  /** Cleans up event listeners and removes Spider */
  dispose() {
    events.off("update", this.update);
    document.removeEventListener("mousedown", this.onMouseDown);
    document.removeEventListener("touchstart", this.onTouchStart);
    this.scene.remove(this.groupHolder);
  }
}
