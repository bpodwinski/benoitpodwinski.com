<<<<<<< HEAD
import App from "../components/AppManager";
import { events } from "../lib/EventEmitter";
import { Ground } from "../objects/Ground";
import { Mecha } from "../objects/MechaSpider";
=======
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { events } from "../lib/EventEmitter";
import { Ground } from "../objects/Ground";
import { Mecha } from "../objects/Mecha";
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
import { gsap } from "gsap";
import { CameraManager } from "../components/CameraManager";
import { ControlManager } from "../components/ControlManager";
import { LightManager } from "../components/LightManager";
import { RendererManager } from "../components/RendererManager";
import { FxManager } from "../components/FxManager";
import { BackgroundManager } from "../components/BackgroundManager";
import { SceneManager } from "../components/SceneManager";
<<<<<<< HEAD
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

  /** 🎨 Configure le rendu */
  setupRenderer(container) {
    this.rendererManager = new RendererManager({
      width: window.innerWidth,
      height: window.innerHeight,
      bgColor: 0x000000,
      vrEnabled: true,
    });
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

  /** 🎥 Configure la caméra et les contrôles */
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

  /** 💡 Configure les lumières */
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

  /** 🎞️ Configure les effets */
  setupEffects() {
    // this.fxManager = new FxManager(
    //   this.scene,
    //   this.rendererManager.getRenderer(),
    //   this.cameraManager.getCamera(),
    //   { bloom: { enabled: true, strength: 0.1, radius: 2, threshold: 1 } }
    // );
  }

  /** 🎭 Ajoute les objets 3D */
  setupObjects() {
    const ground = new Ground(this.rendererManager.getRenderer(), App.textures);
    ground.init(this.scene);
    this.mecha = new Mecha(this.scene, this.cameraManager.getCamera(), ground);
  }

  /** 🔄 Met à jour les ombres */
  updateShadow() {
    this.rendererManager.getRenderer().shadowMap.needsUpdate = true;
  }

  /** 🎬 Boucle d'animation optimisée */
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
      console.log("[MainScene] Pause de l'animation (onglet caché)");
      this.running = false;
      cancelAnimationFrame(this.animationFrame);
    } else {
      console.log("[MainScene] Reprise de l'animation (onglet visible)");
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

  /** 🎥 Mise à jour de la scène */
  update() {
    this.controlManager.update();
    this.stats?.update();
    this.rendererManager.render(this.scene, this.cameraManager.getCamera());
  }

  /** 📏 Gestion du redimensionnement */
  onResize() {
    this.cameraManager.updateSize(window.innerWidth, window.innerHeight);
    this.rendererManager.updateSize(window.innerWidth, window.innerHeight);
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
=======

export class MainScene {
    constructor() {
        this.sceneManager = new SceneManager();
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
    }

    init() {
        const scene = this.sceneManager.getScene();
        const lightManager = new LightManager();

        // Initialize stats
        this.stats = new Stats();
        document.body.appendChild(this.stats.dom);

        events.on("update", this.update.bind(this));

        const container = document.getElementById("scene-container");
        if (!container) {
            throw new Error("Container with ID 'scene-container' not found");
        }

        // Renderer setup
        this.rendererManager = new RendererManager(this.CONFIG.WIDTH, this.CONFIG.HEIGHT, this.CONFIG.BG_COLOR);
        this.rendererManager.appendToContainer(container);

        // Scene configuration
        this.sceneManager.configureScene(this.CONFIG);

        // Background setup
        this.backgroundManager = new BackgroundManager();

        // HDRI
        // this.backgroundManager.setHDRIBackground(
        //     scene,
        //     this.rendererManager.getRenderer(),
        //     "textures/hdri_1024.hdr"
        // );

        // Cubemap
        const paths = [
            "textures/px.png", // Positive X
            "textures/nx.png", // Negative X
            "textures/py.png", // Positive Y
            "textures/ny.png", // Negative Y
            "textures/pz.png", // Positive Z
            "textures/nz.png", // Negative Z
        ];
        this.backgroundManager.setCubeMapBackground(
            scene,
            paths
        );

        // Camera and controls
        this.cameraManager = new CameraManager({
            width: this.CONFIG.WIDTH,
            height: this.CONFIG.HEIGHT,
            position: [-1, 0, -0.4],
            scene: scene
        });
        const camera = this.cameraManager.getCamera();

        this.controlManager = new ControlManager(camera, this.rendererManager.getRenderer().domElement);

        // Lights
        lightManager.addLight(scene, {
            type: "DirectionalLight",
            color: 0xffffff,
            intensity: 15,
            position: [5, 2, 0],
            shadow: {
                mapSize: 2048,
            },
        });

        lightManager.addLight(scene, {
            type: "DirectionalLight",
            color: 0xfff4e3,
            intensity: 15,
            position: [5, 5, 4.1],
            shadow: {
                mapSize: 2048,
            },
        });

        // Effects
        this.fxManager = new FxManager(scene, this.rendererManager.getRenderer(), camera);

        // Add objects
        const ground = new Ground();
        const objects = [Mecha];
        for (let object of objects) {
            object.init(scene, camera, ground);
        }

        this.animate();

        gsap.delayedCall(0.1, this.updateShadow.bind(this));
        window.addEventListener("resize", this.onResize.bind(this));
    }

    updateShadow() {
        this.rendererManager.getRenderer().shadowMap.needsUpdate = true;
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        events.emit("update");
    }

    update() {
        this.controlManager.update();

        if (this.stats) {
            this.stats.update();
        }

        this.rendererManager.render(this.sceneManager.getScene(), this.cameraManager.getCamera());
    }

    onResize() {
        this.CONFIG.WIDTH = window.innerWidth;
        this.CONFIG.HEIGHT = window.innerHeight;

        this.cameraManager.updateAspectRatio(this.CONFIG.WIDTH, this.CONFIG.HEIGHT);
        this.rendererManager.updateSize(this.CONFIG.WIDTH, this.CONFIG.HEIGHT);
    }

    dispose() {
        this.rendererManager.dispose();
        this.cameraManager.dispose();
        this.controlManager.dispose();
        this.lightManager.dispose();
        events.off("update", this.update);
        window.removeEventListener("resize", this.onResize.bind(this));
    }
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
}
