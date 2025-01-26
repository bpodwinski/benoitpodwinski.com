import * as THREE from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { events } from "../lib/eventEmitter";
import { TextureManager } from "./textureManager";

export class FXManager {
  /**
   * Initializes the FXManager with the provided scene, renderer, and camera.
   * @param {THREE.Scene} scene - The scene instance.
   * @param {THREE.WebGLRenderer} renderer - The renderer instance.
   * @param {THREE.Camera} camera - The camera instance.
   */
  constructor(scene, renderer, camera) {
    this.scene = scene;
    this.renderer = renderer;
    this.camera = camera;

    this.composer = null;
    this.group = new THREE.Group();

    // Initialize event listeners
    events.on("update", this.update.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));

    this.init();
  }

  /**
   * Initializes the post-processing effects and other visual components.
   */
  init() {
    this.setupComposer();
    this.setupGroup();
    this.onResize();
  }

  /**
   * Sets up the EffectComposer and its passes.
   */
  setupComposer() {
    if (!this.composer) {
      const renderPass = new RenderPass(this.scene, this.camera);

      const bloomPass = new UnrealBloomPass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          0.2, // Strength
          0.4, // Radius
          0.8 // Threshold
      );

      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(renderPass);
      this.composer.addPass(bloomPass);
    }
  }

  /**
   * Sets up the group of objects in the scene.
   */
  setupGroup() {
    this.scene.add(this.group);
    this.group.position.y = -1.5;

    const reflectionCube = TextureManager.getCubeMap(0);
    reflectionCube.format = THREE.RGBFormat;

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2, 1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
      bumpScale: 0.8,
      color: new THREE.Color(1, 1, 1),
      metalness: 0.0,
      roughness: 0.5,
      flatShading: true,
      envMap: reflectionCube,
      side: THREE.DoubleSide,
    });

    // Example: Create a mesh and add it to the group
    const mesh = new THREE.Mesh(geometry, material);
    this.group.add(mesh);
  }

  /**
   * Handles window resizing to adjust the composer size.
   */
  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = this.renderer.getPixelRatio();

    const newWidth = Math.floor(width / pixelRatio) || 1;
    const newHeight = Math.floor(height / pixelRatio) || 1;

    if (this.composer) {
      this.composer.setSize(newWidth, newHeight);
    }
  }

  /**
   * Toggles the effects setup (can be extended for more functionality).
   */
  toggle() {
    this.setupComposer();
  }

  /**
   * Updates and renders the effects.
   */
  update() {
    if (this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
