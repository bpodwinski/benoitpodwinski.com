import {
  LoadingManager,
  Scene,
  PerspectiveCamera,
  Clock,
  AmbientLight,
  DirectionalLight,
  SphereGeometry,
  MeshStandardMaterial,
} from "three";
import Stats from "three/examples/jsm/libs/stats.module";

import { events } from "../lib/EventEmitter";

export class LoadingScene {
  constructor(rendererManager, resourceManager) {
    this.rendererManager = rendererManager;
    this.resourceManager = resourceManager;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.z = 5;

    this.loadingManager = null;
    this.loadingObject = null;
    this.clock = new Clock();
    this.stats = null;

    this.CONFIG = {
      BG_COLOR: 0x000000,
      WIDTH: window.innerWidth,
      HEIGHT: window.innerHeight,
    };
  }

  init() {
    const scene = this.scene;

    // Initialize stats
    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    events.on("update", this.update.bind(this));

    // Renderer setup

    // Initialize loading manager
    this.loadingManager = new LoadingManager(
      () => {
        console.log("All assets loaded");
      },
      (itemUrl, itemsLoaded, itemsTotal) => {
        console.log(`Loading asset: ${itemUrl} (${itemsLoaded}/${itemsTotal})`);
      },
      (error) => {
        console.error("Error loading assets", error);
      }
    );

    // Add lights
    const ambientLight = new AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Add animated object (pulsing sphere)
    const geometry = new SphereGeometry(1, 32, 32);
    const material = new MeshStandardMaterial({
      color: 0x318ec2,
      roughness: 0.5,
      metalness: 0.8,
    });

    this.loadingObject = new THREE.Mesh(geometry, material);
    scene.add(this.loadingObject);
  }

  /**
   * Returns the loading manager
   * @returns {THREE.LoadingManager} The loading manager
   */
  getLoadingManager() {
    if (!this.loadingManager) {
      throw new Error("LoadingManager is not initialized. Call init() first");
    }
    return this.loadingManager;
  }

  /**
   * Updates the loading screen animation
   */
  update() {
    const elapsedTime = this.clock.getElapsedTime();

    // Update loading object animation
    const scale = Math.sin(elapsedTime * 2) * 0.2 + 1;
    this.loadingObject.scale.set(scale, scale, scale);
    this.loadingObject.rotation.y += 0.02;

    if (this.stats) {
      this.stats.update();
    }

    // Render the scene
    this.rendererManager.render(this.scene, this.camera);
  }

  /**
   * Handles window resize events
   */
  onResize() {
    this.CONFIG.WIDTH = window.innerWidth;
    this.CONFIG.HEIGHT = window.innerHeight;

    this.camera.aspect = this.CONFIG.WIDTH / this.CONFIG.HEIGHT;
    this.camera.updateProjectionMatrix();
    this.rendererManager.updateSize(this.CONFIG.WIDTH, this.CONFIG.HEIGHT);
  }

  /**
   * Disposes of scene objects to free memory
   */
  dispose() {
    this.scene.traverse((object) => {
      if (object.isMesh) {
        object.geometry.dispose();
        if (object.material.isMaterial) {
          object.material.dispose();
        }
      }
    });
  }
}
