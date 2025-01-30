import * as THREE from "three";
import Settings, { SettingsState } from "../config/Settings.js";

export class RendererManager {
  /**
   * This class manages the WebGLRenderer setup and controls rendering properties.
   * It provides utility methods for updating size, setting background color,
   * and rendering the scene efficiently.
   *
   * @param {Object} config - Configuration object for the renderer.
   * @param {number} config.width - The width of the rendering canvas.
   * @param {number} config.height - The height of the rendering canvas.
   * @param {number} [config.bgColor=0x000000] - The background color of the renderer.
   * @param {boolean} [config.antialias=true] - Whether to enable antialiasing.
   * @param {boolean} [config.alpha=true] - Whether the background should be transparent.
   * @param {boolean} [config.shadowMap=true] - Whether shadows should be enabled.
   * @param {HTMLElement} [config.container=null] - The DOM element where the canvas will be appended.
   */
  constructor(config) {
    this.config = { ...RendererManager.defaultConfig(), ...config };
    this.validateConfig();

    this.log = this.debugMode
      ? console.log.bind(console, "[RendererManager]")
      : () => {};

    this.scale = SettingsState.currentSettings.resolutionScale;
    this.renderer = null;
    this.container = this.config.container;
    this.debugMode = Settings.DEBUG_MODE;
  }

  /**
   * Initializes the renderer.
   * This should be called explicitly after constructing an instance.
   */
  init() {
    if (this.renderer) {
      this.log("Renderer is already initialized.");
      return;
    }

    this.renderer = this.createRenderer();

    if (this.container) this.appendToContainer(this.container);

    this.log("Renderer initialized", this.config);
  }

  /**
   * Returns the default configuration for the renderer.
   * @returns {Object} The default configuration object.
   */
  static defaultConfig() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      bgColor: 0x000000,
      antialias: SettingsState.currentSettings.antialias,
      alpha: true,
      shadowMap: true,
      container: null,
    };
  }

  /**
   * Validates the configuration object.
   * @throws Will throw an error if any required configuration is invalid.
   */
  validateConfig() {
    const { width, height } = this.config;
    if (
      !Number.isFinite(width) ||
      !Number.isFinite(height) ||
      width <= 0 ||
      height <= 0
    ) {
      throw new Error("RendererManager requires valid width and height.");
    }
  }

  /**
   * Creates and returns a WebGLRenderer instance.
   * @returns {THREE.WebGLRenderer} The initialized WebGLRenderer.
   */
  createRenderer() {
    const { width, height, bgColor, antialias, alpha, shadowMap } = this.config;

    const renderer = new THREE.WebGLRenderer({ antialias, alpha });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(bgColor);
    renderer.shadowMap.enabled = shadowMap;
    renderer.shadowMap.autoUpdate = shadowMap;
    renderer.shadowMap.type = SettingsState.currentSettings.shadowQuality;

    this.applyRenderResolution(renderer, this.scale);
    return renderer;
  }

  applyRenderResolution(renderer, scale) {
    if (!renderer) return;

    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const renderWidth = Math.floor(this.config.width * scale);
    const renderHeight = Math.floor(this.config.height * scale);

    renderer.setSize(renderWidth, renderHeight, false);
    renderer.setViewport(0, 0, renderWidth, renderHeight);
    renderer.setScissor(0, 0, renderWidth, renderHeight);
    renderer.setScissorTest(true);
  }

  /**
   * Updates the renderer's size when the window is resized.
   * @param {number} width - The new width of the rendering canvas.
   * @param {number} height - The new height of the rendering canvas.
   */
  updateSize(width = window.innerWidth, height = window.innerHeight) {
    if (!this.renderer) {
      console.warn(
        "[RendererManager] Renderer not initialized, calling init()..."
      );
      this.init();
    }

    this.config.width = width;
    this.config.height = height;

    this.renderer.setSize(width, height, false);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.applyRenderResolution(this.renderer, this.scale);

    this.log(`Renderer resized: ${width}x${height}, Scale: ${this.scale}`);
  }

  /**
   * Appends the renderer's DOM element to a container.
   * @param {HTMLElement} container - The DOM container to append the canvas to.
   */
  appendToContainer(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(
        "A valid DOM container is required to append the renderer."
      );
    }

    if (!this.renderer) {
      this.init();
    }

    container.appendChild(this.renderer.domElement);
    this.log("Renderer appended to container.");
  }

  /**
   * Renders the scene using the provided camera.
   * @param {THREE.Scene} scene - The scene to render.
   * @param {THREE.Camera} camera - The camera used for rendering.
   * @throws Will throw an error if scene or camera are missing.
   */
  render(scene, camera) {
    if (!(scene instanceof THREE.Scene) || !(camera instanceof THREE.Camera)) {
      throw new Error("A valid scene and camera are required for rendering.");
    }
    this.renderer.render(scene, camera);
  }

  /**
   * Returns the WebGLRenderer instance.
   * @returns {THREE.WebGLRenderer} The renderer instance.
   */
  getRenderer() {
    return this.renderer;
  }

  /**
   * Cleans up the renderer and removes its DOM element.
   */
  dispose() {
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(
        this.renderer.domElement
      );
    }
    this.renderer = null;
    this.log("Renderer disposed.");
  }
}
