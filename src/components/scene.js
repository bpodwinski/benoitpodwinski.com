import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { controls } from "./controls";
import { events } from "../lib/eventEmitter";
import { TextureManager } from "./textureManager";
import { Mecha } from "./mecha";
import { gsap } from "gsap";
import { CameraManager } from "./CameraManager";
import { ControlManager } from "./ControlManager";

export const scene = {
  rendertime: 0,
  cameraManager: null,
  scene: null,
  renderer: null,
  controls: null,
  fullscreen: false,
  cubeCameraRead: null,
  cubeCameraWrite: null,
  mobile: false,

  BG_COLOR: 0xffffff,
  directionalLight: null,
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

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    this.renderer.setClearColor(this.BG_COLOR);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.autoUpdate = true;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();

    this.cameraManager = new CameraManager(this.WIDTH, this.HEIGHT);
    const camera = this.cameraManager.getCamera();

    this.scene.fog = new THREE.Fog(this.BG_COLOR, 2, 10);

    this.controlManager = new ControlManager(camera, this.renderer.domElement);

    TextureManager.init();

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(1, 1, 0.5);
    this.directionalLight.castShadow = true;
    const roz = 6;
    this.directionalLight.shadow.camera.near = -roz * 2;
    this.directionalLight.shadow.camera.far = roz * 2;
    this.directionalLight.shadow.camera.left = -roz;
    this.directionalLight.shadow.camera.right = roz;
    this.directionalLight.shadow.camera.top = roz;
    this.directionalLight.shadow.camera.bottom = -roz;
    this.directionalLight.shadow.mapSize.width = 2048;
    this.directionalLight.shadow.mapSize.height = 2048;
    this.directionalLight.shadow.bias = 0.1;
    this.scene.add(this.directionalLight);

    this.scene.add(new THREE.AmbientLight(0xffffff, 1));

    const activeViz = [Mecha];
    for (const viz of activeViz) {
      viz.init();
    }

    this.animate();

    gsap.delayedCall(0.1, this.updateShadow.bind(this));
  },

  updateShadow() {
    this.renderer.shadowMap.needsUpdate = true;
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

    this.renderer.render(this.scene, this.cameraManager.getCamera());
  },

  onResize() {
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;

    this.cameraManager.updateAspectRatio(this.WIDTH, this.HEIGHT);
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
  },

  getCamera() {
    return this.cameraManager.getCamera();
  },

  getScene() {
    return this.scene;
  },

  getRenderer() {
    return this.renderer;
  },

  getControls() {
    return this.controlManager?.getControls();
  }
};
