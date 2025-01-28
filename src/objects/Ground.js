import * as THREE from "three";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";

export class Ground {
    constructor() {
        this.groundMesh = null;
    }

    /**
     * Initializes the ground plane with the specified parameters.
     * @param {THREE.Scene} scene - The Three.js scene to which the ground will be added.
     */
    init(scene) {

        const groundSize = 2.5

        // Load texture
        const alphaMap = new THREE.TextureLoader().load("textures/ground/ground_alpha.png");
        const bumpMap = new THREE.TextureLoader().load("textures/ground/ground_bump.jpg");
        const normalMap = new THREE.TextureLoader().load("textures/ground/ground_normal.jpg");
        const displacementMap = new THREE.TextureLoader().load("textures/ground/ground_displacement.jpg");
        const scale = groundSize * 1.5;

        bumpMap.wrapS = THREE.RepeatWrapping;
        bumpMap.wrapT = THREE.RepeatWrapping;
        bumpMap.repeat.set(scale, scale);

        normalMap.wrapS = THREE.RepeatWrapping;
        normalMap.wrapT = THREE.RepeatWrapping;
        normalMap.repeat.set(scale, scale);

        displacementMap.wrapS = THREE.RepeatWrapping;
        displacementMap.wrapT = THREE.RepeatWrapping;
        displacementMap.repeat.set(scale, scale);

        // Create material
        const groundMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x000000,
            flatShading: false,
            transparent: true,
            transmission: 1,
            clearcoat: 0,
            clearcoatRoughness: 1,
            metalness: 1,
            roughness: 0.08,
            alphaMap: alphaMap,
            bumpMap: bumpMap,
            bumpScale: 0.1,
            normalMap: normalMap,
            normalScale: new THREE.Vector2(0.07, 0.07),
            displacementMap: displacementMap,
            displacementScale: 0.05,
            envMap: scene.environment,
            envMapIntensity: 100,
        });

        this.groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(groundSize, groundSize, 100, 100), groundMaterial);
        this.groundMesh.rotation.x = -Math.PI / 2;
        this.groundMesh.position.y = -0.26;
        this.groundMesh.castShadow = false;
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
}
