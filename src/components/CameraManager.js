import * as THREE from "three";

export class CameraManager {
  /**
   * Initializes the camera.
   * @param {number} width - The width of the rendering (aspect ratio).
   * @param {number} height - The height of the rendering (aspect ratio).
   * @param {number} fov - The field of view (default: 40).
   * @param {number} near - The near clipping plane distance.
   * @param {number} far - The far clipping plane distance.
   */
  constructor(width, height, fov = 30, near = 0.1, far = 2000) {
    /**
     * The perspective camera instance.
     * @type {THREE.PerspectiveCamera}
     */
    this.camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
    this.camera.position.set(-2.3, 1, 8);
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
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
