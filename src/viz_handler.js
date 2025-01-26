import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { ControlsHandler } from "./controls_handler.js";
import { events } from "./lib/Events.js";
import { Assets } from "./viz/assets.js";
import { Mecha } from "./viz/mecha.js";
import { gsap } from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export const VizHandler = {
  rendertime: 0,
  camera: null,
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
    if (!id) ControlsHandler.fxParams.song = id;

    // Écouteur d'événements
    events.on("update", this.update.bind(this));

    // Création du conteneur pour la scène
    const container = document.createElement("div");
    document.body.appendChild(container);

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
    this.camera = new THREE.PerspectiveCamera(
      40,
      this.WIDTH / this.HEIGHT,
      0.1,
      1000
    );
    this.camera.position.set(5, 5, 5);

    // Ajout de brouillard
    this.scene.fog = new THREE.Fog(this.BG_COLOR, 2, 10);

    // Initialisation des contrôles
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
    this.controls.autoRotate = true;
    this.controls.enablePan = false;
    this.controls.enableZoom = true;
    this.controls.enableRotate = true;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.rotateSpeed = 0.05;
    this.controls.minDistance = 1;
    this.controls.maxDistance = 5;
    this.controls.maxPolarAngle = Math.PI;
    this.controls.minPolarAngle = 0;

    // Chargement des assets
    Assets.init();

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
      this.camera.position.set(0, 0, 0);
      this.camera.translateZ(1.8);
    }

    if (this.stats) {
      this.stats.update();
    }

    this.renderer.render(this.scene, this.camera);
  },

  onResize() {
    this.WIDTH = window.innerWidth;
    this.HEIGHT = window.innerHeight;

    this.camera.aspect = this.WIDTH / this.HEIGHT;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
  },

  getCamera() {
    return this.camera;
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
