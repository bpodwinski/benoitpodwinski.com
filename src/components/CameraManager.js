import * as THREE from "three";
import { DEBUG_MODE } from "../config/settings";

export class CameraManager {
  /**
   * Initializes the camera.
   * @param {Object} config - Configuration object for the camera.
   * @param {number} config.width - The width of the rendering (aspect ratio).
   * @param {number} config.height - The height of the rendering (aspect ratio).
   * @param {number} [config.fov=30] - The field of view.
   * @param {number} [config.near=0.1] - The near clipping plane distance.
   * @param {number} [config.far=100] - The far clipping plane distance.
   * @param {Array<number>} [config.position=[0, 1, 0]] - The position of the camera in [x, y, z].
   * @param {THREE.Scene} [config.scene=null] - The scene where the camera is used.
   */
  constructor({
                width,
                height,
                fov = 30,
                near = 0.01,
                far = 100,
                position = [0, 1, 0],
                scene = null,
              }) {
    if (!width || !height) {
      throw new Error("CameraManager requires width and height for initialization.");
    }

    /**
     * The perspective camera instance.
     * @type {THREE.PerspectiveCamera}
     */
    this.camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
    this.camera.position.set(...position);

    /**
     * Indicates whether debug mode is enabled.
     * @type {boolean}
     */
    this.debugMode = DEBUG_MODE;

    /**
     * Stores the camera helper.
     * @type {THREE.CameraHelper | null}
     */
    this.cameraHelper = null;

    /**
     * Scene reference to add helpers if needed.
     * @type {THREE.Scene | null}
     */
    this.scene = scene;

    if (this.debugMode && this.scene) {
      this.enableDebug();
    }

    this.log("Camera initialized", { position, fov, near, far });
  }

  /**
   * Logs messages to the console if debug mode is enabled.
   * @param {...any} messages - Messages to log.
   */
  log(...messages) {
    if (this.debugMode) {
      console.log(`[CameraManager]`, ...messages);
    }
  }

  /**
   * Returns the initialized camera instance.
   * @returns {THREE.PerspectiveCamera} The initialized camera.
   */
  getCamera() {
    return this.camera;
  }

  /**
   * Updates the camera's aspect ratio and projection matrix on resize.
   * @param {number} width - The new width of the rendering.
   * @param {number} height - The new height of the rendering.
   */
  updateAspectRatio(width, height) {
    if (!width || !height) {
      throw new Error("Width and height must be provided to update the aspect ratio.");
    }

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.log("Aspect ratio updated to:", width / height);
  }

  /**
   * Updates the position of the camera.
   * @param {Array<number>} position - The new position of the camera in [x, y, z].
   */
  updatePosition(position) {
    if (position.length !== 3) {
      throw new Error("Position must be an array of three numbers: [x, y, z].");
    }

    this.camera.position.set(...position);
    this.log("Camera position updated to:", position);
  }

  /**
   * Enables the camera helper for debugging.
   */
  enableDebug() {
    if (!this.cameraHelper && this.scene) {
      this.cameraHelper = new THREE.CameraHelper(this.camera);
      this.scene.add(this.cameraHelper);
      this.log("Camera helper enabled.");
    }
  }
}
