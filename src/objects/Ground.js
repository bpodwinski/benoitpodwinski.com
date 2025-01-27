import * as THREE from "three";

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
}
