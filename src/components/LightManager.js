import * as THREE from "three";
import { DEBUG_MODE } from "../config/settings";

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
    this.debugMode = DEBUG_MODE;

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
    light.shadow.camera.near = shadowConfig.near || 0.1;
    light.shadow.camera.far = shadowConfig.far || 100;
    light.shadow.camera.left = shadowConfig.left || -10;
    light.shadow.camera.right = shadowConfig.right || 10;
    light.shadow.camera.top = shadowConfig.top || 10;
    light.shadow.camera.bottom = shadowConfig.bottom || -10;
    light.shadow.mapSize.width = shadowConfig.mapSize || 2048;
    light.shadow.mapSize.height = shadowConfig.mapSize || 2048;

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
}
