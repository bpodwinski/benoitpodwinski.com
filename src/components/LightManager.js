import * as THREE from "three";
<<<<<<< HEAD
import Settings from "../config/Settings.js";

export class LightManager {
  /**
   * Manages lighting setup in a Three.js scene.
   * Supports various light types and their configurations.
   *
   * @param {THREE.Scene} scene - The scene where the lights will be added.
   */
  constructor(scene) {
    if (!scene) {
      throw new Error("A valid THREE.Scene instance is required.");
    }

    this.scene = scene;
    this.lights = [];
    this.helpers = [];
    this.debugMode = Settings.DEBUG_MODE;

    this.log = this.debugMode
      ? console.log.bind(console, "[LightManager]")
      : () => {};
    this.log("LightManager initialized.");
  }

  /**
   * Returns the default configuration for a light.
   * @returns {Object} Default light configuration.
   */
  static defaultConfig() {
    return {
      type: "DirectionalLight",
      color: 0xffffff,
      intensity: 1,
      position: [0, 1, 0],
      shadow: null,
    };
  }

  /**
   * Validates the configuration object.
   * @param {Object} config - Configuration for the light.
   * @throws Will throw an error if configuration values are invalid.
   */
  validateConfig(config) {
    if (!config.type || typeof config.type !== "string") {
      throw new Error("Light type must be a valid string.");
    }
    if (!Array.isArray(config.position) || config.position.length !== 3) {
      throw new Error(
        "Light position must be an array of three numbers [x, y, z]."
      );
    }
  }

  /**
   * Adds a light to the scene with the given configuration.
   * @param {Object} config - Configuration object for the light.
   * @returns {THREE.Light} The created light.
   */
  addLight(config = {}) {
    const lightConfig = { ...LightManager.defaultConfig(), ...config };
    this.validateConfig(lightConfig);

    let light;
    switch (lightConfig.type) {
      case "DirectionalLight":
        light = new THREE.DirectionalLight(
          lightConfig.color,
          lightConfig.intensity
        );
        break;
      case "AmbientLight":
        light = new THREE.AmbientLight(
          lightConfig.color,
          lightConfig.intensity
        );
        break;
      case "PointLight":
        light = new THREE.PointLight(lightConfig.color, lightConfig.intensity);
        break;
      default:
        throw new Error(`Unsupported light type: ${lightConfig.type}`);
    }

    light.position.set(...lightConfig.position);
    this.configureShadows(light, lightConfig.shadow);
    this.scene.add(light);
    this.lights.push(light);

    if (this.debugMode) {
      this.addHelper(light);
    }

    this.log(`Added ${lightConfig.type} to scene.`);
    return light;
  }

  /**
   * Configures shadow settings for a light.
   * @param {THREE.Light} light - The light to configure shadows for.
   * @param {Object|null} shadowConfig - Shadow settings.
   */
  configureShadows(light, shadowConfig) {
    if (
      !shadowConfig ||
      !(
        light instanceof THREE.DirectionalLight ||
        light instanceof THREE.PointLight
      )
    ) {
      return;
    }

    light.castShadow = true;
    light.shadow.radius = shadowConfig.radius || 2;
    light.shadow.camera.near = shadowConfig.near || 0.1;
    light.shadow.camera.far = shadowConfig.far || 100;
    light.shadow.camera.left = shadowConfig.left || -2;
    light.shadow.camera.right = shadowConfig.right || 2;
    light.shadow.camera.top = shadowConfig.top || 2;
    light.shadow.camera.bottom = shadowConfig.bottom || -2;
    light.shadow.mapSize.width = shadowConfig.mapSize || 1024;
    light.shadow.mapSize.height = shadowConfig.mapSize || 1024;

    this.log("Shadows configured for light.");
  }

  /**
   * Adds a helper for the specified light.
   * @param {THREE.Light} light - The light to create a helper for.
   */
  addHelper(light) {
    let helper;
    if (light instanceof THREE.DirectionalLight) {
      helper = new THREE.DirectionalLightHelper(light, 1);
      this.scene.add(helper);

      const shadowHelper = new THREE.CameraHelper(light.shadow.camera);
      this.scene.add(shadowHelper);
      this.helpers.push(shadowHelper);
    } else if (light instanceof THREE.PointLight) {
      helper = new THREE.PointLightHelper(light, 1);
      this.scene.add(helper);
    }

    if (helper) {
      this.helpers.push(helper);
      this.log(`Added helper for ${light.type}`);
    }
  }

  /**
   * Removes all light helpers from the scene.
   */
  removeHelpers() {
    this.helpers.forEach((helper) => {
      this.scene.remove(helper);
    });
    this.helpers = [];
    this.log("Removed all light helpers.");
  }

  /**
   * Removes all lights and helpers from the scene.
   */
  dispose() {
    this.lights.forEach((light) => {
      this.scene.remove(light);
      if (light.dispose) light.dispose();
    });
    this.removeHelpers();
    this.lights = [];

    this.log("Disposed all lights and helpers.");
  }
=======
import { DEBUG_MODE } from "../config/settings";
import {distance} from "three/tsl";

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
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
}
