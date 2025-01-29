import * as THREE from "three";

export class AssetManager {
  constructor(loadingManager) {
    this.loadingManager = loadingManager;

    // Stockage des assets chargés
    this.textures = new Map();
    this.models = new Map();
  }

  /**
   * Load a texture and store it for later use.
   * @param {string} key - The unique key for the texture.
   * @param {string} url - The URL of the texture to load.
   */
  loadTexture(key, url) {
    const textureLoader = new THREE.TextureLoader(this.loadingManager);
    textureLoader.load(url, (texture) => {
      this.textures.set(key, texture);
      console.log(`Texture loaded: ${key}`);
    });
  }

  /**
   * Get a loaded texture by its key.
   * @param {string} key - The key of the texture.
   * @returns {THREE.Texture | null} The loaded texture, or null if not found.
   */
  getTexture(key) {
    return this.textures.get(key) || null;
  }

  /**
   * Load a model and store it for later use.
   * @param {string} key - The unique key for the model.
   * @param {string} url - The URL of the model to load.
   * @param {THREE.Loader} loader - The loader to use (e.g., GLTFLoader).
   */
  loadModel(key, url, loader) {
    loader.load(url, (model) => {
      this.models.set(key, model);
      console.log(`Model loaded: ${key}`);
    });
  }

  /**
   * Get a loaded model by its key.
   * @param {string} key - The key of the model.
   * @returns {THREE.Object3D | null} The loaded model, or null if not found.
   */
  getModel(key) {
    return this.models.get(key) || null;
  }
}
