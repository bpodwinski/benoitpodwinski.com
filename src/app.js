import { Benchmark } from "./lib/Benchmark.js";
import { EventEmitter } from "./lib/EventEmitter";
import { WebGLUtils } from "./lib/WebGLUtils";
import { MainScene } from "./scenes/MainScene";
import { RendererManager } from "./components/RendererManager";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";

const events = new EventEmitter();
let mainScene = null;

const App = {
  rendererManager: null,
  loadingManager: null,
  statsElement: null,
  stats: null,
  textures: {},

  async init() {
    if (WebGLUtils.isWebGLSupported()) {
      console.log("WebGL is supported!");
    } else {
      console.log("WebGL is NOT supported!");
    }

    if (WebGLUtils.isWebGL2Supported()) {
      console.log("WebGL 2.0 is supported!");
    } else {
      console.log("WebGL 2.0 is NOT supported!");
    }

    this.updateLoadingScreen(0);

    const benchmarkPromise = new Benchmark().run(
      this.updateLoadingScreen.bind(this)
    );
    await Promise.all([benchmarkPromise]);

    this.rendererManager = new RendererManager();
    this.rendererManager.init();

    // Initialiser le LoadingManager
    this.loadingManager = new THREE.LoadingManager(
      // Callback quand tout est chargé
      () => {
        this.start();
      },

      // Callback pour la progression
      (url, itemsLoaded, itemsTotal) => {
        const progress = Math.round((itemsLoaded / itemsTotal) * 100);
        //console.log(`Loading ${url} (${progress}%)`);
        this.updateLoadingScreen(progress);
      },

      // Callback en cas d'erreur
      (url) => {
        console.error(`Error loading ${url}`);
      }
    );

    this.loadAssets();
  },

  loadAssets() {
    // Initialiser le KTX2Loader
    const ktxLoader = new KTX2Loader(this.loadingManager);
    ktxLoader.setTranscoderPath("assets/libs/basis/");
    if (!this.rendererManager || !this.rendererManager.getRenderer()) {
      console.error("RendererManager is not initialized.");
      return;
    }
    ktxLoader.detectSupport(this.rendererManager.getRenderer());

    // Créer un objet pour stocker les textures
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
  },

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
  },

  async hideLoadingScreen() {
    const loading = document.getElementById("loading");
    if (loading) {
      loading.style.visibility = "hidden";
      loading.style.opacity = "0";
      await setTimeout(() => {
        loading.remove();
      }, 1500);
    }

    const sceneContainer = document.getElementById("scene-container");
    if (sceneContainer) {
      await setTimeout(() => {
        sceneContainer.style.visibility = "visible";
        sceneContainer.style.opacity = "1";
      }, 3500);
    }
  },

  start() {
    window.addEventListener("resize", this.onResize.bind(this), false);

    // Vérifier si toutes les textures sont chargées avant d'initialiser MainScene
    const checkTexturesLoaded = () => {
      const keys = ["alphaMap", "aoMap", "normalMap", "displacementMap"];
      return keys.every((key) => this.textures[key] !== undefined);
    };

    const waitForTextures = () => {
      if (checkTexturesLoaded()) {
        console.log("All textures loaded, initializing MainScene.");
        mainScene = new MainScene();
        mainScene.init();
        this.onResize();
        this.update();
      } else {
        console.log("Waiting for textures to load...");
        setTimeout(waitForTextures, 100);
      }
    };

    waitForTextures();
  },

  createStats() {
    this.stats = new Stats();
    this.stats.dom.style.position = "absolute";
    this.stats.dom.style.top = "0px";
    this.stats.dom.style.left = "0px";
    document.body.appendChild(this.stats.dom);
  },

  createStatsPanel() {
    this.statsElement = document.createElement("div");
    this.statsElement.id = "stats-container";
    this.statsElement.style.position = "absolute";
    this.statsElement.style.top = "50px";
    this.statsElement.style.left = "0px";
    this.statsElement.style.color = "#fff";
    this.statsElement.style.backgroundColor = "rgba(0,0,0,0.5)";
    this.statsElement.style.padding = "10px";
    this.statsElement.style.fontFamily = "monospace";
    this.statsElement.style.fontSize = "12px";
    this.statsElement.style.borderRadius = "5px";
    document.body.appendChild(this.statsElement);
  },

  updateStats() {
    const renderer = mainScene.rendererManager.getRenderer();
    const info = renderer.info;

    this.statsElement.innerHTML = `
      Triangles: ${info.render.triangles}<br/>
      Lines: ${info.render.lines}<br/>
      Points: ${info.render.points}<br/>
      Textures: ${info.memory.textures}
    `;
  },

  update() {
    requestAnimationFrame(this.update.bind(this));
    events.emit("update");

    if (this.stats) {
      this.stats.update();
    }

    if (this.statsElement) {
      this.updateStats();
    }
  },

  onResize() {
    mainScene.onResize();
  },
};

export default App;
