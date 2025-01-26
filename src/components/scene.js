import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { controls } from "./controls";
import { events } from "../lib/eventEmitter";
import { TextureManager } from "./textureManager";
import { Mecha } from "./mecha";
import { gsap } from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CameraManager } from "./CameraManager";

export class SceneManager {
  constructor(bgColor = 0xffffff) {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(bgColor, 2, 10);
  }

  getScene() {
    return this.scene;
  }
}

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

    // Écouteur d'événements
    events.on("update", this.update.bind(this));

    // Création du conteneur pour la scène
    const container = document.getElementById("scene-container");
    if (!container) {
      throw new Error("Container with ID 'scene-container' not found");
    }

    // Initialisation du renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    this.renderer.setClearColor(this.BG_COLOR);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.autoUpdate = true;
    container.appendChild(this.renderer.domElement);

    // Initialisation de la scène
    this.scene = new THREE.Scene();

    // Initialisation de la caméra
    this.cameraManager = new CameraManager(this.WIDTH, this.HEIGHT);
    const camera = this.cameraManager.getCamera();

    // Ajout de brouillard
    this.scene.fog = new THREE.Fog(this.BG_COLOR, 2, 10);

    // Initialisation des contrôles
    this.controls = new OrbitControls(camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
    this.controls.autoRotate = true;
    this.controls.enablePan = false;
    this.controls.enableZoom = true;
    this.controls.enableRotate = true;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.1;
    this.controls.rotateSpeed = 0.3;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 4;
    this.controls.maxPolarAngle = Math.PI;
    this.controls.minPolarAngle = 0;

    // Chargement des TextureManager
    TextureManager.init();

    // Initialisation de l'éclairage
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

    // Ajout d'une lumière ambiante
    this.scene.add(new THREE.AmbientLight(0xffffff, 1));

    // Initialisation des visualisations actives
    const activeViz = [Mecha];
    for (const viz of activeViz) {
      viz.init();
    }

    this.animate();

    // Mise à jour des ombres
    gsap.delayedCall(0.1, this.updateShadow.bind(this));
  },

  updateShadow() {
    this.renderer.shadowMap.needsUpdate = true;
  },

  remake() {
    const activeViz = [Mecha];
    for (const viz of activeViz) {
      viz.reload();
    }

    this.controls.autoRotateSpeed = 2;

    gsap.delayedCall(5, this.remake.bind(this));
  },

  setOrientationControls(e) {
    if (!e.alpha) {
      return;
    }

    this.controls.enabled = true;
    this.controls = new THREE.DeviceOrientationControls(this.camera, true);
    this.controls.connect();
    this.controls.update();

    window.removeEventListener(
      "deviceorientation",
      this.setOrientationControls
    );
    this.mobile = true;
  },

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    events.emit("update");
  },

  update() {
    this.controls.update();

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

  getLight() {
    return this.directionalLight;
  },

  getRenderer() {
    return this.renderer;
  },

  getCubeCameras() {
    return [this.cubeCameraRead, this.cubeCameraWrite];
  },

  getControls() {
    return this.controls;
  },

  isFullscreen() {
    return this.fullscreen;
  },

  isMobile() {
    return this.mobile;
  },
};
