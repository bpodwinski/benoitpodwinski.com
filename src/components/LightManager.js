import * as THREE from "three";
import { DEBUG_MODE } from "../config/settings";

export class LightManager {
    constructor() {
        /**
         * Stores all the lights added to the manager.
         * @type {Array<THREE.Light>}
         */
        this.lights = [];

        /**
         * Stores all helpers for the lights.
         * @type {Array<THREE.Object3D>}
         */
        this.helpers = [];
    }

    /**
     * Initializes and adds a light to the scene.
     * @param {THREE.Scene} scene - The scene where the light will be added.
     * @param {Object} config - Configuration object for the light.
     * @param {string} config.type - The type of light (e.g., "DirectionalLight", "AmbientLight").
     * @param {number} [config.color=0xffffff] - The color of the light.
     * @param {number} [config.intensity=1] - The intensity of the light.
     * @param {Array<number>} [config.position=[0, 1, 0]] - The position of the light.
     * @param {Object} [config.shadow] - Shadow settings for directional lights.
     */
    addLight(scene, config) {
        if (!scene) {
            throw new Error("A valid THREE.Scene instance is required.");
        }

        const {
            type,
            color = 0xffffff,
            intensity = 1,
            position = [0, 1, 0],
            shadow = null,
        } = config;

        let light;

        // Create the specified light
        switch (type) {
            case "DirectionalLight":
                light = new THREE.DirectionalLight(color, intensity);
                light.position.set(...position);

                if (shadow) {
                    light.castShadow = true;
                    light.shadow.camera.near = shadow.near || 0.1;
                    light.shadow.camera.far = shadow.far || 100;
                    light.shadow.camera.left = shadow.left || -10;
                    light.shadow.camera.right = shadow.right || 10;
                    light.shadow.camera.top = shadow.top || 10;
                    light.shadow.camera.bottom = shadow.bottom || -10;
                    light.shadow.mapSize.width = shadow.mapSize || 2048;
                    light.shadow.mapSize.height = shadow.mapSize || 2048;
                }
                break;

            case "AmbientLight":
                light = new THREE.AmbientLight(color, intensity);
                break;

            case "PointLight":
                light = new THREE.PointLight(color, intensity);
                light.position.set(...position);
                break;

            default:
                throw new Error(`Unsupported light type: ${type}`);
        }

        // Add the light to the scene and store it
        scene.add(light);
        this.lights.push(light);

        // Add helpers if debug mode is enabled
        if (DEBUG_MODE) {
            this.addHelper(scene, light);
        }
    }

    /**
     * Adds a helper for the specified light.
     * @param {THREE.Scene} scene - The scene where the helper will be added.
     * @param {THREE.Light} light - The light for which the helper will be created.
     */
    addHelper(scene, light) {
        let helper;

        if (light instanceof THREE.DirectionalLight) {
            helper = new THREE.DirectionalLightHelper(light, 1);
            scene.add(helper);

            const shadowHelper = new THREE.CameraHelper(light.shadow.camera);
            scene.add(shadowHelper);
            this.helpers.push(shadowHelper);
        } else if (light instanceof THREE.PointLight) {
            helper = new THREE.PointLightHelper(light, 1);
            scene.add(helper);
        }

        if (helper) {
            this.helpers.push(helper);
        }
    }

    /**
     * Removes all helpers from the scene.
     * @param {THREE.Scene} scene - The scene from which the helpers will be removed.
     */
    removeHelpers(scene) {
        this.helpers.forEach((helper) => {
            scene.remove(helper);
        });
        this.helpers = [];
    }

    /**
     * Disposes all lights and their associated resources.
     * @param {THREE.Scene} scene - The scene from which the lights will be removed.
     */
    dispose(scene) {
        this.lights.forEach((light) => {
            scene.remove(light);
            if (light.dispose) light.dispose();
        });
        this.removeHelpers(scene);
        this.lights = [];
    }
}
