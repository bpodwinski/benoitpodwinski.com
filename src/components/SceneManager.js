import * as THREE from "three";

export class SceneManager {
  constructor() {
    this.scene = new THREE.Scene();
    this.environment = null;
  }

  /**
   * Get the current scene instance.
   * @returns {THREE.Scene} The current scene.
   */
  getScene() {
    return this.scene;
  }

  /**
   * Configure the scene (e.g., fog, background color).
   * @param {Object} config - Configuration for the scene.
   */
  configureScene(config) {
    this.scene.fog = new THREE.Fog(config.BG_COLOR, config.FOG_NEAR, config.FOG_FAR);
    this.scene.background = new THREE.Color(config.BG_COLOR);
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
  }

  /**
   * Set an environment map for the scene (affects reflections and lighting).
   * @param {THREE.Texture} envMap - The environment map texture.
   */
  setEnvironment(envMap) {
    this.environment = envMap;
    this.scene.environment = envMap;
  }

  /**
   * Dispose of scene-related resources (e.g., textures).
   */
  dispose() {
    if (this.environment) {
      this.environment.dispose();
    }

    if (this.scene.background instanceof THREE.Texture) {
      this.scene.background.dispose();
    }
  }
}
