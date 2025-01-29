import * as THREE from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { BokehPass } from "three/examples/jsm/postprocessing/BokehPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";
import { events } from "../lib/EventEmitter";
import { DEBUG_MODE } from "../config/settings";

export class FxManager {
  /**
   * Manages post-processing effects in a Three.js scene.
   * Supports Bloom, Glitch, and Bokeh effects.
   *
   * @param {THREE.Scene} scene - The Three.js scene.
   * @param {THREE.WebGLRenderer} renderer - The WebGL renderer.
   * @param {THREE.Camera} camera - The camera used for rendering.
   * @param {Object} [options={}] - Optional effect configuration.
   */
  constructor(scene, renderer, camera, options = {}) {
    if (!scene || !renderer || !camera) {
      throw new Error(
        "A valid THREE.Scene, THREE.WebGLRenderer, and THREE.Camera are required"
      );
    }

    this.scene = scene;
    this.renderer = renderer;
    this.camera = camera;
    this.config = { ...FxManager.defaultConfig(), ...options };
    this.composer = null;
    this.passes = {};

    this.debugMode = DEBUG_MODE;
    this.log = this.debugMode
      ? console.log.bind(console, "[FxManager]")
      : () => {};

    this.validateConfig();
    this.init();

    // Event listeners
    events.on("update", this.update.bind(this));
    window.addEventListener("resize", this.onResize.bind(this));

    this.log("FxManager initialized");
  }

  /**
   * Returns the default configuration for the effects.
   * @returns {Object} Default effect configuration.
   */
  static defaultConfig() {
    return {
      bloom: { enabled: true, strength: 0.1, radius: 0.6, threshold: 0.9 },
      bokeh: { enabled: false, aperture: 0.000003 },
      glitch: { enabled: false, wild: false },
    };
  }

  /**
   * Validates the configuration object.
   * @throws Will throw an error if configuration values are invalid.
   */
  validateConfig() {
    if (
      typeof this.config.bloom !== "object" ||
      typeof this.config.glitch !== "object" ||
      typeof this.config.bokeh !== "object"
    ) {
      throw new Error("Invalid effect configuration");
    }
  }

  /**
   * Initializes the post-processing effects.
   */
  init() {
    this.setupComposer();
    this.onResize();
  }

  /**
   * Sets up the EffectComposer and its passes based on the configuration.
   */
  setupComposer() {
    if (this.composer) return;

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    if (this.config.bloom.enabled) this.addBloomPass();
    if (this.config.bokeh.enabled) this.addBokehPass();
    if (this.config.glitch.enabled) this.addGlitchPass();

    this.log("Composer setup complete");
  }

  /**
   * Adds a Bloom effect pass.
   */
  addBloomPass() {
    this.passes.bloom = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      this.config.bloom.strength,
      this.config.bloom.radius,
      this.config.bloom.threshold
    );
    this.composer.addPass(this.passes.bloom);
    this.log("Bloom effect added");
  }

  /**
   * Adds a Glitch effect pass.
   */
  addGlitchPass() {
    this.passes.glitch = new GlitchPass();
    this.passes.glitch.goWild = this.config.glitch.wild;
    this.composer.addPass(this.passes.glitch);
    this.log("Glitch effect added");
  }

  /**
   * Adds a Bokeh effect pass.
   */
  addBokehPass() {
    this.passes.bokeh = new BokehPass(this.scene, this.camera, {
      aperture: this.config.bokeh.aperture,
    });
    this.composer.addPass(this.passes.bokeh);
    this.log("Bokeh effect added");
  }

  /**
   * Toggles an effect on or off dynamically.
   * @param {string} effectName - The effect to toggle ("bloom", "bokeh", "glitch").
   * @param {boolean} enabled - Whether the effect should be enabled.
   */
  toggleEffect(effectName, enabled) {
    if (!["bloom", "bokeh", "glitch"].includes(effectName)) {
      console.error(`Invalid effect name: ${effectName}`);
      return;
    }

    this.config[effectName].enabled = enabled;

    if (enabled && !this.passes[effectName]) {
      this[
        `add${effectName.charAt(0).toUpperCase() + effectName.slice(1)}Pass`
      ]();
    } else if (!enabled && this.passes[effectName]) {
      this.composer.passes = this.composer.passes.filter(
        (pass) => pass !== this.passes[effectName]
      );
      delete this.passes[effectName];
    }

    this.log(`Effect "${effectName}" ${enabled ? "enabled" : "disabled"}`);
  }

  /**
   * Handles window resizing to adjust the composer size.
   */
  onResize() {
    const pixelRatio = this.renderer.getPixelRatio();
    const width = Math.max(1, Math.floor(window.innerWidth / pixelRatio));
    const height = Math.max(1, Math.floor(window.innerHeight / pixelRatio));

    if (this.composer) {
      this.composer.setSize(width, height);
    }

    this.log(`Resized effects: ${width}x${height}`);
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

  /**
   * Disposes of the composer and removes event listeners.
   */
  dispose() {
    window.removeEventListener("resize", this.onResize.bind(this));
    events.off("update", this.update.bind(this));

    if (this.composer) {
      this.composer.dispose();
      this.composer = null;
    }

    this.log("FxManager disposed");
  }
}
