import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { controls } from "./controls";
import { events } from "../lib/eventEmitter";
import { TextureManager } from "./textureManager";
import { Mecha } from "./mecha";
import { gsap } from "gsap";
import { CameraManager } from "./CameraManager";
import { ControlManager } from "./ControlManager";
import { LightManager } from "./LightManager";
import { RendererManager } from "./RendererManager";

export const scene = {
  rendertime: 0,
  cameraManager: null,
  controlManager: null,
  lightManager: null,
  rendererManager: null,
  scene: null,
  fullscreen: false,
  cubeCameraRead: null,
  cubeCameraWrite: null,
  mobile: false,

  BG_COLOR: 0xffffff,
  WIDTH: window.innerWidth,
  HEIGHT: window.innerHeight,

  init() {
    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    const id = parseInt(window.location.hash.slice(1));
    if (!id) controls.fxParams.song = id;

    events.on("update", this.update.bind(this));

    const container = document.getElementById("scene-container");
    if (!container) {
      throw new Error("Container with ID 'scene-container' not found");
    }

    this.rendererManager = new RendererManager(this.WIDTH, this.HEIGHT, this.BG_COLOR);
    this.rendererManager.appendToContainer(container);

    this.scene = new THREE.Scene();

    this.cameraManager = new CameraManager(this.WIDTH, this.HEIGHT);
    const camera = this.cameraManager.getCamera();

    this.scene.fog = new THREE.Fog(this.BG_COLOR, 2, 10);

    this.controlManager = new ControlManager(camera, this.rendererManager.getRenderer().domElement);

    this.lightManager = new LightManager();
    this.lightManager.init(this.scene);

    TextureManager.init();

    this.scene.add(new THREE.AmbientLight(0xffffff, 1));

    const activeViz = [Mecha];
    for (const viz of activeViz) {
      viz.init();
    }

    this.animate();

    gsap.delayedCall(0.1, this.updateShadow.bind(this));
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
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;

    this.cameraManager.updateAspectRatio(this.WIDTH, this.HEIGHT);
    this.rendererManager.updateSize(this.WIDTH, this.HEIGHT);
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

  getScene() {
    return this.scene;
  }
};
