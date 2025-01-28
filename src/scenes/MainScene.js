import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { events } from "../lib/EventEmitter";
import { Ground } from "../objects/Ground";
import { Mecha } from "../objects/Mecha";
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
}
