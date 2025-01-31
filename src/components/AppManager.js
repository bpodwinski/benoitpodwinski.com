import * as THREE from "three";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { Benchmark } from "../lib/Benchmark";
import { EventEmitter } from "../lib/EventEmitter";
import { WebGLUtils } from "../lib/WebGLUtils";
import { MainScene } from "../scenes/MainScene";
import { RendererManager } from "./RendererManager";
import Stats from "three/examples/jsm/libs/stats.module";
import Settings from "../config/Settings";

class AppManager {
  constructor() {
    this.events = new EventEmitter();
    this.mainScene = null;
    this.rendererManager = null;
    this.loadingManager = null;
    this.statsElement = null;
    this.stats = null;
    this.textures = {};
    this.debugMode = Settings.DEBUG_MODE;
    this.webGLUtils = new WebGLUtils();
  }

  /**
   * Initializes the application.
   */
  async init() {
    this.log("Initializing application...");

    this.updateLoadingScreen(0);

    const benchmarkPromise = new Benchmark().run(
      this.updateLoadingScreen.bind(this)
    );
    await Promise.all([benchmarkPromise]);

    this.rendererManager = new RendererManager();
    this.rendererManager.init();

    this.setupLoadingManager();
    this.loadAssets();
  }

  /**
   * Sets up the Three.js loading manager to track asset loading.
   */
  setupLoadingManager() {
    this.loadingManager = new THREE.LoadingManager(
      () => this.start(),
      (url, itemsLoaded, itemsTotal) => {
        const progress = Math.round((itemsLoaded / itemsTotal) * 100);
        this.updateLoadingScreen(progress);
      },
      (url) => {
        this.log(`Error loading ${url}`);
      }
    );
  }

  /**
   * Loads required assets using KTX2Loader.
   */
  loadAssets() {
    const ktxLoader = new KTX2Loader(this.loadingManager);
    ktxLoader.setTranscoderPath("assets/libs/basis/");

    if (!this.rendererManager || !this.rendererManager.getRenderer()) {
      this.log("RendererManager is not initialized.");
      return;
    }

    ktxLoader.detectSupport(this.rendererManager.getRenderer());

    this.textures = {};
    const texturesToLoad = {
      alphaMap: "textures/ground/ground_alpha.ktx2",
      aoMap: "textures/ground/ground_ao.ktx2",
      normalMap: "textures/ground/ground_normal.ktx2",
      displacementMap: "textures/ground/ground_displacement.ktx2",
    };

    Object.keys(texturesToLoad).forEach((key) => {
      ktxLoader.load(texturesToLoad[key], (texture) => {
        this.textures[key] = texture;
      });
    });
  }

  /**
   * Updates the loading screen based on the progress.
   * @param {number} progress - Loading progress percentage.
   */
  updateLoadingScreen(progress) {
    const loadingElement = document.getElementById("loading");

    loadingElement.setAttribute("aria-valuenow", progress);
    const progressBar = loadingElement?.querySelector(".progress-bar");
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
      progressBar.textContent = `${progress}%`;
    }

    if (progress >= 100) {
      this.hideLoadingScreen();
    }
  }

  /**
   * Hides the loading screen and reveals the scene.
   */
  async hideLoadingScreen() {
    const loading = document.getElementById("loading");
    if (loading) {
      loading.style.visibility = "hidden";
      loading.style.opacity = "0";
      await setTimeout(() => loading.remove(), 1500);
    }

    const sceneContainer = document.getElementById("scene-container");
    if (sceneContainer) {
      await setTimeout(() => {
        sceneContainer.style.visibility = "visible";
        sceneContainer.style.opacity = "1";
      }, 3500);
    }
  }

  /**
   * Starts the main scene after all assets are loaded.
   */
  start() {
    window.addEventListener("resize", this.onResize.bind(this), false);

    const checkTexturesLoaded = () => {
      const keys = ["alphaMap", "aoMap", "normalMap", "displacementMap"];
      return keys.every((key) => this.textures[key] !== undefined);
    };

    const waitForTextures = () => {
      if (checkTexturesLoaded()) {
        this.log("All textures loaded, initializing MainScene.");
        this.mainScene = new MainScene();
        this.mainScene.init();
        this.onResize();
        this.update();
      } else {
        this.log("Waiting for textures to load...");
        setTimeout(waitForTextures, 100);
      }
    };

    waitForTextures();
  }

  /**
   * Creates performance monitoring statistics.
   */
  createStats() {
    this.stats = new Stats();
    this.stats.dom.style.position = "absolute";
    this.stats.dom.style.top = "0px";
    this.stats.dom.style.left = "0px";
    document.body.appendChild(this.stats.dom);
  }

  /**
   * Creates a panel to display rendering statistics.
   */
  createStatsPanel() {
    this.statsElement = document.createElement("div");
    this.statsElement.id = "stats-container";
    Object.assign(this.statsElement.style, {
      position: "absolute",
      top: "50px",
      left: "0px",
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: "10px",
      fontFamily: "monospace",
      fontSize: "12px",
      borderRadius: "5px",
    });
    document.body.appendChild(this.statsElement);
  }

  /**
   * Updates rendering statistics.
   */
  updateStats() {
    if (!this.mainScene) return;

    const renderer = this.mainScene.rendererManager.getRenderer();
    const info = renderer.info;

    this.statsElement.innerHTML = `
      Triangles: ${info.render.triangles}<br/>
      Lines: ${info.render.lines}<br/>
      Points: ${info.render.points}<br/>
      Textures: ${info.memory.textures}
    `;
  }

  /**
   * Updates the rendering loop.
   */
  update() {
    requestAnimationFrame(this.update.bind(this));
    this.events.emit("update");

    if (this.stats) {
      this.stats.update();
    }

    if (this.statsElement) {
      this.updateStats();
    }
  }

  /**
   * Handles window resize events.
   */
  onResize() {
    if (this.mainScene) {
      this.mainScene.onResize();
    }
  }

  /**
   * Logs messages to the console only if DEBUG_MODE is enabled.
   * @param {...any} args - The messages or objects to log.
   */
  log(...args) {
    if (this.debugMode) {
      console.log("[AppManager]", ...args);
    }
  }
}

// Export an instance of AppManager
const appManager = new AppManager();
export default appManager;
