import * as THREE from "three";

export class LightManager {
    constructor() {
        this.directionalLight = null;
        this.ambientLight = null;
        this.helper = null;
        this.shadowCameraHelper = null;
    }

    /**
     * Initializes the lights and adds them to the sceneManager.
     * @param {THREE.Scene} scene - The sceneManager to which the lights will be added.
     */
    init(scene) {
        if (!scene) {
            throw new Error("A valid THREE.Scene instance is required to initialize lights.");
        }

        // Create directional light
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        this.directionalLight.position.set(0, 0.5, -2);
        this.directionalLight.castShadow = true;

        // Configure shadow settings
        const roz = 4; // Shadow camera bounds
        this.directionalLight.shadow.camera.near = -roz * 2;
        this.directionalLight.shadow.camera.far = roz * 2;
        this.directionalLight.shadow.camera.left = -roz;
        this.directionalLight.shadow.camera.right = roz;
        this.directionalLight.shadow.camera.top = roz;
        this.directionalLight.shadow.camera.bottom = -roz;
        this.directionalLight.shadow.mapSize.width = 1024;
        this.directionalLight.shadow.mapSize.height = 1024;

        scene.add(this.directionalLight);

        this.directionalLight2 = new THREE.DirectionalLight(0x949091, 0.01);
        this.directionalLight2.position.set(2.4, 1, -4);
        this.directionalLight2.castShadow = true;
        scene.add(this.directionalLight2);

        // Add a helper for the light
        //this.helper = new THREE.DirectionalLightHelper(this.directionalLight, 0.2, 0xff0000);
        //scene.add(this.helper);

        // Add a shadow camera helper
        //this.shadowCameraHelper = new THREE.CameraHelper(this.directionalLight.shadow.camera);
        //scene.add(this.shadowCameraHelper);

        // Create ambient light
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
