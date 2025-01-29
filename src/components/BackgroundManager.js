import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { PMREMGenerator } from "three";
import { DEBUG_MODE } from "../config/settings";

export class BackgroundManager {
  /**
   * Manages the background and environment map for a Three.js scene.
   * Supports color, HDRI, and CubeMap backgrounds.
   *
   * @param {THREE.Scene} scene - The scene where the background is applied.
   * @param {THREE.WebGLRenderer} renderer - The renderer for HDR processing.
   */
  constructor(scene, renderer) {
    if (!scene || !renderer) {
      throw new Error(
        "A valid THREE.Scene and THREE.WebGLRenderer instance are required"
      );
    }

    this.scene = scene;
    this.renderer = renderer;
    this.envMap = null;
    this.backgroundType = "color"; // Default type: color background
    this.debugMode = DEBUG_MODE;

    this.log = this.debugMode
      ? console.log.bind(console, "[BackgroundManager]")
      : () => {};
    this.log("BackgroundManager initialized");
  }

  /**
   * Returns the default background configuration.
   * @returns {Object} Default background configuration.
   */
  static defaultConfig() {
    return {
      type: "color",
      color: 0x000000,
      hdrPath: "",
      cubeMapPaths: [],
    };
  }

  /**
   * Validates the provided configuration.
   * @param {Object} config - Configuration for the background.
   * @throws Will throw an error if the configuration is invalid.
   */
  validateConfig(config) {
    if (
      config.type !== "color" &&
      config.type !== "hdr" &&
      config.type !== "cubemap"
    ) {
      throw new Error(`Invalid background type: ${config.type}`);
    }
    if (config.type === "color" && typeof config.color !== "number") {
      throw new Error("Color background must be a hexadecimal number.");
    }
    if (config.type === "hdr" && !config.hdrPath) {
      throw new Error("HDR background requires a valid file path");
    }
    if (
      config.type === "cubemap" &&
      (!Array.isArray(config.cubeMapPaths) || config.cubeMapPaths.length !== 6)
    ) {
      throw new Error(
        "CubeMap background requires an array of 6 texture paths"
      );
    }
  }

  /**
   * Sets a solid color background.
   * @param {number} color - Hexadecimal color value.
   */
  setColorBackground(color = 0x000000) {
    this.scene.background = new THREE.Color(color);
    this.scene.environment = null;
    this.envMap = null;
    this.backgroundType = "color";

    this.log(`Color background set to ${color.toString(16)}`);
  }

  /**
   * Loads and sets an HDRI background.
   * @param {string} path - Path to the HDR file.
   */
  setHDRIBackground(path) {
    if (!path) {
      console.error("Invalid HDRI path");
      return;
    }

    const loader = new RGBELoader();
    const pmremGenerator = new PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();

    loader.load(
      path,
      (texture) => {
        this.envMap = pmremGenerator.fromEquirectangular(texture).texture;
        this.scene.environment = this.envMap;
        this.scene.background = this.envMap;

        texture.dispose();
        pmremGenerator.dispose();

        this.backgroundType = "hdr";
        this.log("HDRI background loaded successfully");
      },
      undefined,
      (error) => {
        console.error("Error loading HDRI:", error);
      }
    );
  }

  /**
   * Loads and sets a CubeMap background.
   * @param {string[]} paths - Array of 6 texture paths.
   */
  setCubeMapBackground(paths) {
    if (!Array.isArray(paths) || paths.length !== 6) {
      throw new Error("CubeMap requires exactly 6 texture paths");
    }

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    this.envMap = cubeTextureLoader.load(paths);

    this.envMap.encoding = THREE.SRGBColorSpace;

    this.scene.environment = this.envMap;
    this.scene.background = this.envMap;
    this.backgroundType = "cubemap";

    this.log("CubeMap background loaded successfully");
  }

  /**
   * Gets the current environment map.
   * @returns {THREE.Texture|null} The current envMap or null if none is set.
   */
  getEnvMap() {
    return this.envMap;
  }

  /**
   * Gets the current background type.
   * @returns {string} The active background type ("color", "hdr", "cubemap").
   */
  getBackgroundType() {
    return this.backgroundType;
  }

  /**
   * Clears the background and environment map.
   */
  dispose() {
    if (this.envMap) {
      this.envMap.dispose();
      this.envMap = null;
    }

    this.scene.background = null;
    this.scene.environment = null;
    this.backgroundType = "color";

    this.log("Background disposed");
  }
}
