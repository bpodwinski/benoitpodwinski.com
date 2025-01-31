import * as THREE from "three";
import Settings from "../config/Settings.js";

export class CameraManager {
  /**
   * This class manages the creation and control of a camera, allowing for both
   * perspective and orthographic views. It provides utility methods to update the camera’s
   * properties dynamically, such as position, field of view, and aspect ratio. Additionally,
   * it includes an optional debug helper to visualize the camera frustum in the scene.
   *
   * @param {Object} config - Configuration object for the camera.
   * @param {number} config.width - The width of the rendering viewport.
   * @param {number} config.height - The height of the rendering viewport.
   * @param {number} [config.fov=75] - The field of view (for perspective camera).
   * @param {number} [config.near=0.01] - The near clipping plane distance.
   * @param {number} [config.far=100] - The far clipping plane distance.
   * @param {Array<number>} [config.position=[0, 0, 0]] - The camera position in [x, y, z].
   * @param {boolean} [config.orthographic=false] - Whether to use an orthographic camera.
   * @param {THREE.Scene} [config.scene=null] - The Three.js scene to attach the camera helper.
   */
  constructor(config) {
    this.config = { ...CameraManager.defaultConfig(), ...config };
    this.validateConfig();

    const { scene } = this.config;
    this.camera = this.createCamera();
    this.scene = scene;
    this.cameraHelper = null;

    this.debugMode = Settings.DEBUG_MODE;
    this.log = this.debugMode
      ? console.log.bind(console, "[CameraManager]")
      : () => {};
    if (this.debugMode) this.updateDebugHelper();
    this.log("Camera initialized", this.config);
  }

  static defaultConfig() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      fov: 75,
      near: 0.01,
      far: 100,
      position: [0, 0, 0],
      orthographic: false,
      scene: null,
    };
  }

  validateConfig() {
    const { width, height, position } = this.config;

    if (
      !Number.isFinite(width) ||
      !Number.isFinite(height) ||
      width <= 0 ||
      height <= 0
    ) {
      throw new Error("CameraManager requires valid width and height");
    }

    if (
      !Array.isArray(position) ||
      position.length !== 3 ||
      !position.every(Number.isFinite)
    ) {
      throw new Error("Position must be an array of three numbers: [x, y, z]");
    }
  }

  /**
   * Creates and returns a Three.js camera (Perspective or Orthographic).
   * @returns {THREE.Camera} The created camera.
   */
  createCamera() {
    const { width, height, fov, near, far, position, orthographic } =
      this.config;

    let camera;
    if (orthographic) {
      const aspect = width / height;
      const frustumSize = 10;
      camera = new THREE.OrthographicCamera(
        -frustumSize * aspect,
        frustumSize * aspect,
        frustumSize,
        -frustumSize,
        near,
        far
      );
    } else {
      camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
    }

    if (Array.isArray(position) && position.length === 3) {
      camera.position.set(position[0], position[1], position[2]);
    }
    return camera;
  }

  /**
   * Returns the current camera instance.
   * @returns {THREE.Camera} The camera instance.
   */
  getCamera() {
    return this.camera;
  }

  /**
   * Updates the camera's aspect ratio and projection matrix when resizing.
   * @param {number} width - The new width of the rendering.
   * @param {number} height - The new height of the rendering.
   */
  updateSize(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.log("Camera size updated:", { width, height });
  }

  /**
   * Updates the field of view (FOV) of the camera.
   * @param {number} fov - The new field of view value.
   * @throws Will throw an error if FOV is not a positive number.
   */
  updateFOV(fov) {
    if (!Number.isFinite(fov) || fov <= 0) {
      throw new Error("FOV must be a positive number");
    }
    this.camera.fov = fov;
    this.camera.updateProjectionMatrix();
    this.log("Camera FOV updated:", fov);
  }

  /**
   * Sets the camera's position in the 3D space.
   * @param {Array<number>} position - The new position as [x, y, z].
   */
  setPosition(position) {
    this.camera.position.set(...position);
    this.log("Camera position updated:", position);
  }

  /**
   * Rotates the camera to look at a specific target in the 3D space.
   * @param {Array<number>} target - The target position as [x, y, z].
   * @throws Will throw an error if the target is not properly formatted.
   */
  lookAt(target) {
    if (
      !Array.isArray(target) ||
      target.length !== 3 ||
      !target.every(Number.isFinite)
    ) {
      throw new Error("Target must be an array of three numbers: [x, y, z]");
    }
    this.camera.lookAt(...target);
    this.log("Camera now looking at:", target);
  }

  /**
   * Animates the camera to a new position over a specified duration.
   * @param {Array<number>} position - The target position as [x, y, z].
   * @param {number} duration - Duration of the animation in seconds.
   */
  animateToPosition(position, duration = 1) {
    if (
      !Array.isArray(position) ||
      position.length !== 3 ||
      !position.every(Number.isFinite)
    ) {
      throw new Error("Position must be an array of three numbers: [x, y, z]");
    }

    const start = new THREE.Vector3().copy(this.camera.getWorldPosition);
    const end = new THREE.Vector3().fromArray(position);
    const tempVec = new THREE.Vector3();
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = Math.min((time - startTime) / (duration * 1000), 1);
      tempVec.lerpVectors(start, end, elapsed);
      this.camera.position.copy(tempVec);

      if (elapsed < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
    this.log("Animating camera to position:", position);
  }

  /**
   * Enables or disables the debug camera helper.
   * Adds a visual representation of the camera's frustum.
   */
  updateDebugHelper() {
    if (!this.scene) return;

    if (this.debugMode && !this.cameraHelper) {
      this.cameraHelper = new THREE.CameraHelper(this.camera);
      this.scene.add(this.cameraHelper);
      this.log("Camera helper enabled");
      return;
    }

    if (!this.debugMode && this.cameraHelper) {
      this.scene.remove(this.cameraHelper);
      this.cameraHelper.dispose();
      this.cameraHelper = null;
      this.log("Camera helper disabled and disposed");
    }
  }

  /**
   * Cleans up camera resources and removes helpers.
   */
  dispose() {
    if (this.cameraHelper) {
      this.scene?.remove(this.cameraHelper);
      this.cameraHelper.dispose();
      this.cameraHelper = null;
    }

    this.camera?.clearViewOffset();
    this.camera = null;

    this.log("Camera disposed");
  }
}
