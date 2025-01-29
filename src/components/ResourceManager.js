import * as THREE from "three";

export class ResourceManager {
  constructor(loadingManager) {
    this.loadingManager = loadingManager || new THREE.LoadingManager();
    this.textureLoader = new THREE.TextureLoader(this.loadingManager);
    this.resources = {};
  }

  /**
   * Charge une texture et l'ajoute aux ressources.
   * @param {string} key - Clé pour identifier la ressource.
   * @param {string} path - Chemin vers la texture.
   */
  loadTexture(key, path) {
    this.resources[key] = this.textureLoader.load(path);
  }

  /**
   * Récupère une ressource déjà chargée.
   * @param {string} key - Clé de la ressource.
   * @returns {*} - La ressource chargée (ex: texture).
   */
  getResource(key) {
    return this.resources[key];
  }

  /**
   * Retourne le LoadingManager pour configurer les callbacks.
   * @returns {THREE.LoadingManager}
   */
  getLoadingManager() {
    return this.loadingManager;
  }
}
