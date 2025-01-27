import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { events } from "../lib/eventEmitter";
import { TextureManager } from "./textureManager";
import { Mecha } from "./Mecha";
import { gsap } from "gsap";
import { CameraManager } from "./CameraManager";
import { ControlManager } from "./ControlManager";
import { LightManager } from "./LightManager";
import { RendererManager } from "./RendererManager";
import { FXManager } from "./FXManager";
import { Ground } from "./Ground";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { PMREMGenerator } from "three";

export const sceneManager = {
  renderTime: 0,
  cameraManager: null,
  controlManager: null,
  lightManager: null,
  rendererManager: null,
  fxManager: null,
  Ground: null,
  scene: null,
  stats: null,
  mobile: false,

  CONFIG: {
    BG_COLOR: 0x000000,
    WIDTH: window.innerWidth,
    HEIGHT: window.innerHeight,
    FOG_NEAR: 99,
    FOG_FAR: 100,
  },

  init() {
    // Initialize stats
    //this.stats = new Stats();
    //document.body.appendChild(this.stats.dom);

    events.on("update", this.update.bind(this));

    const container = document.getElementById("scene-container");
    if (!container) {
      throw new Error("Container with ID 'sceneManager-container' not found");
    }

    // Initialize renderer
    this.rendererManager = new RendererManager(
        this.CONFIG.WIDTH,
        this.CONFIG.HEIGHT,
        this.CONFIG.BG_COLOR
    );
    this.rendererManager.appendToContainer(container);

    // Initialize sceneManager
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(this.CONFIG.BG_COLOR, this.CONFIG.FOG_NEAR, this.CONFIG.FOG_FAR);

    // Load HDRI
    this.loadHDRI("textures/hdri_1024.hdr");

    // Initialize camera and controls
    this.cameraManager = new CameraManager(this.CONFIG.WIDTH, this.CONFIG.HEIGHT);
    const camera = this.cameraManager.getCamera();
    this.controlManager = new ControlManager(camera, this.rendererManager.getRenderer().domElement);

    // Initialize lights
    this.lightManager = new LightManager();
    this.lightManager.init(this.scene);

    // Initialize textures
    TextureManager.init();

    // Initialize FX
    this.fxManager = new FXManager(this.scene, this.rendererManager.getRenderer(), this.cameraManager.getCamera());

    this.Ground = new Ground();
    this.Ground.init(this.scene);

    // Add visualizations
    const activeViz = [Mecha];
    for (const viz of activeViz) {
      viz.init(this.scene, camera, this.Ground);
    }

    this.animate();

    gsap.delayedCall(0.1, this.updateShadow.bind(this));

    // Handle window resize
    window.addEventListener("resize", this.onResize.bind(this));
  },

  updateShadow() {
    this.rendererManager.getRenderer().shadowMap.needsUpdate = true;
  },

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    events.emit("update");
  },

  update() {
    this.controlManager.update();

    if (this.mobile) {
      const camera = this.cameraManager.getCamera();
      camera.position.set(0, 0, 0);
      camera.translateZ(1.8);
    }

    if (this.stats) {
      this.stats.update();
    }

    this.rendererManager.render(this.scene, this.cameraManager.getCamera());
  },

  onResize() {
    this.CONFIG.WIDTH = window.innerWidth;
    this.CONFIG.HEIGHT = window.innerHeight;

    this.cameraManager.updateAspectRatio(this.CONFIG.WIDTH, this.CONFIG.HEIGHT);
    this.rendererManager.updateSize(this.CONFIG.WIDTH, this.CONFIG.HEIGHT);
  },

  dispose() {
    this.rendererManager.dispose();
    this.cameraManager.dispose();
    this.controlManager.dispose();
    this.lightManager.dispose();
    events.off("update", this.update);
    window.removeEventListener("resize", this.onResize.bind(this));
  },

  getCamera() {
    return this.cameraManager.getCamera();
  },

  getRenderer() {
    return this.rendererManager.getRenderer();
  },

  getControls() {
    return this.controlManager?.getControls();
  },

  loadHDRI(path) {
    const loader = new RGBELoader();
    const pmremGenerator = new PMREMGenerator(this.rendererManager.getRenderer());
    pmremGenerator.compileEquirectangularShader();

    loader.load(
        path,
        (texture) => {
          const envMap = pmremGenerator.fromEquirectangular(texture).texture;

          this.scene.environment = envMap;
          this.scene.background = envMap;

          texture.dispose();
          pmremGenerator.dispose();
        },
        undefined,
        (error) => {
          console.error("Error loading HDRI:", error);
        }
    );
  }
};
