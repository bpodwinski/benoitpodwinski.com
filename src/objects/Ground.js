import * as THREE from "three";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { events } from "../lib/EventEmitter";

export class Ground {
  /**
   * @param {THREE.WebGLRenderer} renderer
   */
  constructor(renderer) {
    this.groundMesh = null;
    this.renderer = renderer;
  }

  /**
   * Initializes the ground plane with the specified parameters.
   * @param {THREE.Scene} scene - The Three.js scene to which the ground will be added.
   */
  init(scene) {
    const groundSize = 2.5;
    const scale = groundSize;

    // Load texture
    const ktxLoader = new KTX2Loader();
    ktxLoader.setTranscoderPath("assets/libs/basis/");
    ktxLoader.detectSupport(this.renderer);

    // Variables pour stocker les textures chargées
    let alphaMap, bumpMap, normalMap, displacementMap;

    // Fonction de vérification et création du matériau
    const createGroundMaterial = () => {
      if (alphaMap && bumpMap && normalMap && displacementMap) {
        // Configurer les textures
        bumpMap.wrapS = bumpMap.wrapT = THREE.RepeatWrapping;
        bumpMap.repeat.set(scale, scale);

        normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
        normalMap.repeat.set(scale, scale);

        displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping;
        displacementMap.repeat.set(scale, scale);

        // Créer le matériau
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
          bumpMap: bumpMap,
          bumpScale: 0.1,
          normalMap: normalMap,
          normalScale: new THREE.Vector2(0.1, 0.1),
          displacementMap: displacementMap,
          displacementScale: 0.02,
          envMap: scene.environment,
          envMapIntensity: 100,
        });

        // Créer et configurer le mesh du sol
        this.groundMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(groundSize, groundSize, 50, 50),
          groundMaterial
        );
        this.groundMesh.rotation.x = -Math.PI / 2;
        this.groundMesh.position.y = -0.26;
        this.groundMesh.castShadow = false;
        this.groundMesh.receiveShadow = true;
        scene.add(this.groundMesh);

        events.emit("groundReady", this.groundMesh);
      }
    };

    // Charger les textures avec callbacks
    ktxLoader.load("textures/ground/ground_alpha.ktx2", (texture) => {
      alphaMap = texture;
      createGroundMaterial();
    });

    ktxLoader.load("textures/ground/ground_bump.ktx2", (texture) => {
      bumpMap = texture;
      createGroundMaterial();
    });

    ktxLoader.load("textures/ground/ground_normal.ktx2", (texture) => {
      normalMap = texture;
      createGroundMaterial();
    });

    ktxLoader.load("textures/ground/ground_displacement.ktx2", (texture) => {
      displacementMap = texture;
      createGroundMaterial();
    });
  }

  /**
   * Returns the ground mesh for interactions (e.g., raycasting).
   * @returns {THREE.Mesh} - The ground mesh.
   */
  getGroundMesh() {
    if (!this.groundMesh) {
      console.warn("Ground mesh is not initialized yet");
      return null;
    }
    return this.groundMesh;
  }
}
