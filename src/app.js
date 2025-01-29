import { Benchmark } from "./lib/Benchmark.js";
import { EventEmitter } from "./lib/EventEmitter";
import { WebGLUtils } from "./lib/WebGLUtils";
import { MainScene } from "./scenes/MainScene";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";

const events = new EventEmitter();
const mainScene = new MainScene();

const App = {
  loadingManager: null,
  statsElement: null,
  stats: null,

  init() {
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

    const benchmark = new Benchmark();
    //benchmark.start();

    // Initialiser le LoadingManager
    this.loadingManager = new THREE.LoadingManager(
      // Callback quand tout est chargé
      () => {
        console.log("All assets loaded");
        this.start();
      },

      // Callback pour la progression
      (url, itemsLoaded, itemsTotal) => {
        const progress = Math.round((itemsLoaded / itemsTotal) * 100);
        console.log(`Loading ${url} (${progress}%)`);
        this.updateLoadingScreen(progress);
      },

      // Callback en cas d'erreur
      (url) => {
        console.error(`Error loading ${url}`);
      }
    );

    // Afficher l'écran de chargement
    this.showLoadingScreen();

    // Charger les assets
    this.loadAssets();
  },

  loadAssets() {
    // Exemple de chargement d'une texture
    const textureLoader = new THREE.TextureLoader(this.loadingManager);
    textureLoader.load("textures/ground/ground_alpha.png");

    // Tu peux ajouter d'autres loaders ici si besoin
  },

  showLoadingScreen() {
    // Créer un élément HTML pour l'écran de chargement
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
    //loadingElement.innerHTML = '<p id="loading-progress">Loading... 0%</p>';
    document.body.appendChild(loadingElement);
  },

  updateLoadingScreen(progress) {
    // Mettre à jour le pourcentage dans l'écran de chargement
    const progressElement = document.getElementById("loading-progress");
    if (progressElement) {
      progressElement.textContent = `Loading... ${progress}%`;
    }

    if (progress === 100) {
      this.hideLoadingScreen();
    }
  },

  hideLoadingScreen() {
    // Supprimer l'écran de chargement une fois le chargement terminé
    const loadingElement = document.getElementById("loading-screen");
    if (loadingElement) {
      loadingElement.style.display = "none";
    }
  },

  start() {
    // Initialiser la scène après le chargement
    window.addEventListener("resize", this.onResize.bind(this), false);

    mainScene.init();

    this.createStats();
    this.createStatsPanel();

    this.onResize();
    this.update();
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
