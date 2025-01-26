import * as THREE from "three";

export class LightManager {
    constructor() {
        this.directionalLight = null;
        this.ambientLight = null;
    }

    /**
     * Initializes the lights and adds them to the scene.
     * @param {THREE.Scene} scene - The scene to which the lights will be added.
     */
    init(scene) {
        if (!scene) {
            throw new Error("A valid THREE.Scene instance is required to initialize lights.");
        }

        // Create a directional light
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        this.directionalLight.position.set(1, 1, 0.5);
        this.directionalLight.castShadow = true;

        const roz = 6; // Shadow camera bounds
        this.directionalLight.shadow.camera.near = -roz * 2;
        this.directionalLight.shadow.camera.far = roz * 2;
        this.directionalLight.shadow.camera.left = -roz;
        this.directionalLight.shadow.camera.right = roz;
        this.directionalLight.shadow.camera.top = roz;
        this.directionalLight.shadow.camera.bottom = -roz;
        this.directionalLight.shadow.mapSize.width = 2048;
        this.directionalLight.shadow.mapSize.height = 2048;
        this.directionalLight.shadow.bias = 0.1;

        scene.add(this.directionalLight);

        // Create an ambient light
        this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(this.ambientLight);
    }

    /**
     * Returns the directional light.
     * @returns {THREE.DirectionalLight} The directional light.
     */
    getDirectionalLight() {
        return this.directionalLight;
    }

    /**
     * Returns the ambient light.
     * @returns {THREE.AmbientLight} The ambient light.
     */
    getAmbientLight() {
        return this.ambientLight;
    }
}
