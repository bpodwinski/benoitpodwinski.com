import * as THREE from "three";
import { DEBUG_MODE } from "../config/settings";

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

    this.renderer = this.createRenderer();
    this.container = this.config.container;
    this.debugMode = DEBUG_MODE;

    this.log = this.debugMode
      ? console.log.bind(console, "[RendererManager]")
      : () => {};
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
      antialias: true,
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

    return renderer;
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
    container.appendChild(this.renderer.domElement);
    this.log("Renderer appended to container.");
  }

  /**
   * Updates the renderer's size when the window is resized.
   * @param {number} width - The new width of the rendering canvas.
   * @param {number} height - The new height of the rendering canvas.
   */
  updateSize(width, height) {
    this.renderer.setSize(width, height);
    this.log("Renderer size updated:", { width, height });
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
