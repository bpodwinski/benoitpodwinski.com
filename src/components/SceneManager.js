import * as THREE from "three";
<<<<<<< HEAD
import Settings from "../config/Settings.js";

export class SceneManager {
  /**
   * Manages the Three.js scene setup, including fog, background, and environment settings.
   * It provides utilities for setting background textures and handling resizing events.
   *
   * @param {Object} config - Configuration object for the scene.
   * @param {number} [config.BG_COLOR=0x000000] - The background color.
   * @param {number} [config.FOG_NEAR=1] - The near distance of the fog.
   * @param {number} [config.FOG_FAR=100] - The far distance of the fog.
   * @param {boolean} [config.enableFog=false] - Whether to enable fog.
   * @param {HTMLElement} [config.container=null] - The container element for the renderer.
   * @param {CameraManager} cameraManager - Instance of the camera manager.
   * @param {RendererManager} rendererManager - Instance of the renderer manager.
   */
  constructor(config = {}, cameraManager, rendererManager) {
    this.config = { ...SceneManager.defaultConfig(), ...config };
    this.validateConfig();

    this.scene = new THREE.Scene();
    this.environment = null;
    this.container = this.config.container;

    this.cameraManager = cameraManager;
    this.rendererManager = rendererManager;

    this.debugMode = Settings.DEBUG_MODE;
    this.log = this.debugMode
      ? console.log.bind(console, "[SceneManager]")
      : () => {};

    this.configureScene();
    this.log("Scene initialized", this.config);
  }

  /**
   * Returns the default configuration for the scene.
   * @returns {Object} The default configuration object.
   */
  static defaultConfig() {
    return {
      BG_COLOR: 0x000000,
      FOG_NEAR: 1,
      FOG_FAR: 100,
      enableFog: false,
      container: null,
    };
  }

  /**
   * Validates the configuration object.
   * @throws Will throw an error if any configuration value is invalid.
   */
  validateConfig() {
    if (typeof this.config.BG_COLOR !== "number") {
      throw new Error("BG_COLOR must be a valid hexadecimal number");
    }
    if (
      !Number.isFinite(this.config.FOG_NEAR) ||
      !Number.isFinite(this.config.FOG_FAR)
    ) {
      throw new Error("FOG_NEAR and FOG_FAR must be valid numbers");
    }
=======

export class SceneManager {
  constructor() {
    this.scene = new THREE.Scene();
    this.environment = null;
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
  }

  /**
   * Get the current scene instance.
   * @returns {THREE.Scene} The current scene.
   */
  getScene() {
    return this.scene;
  }

  /**
<<<<<<< HEAD
   * Configures the scene settings, such as background color and fog.
   */
  configureScene() {
    const { BG_COLOR, FOG_NEAR, FOG_FAR, enableFog } = this.config;

    this.scene.background = new THREE.Color(BG_COLOR);
    if (enableFog) {
      this.scene.fog = new THREE.Fog(BG_COLOR, FOG_NEAR, FOG_FAR);
    }
    this.log("Scene configured with", this.config);
=======
   * Configure the scene (e.g., fog, background color).
   * @param {Object} config - Configuration for the scene.
   */
  configureScene(config) {
    this.scene.fog = new THREE.Fog(config.BG_COLOR, config.FOG_NEAR, config.FOG_FAR);
    this.scene.background = new THREE.Color(config.BG_COLOR);
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
  }

  /**
   * Set a custom scene background (e.g., HDRI, CubeMap, or Color).
   * @param {THREE.Texture | THREE.Color | Array} background - The scene background.
   */
  setBackground(background) {
    this.scene.background = background;

    // If the background is an environment map, apply it to the scene environment
    if (background instanceof THREE.Texture || Array.isArray(background)) {
      this.setEnvironment(background);
    }
<<<<<<< HEAD
    this.log("Scene background updated");
=======
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
  }

  /**
   * Set an environment map for the scene (affects reflections and lighting).
   * @param {THREE.Texture} envMap - The environment map texture.
   */
  setEnvironment(envMap) {
    this.environment = envMap;
    this.scene.environment = envMap;
<<<<<<< HEAD
    this.log("Environment map set");
  }

  /**
   * Cleans up scene-related resources (e.g., textures).
=======
  }

  /**
   * Dispose of scene-related resources (e.g., textures).
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
   */
  dispose() {
    if (this.environment) {
      this.environment.dispose();
    }

    if (this.scene.background instanceof THREE.Texture) {
      this.scene.background.dispose();
    }
<<<<<<< HEAD

    this.scene = null;
    this.log("Scene disposed");
=======
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
  }
}
