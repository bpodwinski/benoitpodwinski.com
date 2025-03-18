import {
  LinearFilter,
  LinearMipmapLinearFilter,
  ClampToEdgeWrapping,
  DoubleSide,
  MeshBasicMaterial,
  PlaneGeometry,
  Mesh,
  Color,
  CubeTextureLoader,
  SRGBColorSpace,
} from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { PMREMGenerator } from "three";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import * as Settings from "../config/Settings";

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
    this.backgroundType = "color";
    this.debugMode = Settings.DEBUG_MODE;

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
    this.scene.background = new Color(color);
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

    const cubeTextureLoader = new CubeTextureLoader();
    this.envMap = cubeTextureLoader.load(paths);

    this.envMap.colorSpace = SRGBColorSpace;

    this.scene.environment = this.envMap;
    this.scene.background = this.envMap;
    this.backgroundType = "cubemap";

    this.log("CubeMap background loaded successfully");
  }

  /**
   * Sets a background using a textured plane.
   * This method is useful for creating a simple sky or backdrop without using a CubeMap.
   *
   * @param {string} path - The path to the texture file.
   * @param {number} [width=100] - The width of the plane.
   * @param {number} [height=100] - The height of the plane.
   * @param {Object} [position={ x: 0, y: 0, z: 0 }] - The position of the plane in the scene.
   * @param {number} position.x - The x-coordinate of the plane.
   * @param {number} position.y - The y-coordinate of the plane.
   * @param {number} position.z - The z-coordinate of the plane.
   * @param {Object} [rotation={ x: 0, y: 0, z: 0 }] - The rotation of the plane in radians.
   * @param {number} rotation.x - The rotation around the x-axis in radians.
   * @param {number} rotation.y - The rotation around the y-axis in radians.
   * @param {number} rotation.z - The rotation around the z-axis in radians.
   * @param {Object} [scale={ x: 1, y: 1, z: 1 }] - The scale of the plane.
   * @param {number} scale.x - The scale factor along the x-axis.
   * @param {number} scale.y - The scale factor along the y-axis.
   * @param {number} scale.z - The scale factor along the z-axis.
   */
  setPlaneBackground(
    path,
    width = 100,
    height = 100,
    position = { x: 0, y: 0, z: 0 },
    rotation = { x: 0, y: 0, z: 0 },
    scale = { x: 1, y: 1, z: 1 }
  ) {
    const toRadians = (degrees) => degrees * (Math.PI / 180);

    const ktxLoader = new KTX2Loader();
    ktxLoader.setTranscoderPath("assets/libs/basis/");
    ktxLoader.detectSupport(this.renderer);

    ktxLoader.load(path, (texture) => {
      texture.anisotropy = Settings.SettingsState.currentSettings.anisotropy;
      texture.wrapS = ClampToEdgeWrapping;
      texture.wrapT = ClampToEdgeWrapping;
      texture.minFilter = LinearMipmapLinearFilter;
      texture.magFilter = LinearFilter;

      const geometry = new PlaneGeometry(width, height);
      const material = new MeshBasicMaterial({
        map: texture,
        side: DoubleSide,
      });

      this.planeBackground = new Mesh(geometry, material);
      this.planeBackground.position.set(position.x, position.y, position.z);
      this.planeBackground.rotation.set(
        toRadians(rotation.x),
        toRadians(rotation.y),
        toRadians(rotation.z)
      );
      this.planeBackground.scale.set(scale.x, scale.y, scale.z);

      this.envMap = texture;
      this.envMap.colorSpace = SRGBColorSpace;
      this.scene.environment = this.envMap;
      this.scene.background = this.envMap;
      this.backgroundType = "plane";

      this.scene.add(this.planeBackground);

      this.log("Plane background set successfully");
    });
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
