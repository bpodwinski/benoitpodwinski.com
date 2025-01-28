import { EventEmitter } from "./lib/EventEmitter";
import { isWebGLSupported, displayWebGLError } from "./lib/webGLUtils";
import { MainScene } from "./scenes/MainScene";
import * as THREE from "three";

const events = new EventEmitter();
const mainScene = new MainScene();

const App = {
  loadingManager: null,

  init() {
    if (!isWebGLSupported()) {
      displayWebGLError();
      return;
    }


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

    this.onResize();
    this.update();
  },

  update() {
    requestAnimationFrame(this.update.bind(this));
    events.emit("update");
  },

  onResize() {
    mainScene.onResize();
  },
};

export default App;
