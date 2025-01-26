import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class ControlManager {
    /**
     * Initializes the controls for the camera.
     * @param {THREE.Camera} camera - The camera to control.
     * @param {HTMLElement} domElement - The DOM element for rendering.
     * @param {Object} [options={}] - Optional configuration for the controls.
     */
    constructor(camera, domElement, options = {}) {
        this.controls = new OrbitControls(camera, domElement);

        // Apply default and custom options
        const defaultOptions = {
            target: { x: 0, y: 0, z: 0 },
            autoRotate: true,
            enablePan: false,
            enableZoom: true,
            enableRotate: true,
            enableDamping: true,
            dampingFactor: 0.1,
            rotateSpeed: 0.3,
            minDistance: 1,
            maxDistance: 4,
            minPolarAngle: 0,
            maxPolarAngle: Math.PI,
        };

        const config = { ...defaultOptions, ...options };

        this.controls.target.set(config.target.x, config.target.y, config.target.z);
        this.controls.autoRotate = config.autoRotate;
        this.controls.enablePan = config.enablePan;
        this.controls.enableZoom = config.enableZoom;
        this.controls.enableRotate = config.enableRotate;
        this.controls.enableDamping = config.enableDamping;
        this.controls.dampingFactor = config.dampingFactor;
        this.controls.rotateSpeed = config.rotateSpeed;
        this.controls.minDistance = config.minDistance;
        this.controls.maxDistance = config.maxDistance;
        this.controls.minPolarAngle = config.minPolarAngle;
        this.controls.maxPolarAngle = config.maxPolarAngle;

        this.controls.update();
    }

    /**
     * Returns the controls instance.
     * @returns {OrbitControls} The controls instance.
     */
    getControls() {
        return this.controls;
    }

    /**
     * Updates the controls.
     */
    update() {
        this.controls.update();
    }
}
