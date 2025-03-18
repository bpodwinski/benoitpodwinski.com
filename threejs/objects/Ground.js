import {
  Mesh,
  PlaneGeometry,
  Vector2,
  RepeatWrapping,
  MeshPhysicalMaterial,
} from "three";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";

import { events } from "../lib/EventEmitter";

export class Ground {
  /**
   * Creates a new Ground instance
   * @param {THREE.WebGLRenderer} renderer - The WebGL renderer
   * @param {Object} textures - The textures to be used
   */
  constructor(renderer, textures) {
    this.groundMesh = null;
    this.renderer = renderer;
    this.textures = textures;
  }

  /**
   * Initializes the ground plane with the specified parameters
   * @param {THREE.Scene} scene - The Three.js scene to which the ground will be added
   */
  init(scene) {
    const groundSize = 8;
    const scale = groundSize * 0.75;

    const { alphaMap, aoMap, normalMap, displacementMap } = this.textures;

    const createGroundMaterial = () => {
      aoMap.wrapS = aoMap.wrapT = RepeatWrapping;
      aoMap.repeat.set(scale, scale);

      normalMap.wrapS = normalMap.wrapT = RepeatWrapping;
      normalMap.repeat.set(scale, scale);

      displacementMap.wrapS = displacementMap.wrapT = RepeatWrapping;
      displacementMap.repeat.set(scale, scale);

      const groundMaterial = new MeshPhysicalMaterial({
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
        normalScale: new Vector2(0.1, 0.1),
        displacementMap: displacementMap,
        displacementScale: 0.01,
        envMap: scene.environment,
        envMapIntensity: 100,
        opacity: 0.6,
      });

      this.groundMesh = new Mesh(
        new PlaneGeometry(groundSize, groundSize, 250, 250),
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
   * Returns the ground mesh for interactions
   * @returns {THREE.Mesh} The ground mesh
   */
  getGroundMesh() {
    if (!this.groundMesh) {
      return null;
    }
    return this.groundMesh;
  }
}
