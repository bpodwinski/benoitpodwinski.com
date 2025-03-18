import * as THREE from "three";

export class LoadingManager {
  /**
   * Initializes the loading manager and its callbacks.
   * @param {Function} onLoad - Callback when all assets are loaded.
   * @param {Function} onProgress - Callback during asset loading.
   * @param {Function} onError - Callback when an asset fails to load.
   */
  constructor(onLoad, onProgress, onError) {
    this.loadingManager = new THREE.LoadingManager(onLoad, onProgress, onError);
    this.createLoadingScreen();
  }

  /**
   * Returns the THREE.LoadingManager instance.
   * @returns {THREE.LoadingManager} The loading manager.
   */
  getManager() {
    return this.loadingManager;
  }

  /**
   * Creates and displays the loading screen.
   */
  createLoadingScreen() {
    this.loadingElement = document.createElement("div");
    this.loadingElement.id = "loading-screen";
    this.loadingElement.style.position = "fixed";
    this.loadingElement.style.top = "0";
    this.loadingElement.style.left = "0";
    this.loadingElement.style.width = "100%";
    this.loadingElement.style.height = "100%";
    this.loadingElement.style.backgroundColor = "#000";
    this.loadingElement.style.color = "#fff";
    this.loadingElement.style.display = "flex";
    this.loadingElement.style.alignItems = "center";
    this.loadingElement.style.justifyContent = "center";
    this.loadingElement.style.zIndex = "1000";
    this.loadingElement.innerHTML =
      '<p id="loading-progress">Loading... 0%</p>';
    document.body.appendChild(this.loadingElement);
  }

  /**
   * Updates the loading screen progress.
   * @param {number} progress - The loading progress percentage.
   */
  updateProgress(progress) {
    const progressElement = document.getElementById("loading-progress");
    if (progressElement) {
      progressElement.textContent = `Loading... ${progress}%`;
    }

    if (progress === 100) {
      this.hideLoadingScreen();
    }
  }

  /**
   * Hides and removes the loading screen from the DOM.
   */
  hideLoadingScreen() {
    if (this.loadingElement) {
      this.loadingElement.style.display = "none";
    }
  }
}
