import { gsap } from "gsap";

import App from "../components/AppManager";
import { events } from "../lib/EventEmitter";
import { Ground } from "../objects/Ground";
import { Mecha } from "../objects/MechaSpider";
import { CameraManager } from "../components/CameraManager";
import { ControlManager } from "../components/ControlManager";
import { LightManager } from "../components/LightManager";
import { RendererManager } from "../components/RendererManager";
import { FxManager } from "../components/FxManager";
import { BackgroundManager } from "../components/BackgroundManager";
import { SceneManager } from "../components/SceneManager";
import { SettingsState } from "../config/Settings";

export class MainScene {
  constructor() {
    this.sceneManager = new SceneManager();
    this.scene = this.sceneManager.getScene();

    this.rendererManager = App.rendererManager;
    this.cameraManager = null;
    this.controlManager = null;
    this.lightManager = null;
    this.fxManager = null;
    this.backgroundManager = null;
    this.stats = null;
    this.running = true;
    this.targetFPS = SettingsState.currentSettings.frameRate;
    this.frameInterval = 1000 / this.targetFPS;
    this.lastFrameTime = 0;
    this.animationFrame = null;
    this.objects = [];
  }

  init() {
    const container = document.getElementById("scene-container");
    if (!container)
      throw new Error("Container with ID 'scene-container' not found");

    this.setupRenderer(container);
    this.setupScene();
    this.setupBackground();
    this.setupCamera();
    this.setupControls();
    this.setupLights();
    this.setupEffects();
    this.setupObjects();
    this.setupObserver();

    events.on("update", this.update.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));
    document.addEventListener(
      "visibilitychange",
      this.handleVisibilityChange.bind(this)
    );

    this.animate();
    gsap.delayedCall(0.1, this.updateShadow.bind(this));
  }

  setupRenderer(container) {
    this.rendererManager = new RendererManager({
      width: window.innerWidth,
      height: window.innerHeight,
      bgColor: 0x000000,
      vrEnabled: true,
    });
    this.rendererManager.appendToContainer(container);
  }

  setupScene() {
    this.sceneManager.configureScene(this.CONFIG);
  }

  setupBackground() {
    this.backgroundManager = new BackgroundManager(
      this.scene,
      this.rendererManager.getRenderer()
    );

    if (SettingsState.currentDetailLevel === "high") {
      const cubeMapPaths = [
        "textures/px.png",
        "textures/nx.png",
        "textures/py.png",
        "textures/ny.png",
        "textures/pz.png",
        "textures/nz.png",
      ];
      this.backgroundManager.setCubeMapBackground(cubeMapPaths);
    } else {
      this.backgroundManager.setPlaneBackground(
        "textures/planete.ktx2",
        130,
        130,
        { x: 50, y: 0, z: 14.3 },
        { x: 0, y: 80, z: -180 },
        { x: 1.1, y: 1, z: 1 }
      );
    }
  }

  setupCamera() {
    this.cameraManager = new CameraManager({
      width: window.innerWidth,
      height: window.innerHeight,
      fov: 35,
      position: [-1.7, 0, -0.5],
      scene: this.scene,
    });
  }

  setupControls() {
    this.controlManager = new ControlManager(
      this.cameraManager.getCamera(),
      this.rendererManager.getRenderer().domElement
    );
  }

  setupLights() {
    this.lightManager = new LightManager(this.scene);

    this.lightManager.addLight({
      type: "DirectionalLight",
      color: 0xffffff,
      intensity: 5,
      position: [5, 2, 0],
      shadow: { mapSize: SettingsState.currentSettings.shadowResolution },
    });

    this.lightManager.addLight({
      type: "DirectionalLight",
      color: 0xfff4e3,
      intensity: 5,
      position: [5, 3, 4.1],
      shadow: { mapSize: SettingsState.currentSettings.shadowResolution },
    });

    this.lightManager.addLight({
      type: "PointLight",
      color: 0xa9fcf5,
      intensity: 3,
      position: [0, -2, 0],
    });
  }

  setupEffects() {
    // this.fxManager = new FxManager(
    //   this.scene,
    //   this.rendererManager.getRenderer(),
    //   this.cameraManager.getCamera(),
    //   { bloom: { enabled: true, strength: 0.1, radius: 2, threshold: 1 } }
    // );
  }

  setupObjects() {
    const ground = new Ground(this.rendererManager.getRenderer(), App.textures);
    ground.init(this.scene);
    this.mecha = new Mecha(this.scene, this.cameraManager.getCamera(), ground);
  }

  updateShadow() {
    this.rendererManager.getRenderer().shadowMap.needsUpdate = true;
  }

  animate() {
    if (!this.running) return;
    const now = performance.now();
    const deltaTime = now - this.lastFrameTime;

    if (deltaTime >= this.frameInterval) {
      this.lastFrameTime = now - (deltaTime % this.frameInterval);
      events.emit("update");
    }

    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }

  handleVisibilityChange() {
    if (document.hidden) {
      this.running = false;
      cancelAnimationFrame(this.animationFrame);
    } else {
      this.running = true;
      this.lastFrameTime = performance.now(); // Évite un saut de temps
      this.animate();
    }
  }

  setupObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.running = entry.isIntersecting;
        if (this.running) {
          this.animate();
        } else {
          cancelAnimationFrame(this.animationFrame);
        }
      });
    });

    observer.observe(this.rendererManager.getRenderer().domElement);
  }

  update() {
    this.controlManager.update();
    this.stats?.update();
    this.rendererManager.render(this.scene, this.cameraManager.getCamera());
  }

  onResize() {
    this.cameraManager.updateSize(window.innerWidth, window.innerHeight);
    this.rendererManager.updateSize(window.innerWidth, window.innerHeight);
  }

  dispose() {
    this.rendererManager.dispose();
    this.cameraManager.dispose();
    this.controlManager.dispose();
    this.lightManager.dispose();
    this.fxManager.dispose();
    this.backgroundManager.dispose();

    events.off("update", this.update);
    window.removeEventListener("resize", this.onResize.bind(this));
  }
}
