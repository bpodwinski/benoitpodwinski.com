import { LoadingManager, TextureLoader } from "three";

import { EventEmitter } from "./lib/EventEmitter";
import { isWebGLSupported, displayWebGLError } from "./lib/webGLUtils";
import { MainScene } from "./scenes/MainScene";

const events = new EventEmitter();
const mainScene = new MainScene();

const App = {
  loadingManager: null,

  /**
   * Initializes the app and starts loading assets if WebGL is supported
   */
  init() {
    if (!isWebGLSupported()) {
      displayWebGLError();
      return;
    }

    // Initialize the LoadingManager
    this.loadingManager = new LoadingManager(
      () => {
        console.log("All assets loaded");
        this.start();
      },

      // Callback for progress updates
      (url, itemsLoaded, itemsTotal) => {
        const progress = Math.round((itemsLoaded / itemsTotal) * 100);
        console.log(`Loading ${url} (${progress}%)`);
        this.updateLoadingScreen(progress);
      },

      // Callback for errors during loading
      (url) => {
        console.error(`Error loading ${url}`);
      }
    );

    // Show the loading screen
    this.showLoadingScreen();

    // Load assets
    this.loadAssets();
  },

  /**
   * Loads the required assets
   */
  loadAssets() {
    // Example of loading a texture
    const textureLoader = new TextureLoader(this.loadingManager);
    textureLoader.load("textures/ground_alpha.png");

    // You can add other loaders here as needed
  },

  /**
   * Displays the loading screen by creating an HTML element
   */
  showLoadingScreen() {
    const loadingElement = document.createElement("div");
    loadingElement.id = "loading-screen";
    loadingElement.style.position = "fixed";
    loadingElement.style.top = "0";
    loadingElement.style.left = "0";
    loadingElement.style.width = "100%";
    loadingElement.style.height = "100%";
    loadingElement.style.backgroundColor = "#000";
    loadingElement.style.color = "#fff";
    loadingElement.style.display = "flex";
    loadingElement.style.alignItems = "center";
    loadingElement.style.justifyContent = "center";
    loadingElement.style.zIndex = "1000";
    loadingElement.innerHTML = '<p id="loading-progress">Loading... 0%</p>';
    document.body.appendChild(loadingElement);
  },

  /**
   * Updates the loading screen progress percentage
   * @param {number} progress - The current progress percentage
   */
  updateLoadingScreen(progress) {
    const progressElement = document.getElementById("loading-progress");
    if (progressElement) {
      progressElement.textContent = `Loading... ${progress}%`;
    }

    if (progress === 100) {
      this.hideLoadingScreen();
    }
  },

  /**
   * Hides the loading screen once loading is complete
   */
  hideLoadingScreen() {
    const loadingElement = document.getElementById("loading-screen");
    if (loadingElement) {
      loadingElement.style.display = "none";
    }
  },

  /**
   * Starts the main scene and sets up event listeners for window resizing
   */
  start() {
    window.addEventListener("resize", this.onResize.bind(this), false);

    mainScene.init();

    this.onResize();
    this.update();
  },

  /**
   * Updates the app by emitting update events in the animation frame loop
   */
  update() {
    requestAnimationFrame(this.update.bind(this));
    events.emit("update");
  },

  /**
   * Handles window resize events by updating the main scene
   */
  onResize() {
    mainScene.onResize();
  },
};

export default App;
