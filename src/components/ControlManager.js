import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DEBUG_MODE } from "../config/settings";

export class ControlManager {
  /**
   * Manages camera controls using OrbitControls and keyboard input.
   * Handles movement restrictions and camera boundaries.
   *
   * @param {THREE.Camera} camera - The camera to be controlled.
   * @param {HTMLElement} domElement - The HTML container where the WebGL scene is rendered.
   * @param {Object} [options={}] - Optional configuration for customizing controls.
   * @param {Object} [options.target={x:0, y:0, z:0}] - The target point the camera will orbit around.
   * @param {boolean} [options.autoRotate=false] - Whether the camera should auto-rotate around the target.
   * @param {boolean} [options.enablePan=false] - Whether panning (dragging) is enabled.
   * @param {boolean} [options.enableZoom=false] - Whether zooming is enabled.
   * @param {boolean} [options.enableRotate=true] - Whether rotation is enabled.
   * @param {boolean} [options.enableDamping=true] - Whether damping (smooth movement) is enabled.
   * @param {number} [options.dampingFactor=0.1] - The damping factor for smooth movement.
   * @param {number} [options.rotateSpeed=0.1] - The speed of rotation.
   * @param {number} [options.minDistance=2] - The minimum distance from the camera to the target.
   * @param {number} [options.maxDistance=4] - The maximum distance from the camera to the target.
   * @param {number} [options.minAzimuthAngle=-2] - The minimum horizontal rotation angle (in radians).
   * @param {number} [options.maxAzimuthAngle=2] - The maximum horizontal rotation angle (in radians).
   * @param {number} [options.minPolarAngle=1] - The minimum vertical rotation angle (in radians).
   * @param {number} [options.maxPolarAngle=Math.PI/2] - The maximum vertical rotation angle (in radians).
   * @param {Object} [options.bounds] - The boundary limits for camera movement.
   * @param {number} [options.bounds.minX=-2] - The minimum x position for the camera.
   * @param {number} [options.bounds.maxX=4] - The maximum x position for the camera.
   * @param {number} [options.bounds.minY=0] - The minimum y position for the camera.
   * @param {number} [options.bounds.maxY=1] - The maximum y position for the camera.
   * @param {number} [options.bounds.minZ=-1.5] - The minimum z position for the camera.
   * @param {number} [options.bounds.maxZ=1.5] - The maximum z position for the camera.
   */
  constructor(camera, domElement, options = {}) {
    this.camera = camera;
    this.controls = new OrbitControls(camera, domElement);
    this.config = { ...ControlManager.defaultConfig(), ...options };

    this.debugMode = DEBUG_MODE;
    this.log = this.debugMode
      ? console.log.bind(console, "[ControlManager]")
      : () => {};

    this.validateConfig();
    this.applyConfig();
    this.controls.update();
    this.keyboardControls();

    this.log("Controls initialized", this.config);
  }

  /**
   * Returns the default configuration for the controls.
   * @returns {Object} Default controls configuration.
   */
  static defaultConfig() {
    const angleInRadians = THREE.MathUtils.degToRad(15);
    return {
      target: { x: 0, y: 0, z: 0 },
      autoRotate: false,
      enablePan: false,
      enableZoom: false,
      enableRotate: true,
      enableDamping: true,
      dampingFactor: 0.1,
      rotateSpeed: 0.1,
      minDistance: 2,
      maxDistance: 4,
      minAzimuthAngle: -1.825 - angleInRadians,
      maxAzimuthAngle: -1.825 + angleInRadians,
      minPolarAngle: 1,
      maxPolarAngle: Math.PI / 2,
      bounds: {
        minX: -2,
        maxX: 4,
        minY: 0,
        maxY: 1,
        minZ: -1.5,
        maxZ: 1.5,
      },
    };
  }

  /**
   * Validates the configuration object.
   * @throws Will throw an error if configuration values are invalid.
   */
  validateConfig() {
    if (typeof this.config.bounds !== "object" || !this.config.bounds.minX) {
      throw new Error("Invalid bounds configuration");
    }
  }

  /**
   * Applies configuration settings to OrbitControls.
   */
  applyConfig() {
    const cfg = this.config;
    this.controls.target.set(cfg.target.x, cfg.target.y, cfg.target.z);
    this.controls.autoRotate = cfg.autoRotate;
    this.controls.enablePan = cfg.enablePan;
    this.controls.enableZoom = cfg.enableZoom;
    this.controls.enableRotate = cfg.enableRotate;
    this.controls.enableDamping = cfg.enableDamping;
    this.controls.dampingFactor = cfg.dampingFactor;
    this.controls.rotateSpeed = cfg.rotateSpeed;
    this.controls.minDistance = cfg.minDistance;
    this.controls.maxDistance = cfg.maxDistance;
    this.controls.minAzimuthAngle = cfg.minAzimuthAngle;
    this.controls.maxAzimuthAngle = cfg.maxAzimuthAngle;
    this.controls.minPolarAngle = cfg.minPolarAngle;
    this.controls.maxPolarAngle = cfg.maxPolarAngle;
  }

  /**
   * Returns the controls instance.
   * @returns {OrbitControls} The controls instance.
   */
  getControls() {
    return this.controls;
  }

  /**
   * Updates the controls and applies movement bounds.
   */
  update() {
    this.applyBounds();
    this.controls.update();
  }

  /**
   * Adds keyboard-based movement controls.
   */
  keyboardControls() {
    const moveSpeed = 0.1;
    this.keyDownHandler = (event) => {
      const forward = new THREE.Vector3();
      const right = new THREE.Vector3();
      const up = new THREE.Vector3(0, 1, 0);

      this.camera.getWorldDirection(forward);
      forward.y = 0;
      forward.normalize();

      right.crossVectors(forward, up).normalize();

      switch (event.key) {
        case "q": // Strafe left
          this.camera.position.addScaledVector(right, -moveSpeed);
          break;
        case "d": // Strafe right
          this.camera.position.addScaledVector(right, moveSpeed);
          break;
        case "z": // Move forward
          this.camera.position.addScaledVector(forward, moveSpeed);
          break;
        case "s": // Move backward
          this.camera.position.addScaledVector(forward, -moveSpeed);
          break;
        case "e": // Move up
          this.camera.position.addScaledVector(up, moveSpeed);
          break;
        case "a": // Move down
          this.camera.position.addScaledVector(up, -moveSpeed);
          break;
      }

      this.applyBounds();
      this.controls.update();
    };

    window.addEventListener("keydown", this.keyDownHandler);
  }

  /**
   * Clamps the camera position within defined bounds.
   */
  applyBounds() {
    const { minX, maxX, minY, maxY, minZ, maxZ } = this.config.bounds;

    this.camera.position.x = Math.max(
      minX,
      Math.min(maxX, this.camera.position.x)
    );
    this.camera.position.y = Math.max(
      minY,
      Math.min(maxY, this.camera.position.y)
    );
    this.camera.position.z = Math.max(
      minZ,
      Math.min(maxZ, this.camera.position.z)
    );
  }

  /**
   * Disposes of the controls and removes event listeners.
   */
  dispose() {
    window.removeEventListener("keydown", this.keyDownHandler);
    this.controls.dispose();
    this.log("Controls disposed");
  }
}
