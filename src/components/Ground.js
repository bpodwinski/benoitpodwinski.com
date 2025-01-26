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
        // Load the bump texture
        const groundBump = new THREE.TextureLoader().load("textures/ground_bump.jpg");
        groundBump.wrapS = THREE.RepeatWrapping;
        groundBump.wrapT = THREE.RepeatWrapping;
        groundBump.repeat.set(30, 30);

        // Create the material using MeshPhysicalMaterial
        const groundMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x318ec2,
            metalness: 0.5,
            roughness: 0.25,
            transparent: true,
            transmission: 1,
            clearcoat: 0.2,
            clearcoatRoughness: 0.5,
            bumpMap: groundBump,
            bumpScale: 2,
        });

        // Create the plane geometry for the ground
        this.groundMesh = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), groundMaterial);
        this.groundMesh.rotation.x = -Math.PI / 2;
        this.groundMesh.position.y = -0.25;
        this.groundMesh.castShadow = true;
        this.groundMesh.receiveShadow = true;

        // Add the ground to the scene
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
