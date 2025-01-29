import { events } from "../lib/EventEmitter";
import { Ground } from "../objects/Ground";
import { Mecha } from "../objects/MechaSpider";
import { gsap } from "gsap";
import { CameraManager } from "../components/CameraManager";
import { ControlManager } from "../components/ControlManager";
import { LightManager } from "../components/LightManager";
import { RendererManager } from "../components/RendererManager";
import { FxManager } from "../components/FxManager";
import { BackgroundManager } from "../components/BackgroundManager";
import { SceneManager } from "../components/SceneManager";

export class MainScene {
  constructor() {
    this.sceneManager = new SceneManager();
    this.scene = this.sceneManager.getScene();

    this.rendererManager = null;
    this.cameraManager = null;
    this.controlManager = null;
    this.lightManager = null;
    this.fxManager = null;
    this.backgroundManager = null;
    this.stats = null;

    this.CONFIG = {
      BG_COLOR: 0x000000,
      WIDTH: window.innerWidth,
      HEIGHT: window.innerHeight,
      FOG_NEAR: 99,
      FOG_FAR: 100,
    };

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

    events.on("update", this.update.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));

    this.animate();
    gsap.delayedCall(0.1, this.updateShadow.bind(this));
  }

  /** 🎨 Configure le rendu */
  setupRenderer(container) {
    this.rendererManager = new RendererManager(
      this.CONFIG.WIDTH,
      this.CONFIG.HEIGHT,
      this.CONFIG.BG_COLOR
    );
    this.rendererManager.appendToContainer(container);
  }

  /** 🎬 Configure la scène */
  setupScene() {
    this.sceneManager.configureScene(this.CONFIG);
  }

  /** 🌅 Configure le fond (HDRI ou CubeMap) */
  setupBackground() {
    this.backgroundManager = new BackgroundManager(
      this.scene,
      this.rendererManager
    );
    const cubeMapPaths = [
      "textures/px.png",
      "textures/nx.png",
      "textures/py.png",
      "textures/ny.png",
      "textures/pz.png",
      "textures/nz.png",
    ];
    this.backgroundManager.setCubeMapBackground(cubeMapPaths);
  }

  /** 🎥 Configure la caméra et les contrôles */
  setupCamera() {
    this.cameraManager = new CameraManager({
      width: this.CONFIG.WIDTH,
      height: this.CONFIG.HEIGHT,
      fov: 35,
      position: [-1.5, 0, -0.4],
      scene: this.scene,
    });
  }

  setupControls() {
    this.controlManager = new ControlManager(
      this.cameraManager.getCamera(),
      this.rendererManager.getRenderer().domElement
    );
  }

  /** 💡 Configure les lumières */
  setupLights() {
    this.lightManager = new LightManager(this.scene);

    this.lightManager.addLight({
      type: "DirectionalLight",
      color: 0xffffff,
      intensity: 5,
      position: [5, 2, 0],
      shadow: { mapSize: 4096 },
    });

    this.lightManager.addLight({
      type: "DirectionalLight",
      color: 0xfff4e3,
      intensity: 5,
      position: [5, 3, 4.1],
      shadow: { mapSize: 4096 },
    });

    this.lightManager.addLight({
      type: "PointLight",
      color: 0xa9fcf5,
      intensity: 3,
      position: [0, -2, 0],
    });
  }

  /** 🎞️ Configure les effets */
  setupEffects() {
    this.fxManager = new FxManager(
      this.scene,
      this.rendererManager.getRenderer(),
      this.cameraManager.getCamera(),
      { bloom: { enabled: true, strength: 0.1, radius: 2, threshold: 1 } }
    );
  }

  /** 🎭 Ajoute les objets 3D */
  setupObjects() {
    const ground = new Ground(this.rendererManager.getRenderer());
    ground.init(this.scene);

    this.mecha = new Mecha(this.scene, this.cameraManager.getCamera(), ground);
  }

  /** 🔄 Met à jour les ombres */
  updateShadow() {
    this.rendererManager.getRenderer().shadowMap.needsUpdate = true;
  }

  /** 🎬 Boucle d'animation */
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    events.emit("update");
  }

  /** 🎥 Mise à jour de la scène */
  update() {
    this.controlManager.update();
    this.stats?.update();
    this.rendererManager.render(this.scene, this.cameraManager.getCamera());
  }

  /** 📏 Gestion du redimensionnement */
  onResize() {
    this.CONFIG.WIDTH = window.innerWidth;
    this.CONFIG.HEIGHT = window.innerHeight;
    this.cameraManager.updateSize(this.CONFIG.WIDTH, this.CONFIG.HEIGHT);
    this.rendererManager.updateSize(this.CONFIG.WIDTH, this.CONFIG.HEIGHT);
  }

  /** 🗑️ Libère les ressources */
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
