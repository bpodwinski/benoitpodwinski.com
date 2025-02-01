import * as THREE from "three";
<<<<<<< HEAD
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { events } from "../lib/EventEmitter";

export class Ground {
  /**
   * @param {THREE.WebGLRenderer} renderer
   */
  constructor(renderer, textures) {
    this.groundMesh = null;
    this.renderer = renderer;
    this.textures = textures;
  }

  /**
   * Initializes the ground plane with the specified parameters.
   * @param {THREE.Scene} scene - The Three.js scene to which the ground will be added.
   */
  init(scene) {
    const groundSize = 8;
    const scale = groundSize * 0.75;

    const { alphaMap, aoMap, normalMap, displacementMap } = this.textures;

    const createGroundMaterial = () => {
      aoMap.wrapS = aoMap.wrapT = THREE.RepeatWrapping;
      aoMap.repeat.set(scale, scale);

      normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
      normalMap.repeat.set(scale, scale);

      displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping;
      displacementMap.repeat.set(scale, scale);

      const groundMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x000000,
        flatShading: false,
        transparent: true,
        transmission: 1,
        clearcoat: 0,
        clearcoatRoughness: 1,
        metalness: 1,
        roughness: 0.1,
        alphaMap: alphaMap,
        aoMap: aoMap,
        aoMapIntensity: 1,
        normalMap: normalMap,
        normalScale: new THREE.Vector2(0.1, 0.1),
        displacementMap: displacementMap,
        displacementScale: 0.01,
        envMap: scene.environment,
        envMapIntensity: 100,
        opacity: 0.6,
      });

      this.groundMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(groundSize, groundSize, 250, 250),
        groundMaterial
      );

      this.groundMesh.rotation.x = -Math.PI / 2;
      this.groundMesh.rotation.z = Math.PI / 2.2;
      this.groundMesh.position.y = -0.26;
      this.groundMesh.castShadow = false;
      this.groundMesh.receiveShadow = true;
      scene.add(this.groundMesh);

      events.emit("groundReady", this.groundMesh);
    };

    createGroundMaterial();
  }

  /**
   * Returns the ground mesh for interactions (e.g., raycasting).
   * @returns {THREE.Mesh} - The ground mesh.
   */
  getGroundMesh() {
    if (!this.groundMesh) {
      return null;
    }
    return this.groundMesh;
  }
=======

export class Ground {
    constructor() {
        this.groundMesh = null;
    }

    /**
     * Initializes the ground plane with the specified parameters.
     * @param {THREE.Scene} scene - The Three.js scene to which the ground will be added.
     */
    init(scene) {

        const groundSize = 20;

        // Load alpha texture
        const gradientTexture = new THREE.TextureLoader().load("textures/ground_alpha.png");

        // Load bump texture
        const groundBump = new THREE.TextureLoader().load("textures/ground_bump.jpg");
        groundBump.wrapS = THREE.RepeatWrapping;
        groundBump.wrapT = THREE.RepeatWrapping;
        groundBump.repeat.set(groundSize / 2, groundSize / 2);

        // Create material
        const groundMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x000000,
            alphaMap: gradientTexture,
            metalness: 1,
            roughness: 0.1,
            flatShading: false,
            transparent: true,
            transmission: 1,
            clearcoat: 0,
            clearcoatRoughness: 1,
            bumpMap: groundBump,
            bumpScale: 2,
            envMap: scene.environment,
            envMapIntensity: 1,
        });

        this.groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(groundSize, groundSize), groundMaterial);
        this.groundMesh.rotation.x = -Math.PI / 2;
        this.groundMesh.position.y = -0.25;
        this.groundMesh.castShadow = true;
        this.groundMesh.receiveShadow = true;

        scene.add(this.groundMesh);
    }

    /**
     * Returns the ground mesh for interactions (e.g., raycasting).
     * @returns {THREE.Mesh} - The ground mesh.
     */
    getGroundMesh() {
        return this.groundMesh;
    }
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
}
