import { TextureLoader, LoadingManager } from "three";

export class ResourceManager {
  /**
   * Creates a new instance of ResourceManager
   * @param {THREE.LoadingManager} [loadingManager] - Optional LoadingManager for handling resource loading
   */
  constructor(loadingManager) {
    this.loadingManager = loadingManager || new LoadingManager();
    this.textureLoader = new TextureLoader(this.loadingManager);
    this.resources = {};
  }

  /**
   * Loads a texture and adds it to the resources
   * @param {string} key - The key to identify the resource
   * @param {string} path - The path to the texture file
   */
  loadTexture(key, path) {
    this.resources[key] = this.textureLoader.load(path);
  }

  /**
   * Retrieves a previously loaded resource
   * @param {string} key - The key of the resource
   * @returns {*} The loaded resource (e.g., texture)
   */
  getResource(key) {
    return this.resources[key];
  }

  /**
   * Returns the LoadingManager instance to configure callbacks
   * @returns {THREE.LoadingManager} The LoadingManager instance
   */
  getLoadingManager() {
    return this.loadingManager;
  }
}
