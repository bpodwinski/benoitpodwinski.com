import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class ControlManager {
    /**
     * Initializes the controls for the camera.
     * @param {THREE.Camera} camera - The camera to control.
     * @param {HTMLElement} domElement - The DOM element for rendering.
     * @param {Object} [options={}] - Optional configuration for the controls.
     */
    constructor(camera, domElement, options = {}) {
        this.camera = camera;
        this.controls = new OrbitControls(camera, domElement);

        const angleInRadians = THREE.MathUtils.degToRad(30);

        // Apply default and custom options
        const defaultOptions = {
            target: { x: 0, y: 0, z: 0 },
            autoRotate: false,
            enablePan: false,
            enableZoom: true,
            enableRotate: true,
            enableDamping: true,
            dampingFactor: 0.15,
            rotateSpeed: 0.1,
            minDistance: 2,
            maxDistance: 4,
            minAzimuthAngle: -2 - angleInRadians,
            maxAzimuthAngle: -2 + angleInRadians,
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

        this.config = { ...defaultOptions, ...options };

        this.controls.target.set(this.config.target.x, this.config.target.y, this.config.target.z);
        this.controls.autoRotate = this.config.autoRotate;
        this.controls.enablePan = this.config.enablePan;
        this.controls.enableZoom = this.config.enableZoom;
        this.controls.enableRotate = this.config.enableRotate;
        this.controls.enableDamping = this.config.enableDamping;
        this.controls.dampingFactor = this.config.dampingFactor;
        this.controls.rotateSpeed = this.config.rotateSpeed;
        this.controls.minDistance = this.config.minDistance;
        this.controls.maxDistance = this.config.maxDistance;
        this.controls.minAzimuthAngle = this.config.minAzimuthAngle;
        this.controls.maxAzimuthAngle = this.config.maxAzimuthAngle;
        this.controls.minPolarAngle = this.config.minPolarAngle;
        this.controls.maxPolarAngle = this.config.maxPolarAngle;

        this.controls.update();
        this.keyboardControls();
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
        this.applyBounds();
        this.controls.update();
    }

    keyboardControls() {
        const moveSpeed = 0.1;

        window.addEventListener("keydown", (event) => {
            const forward = new THREE.Vector3(); // Avant/arrière
            const right = new THREE.Vector3();   // Gauche/droite
            const up = new THREE.Vector3(0, 1, 0); // Mouvement vertical

            // Obtenez les axes locaux de la caméra
            this.camera.getWorldDirection(forward); // Direction avant/arrière
            forward.y = 0; // Ignore la composante verticale pour rester au sol
            forward.normalize();

            right.crossVectors(forward, up); // Produit vectoriel pour obtenir le vecteur latéral
            right.normalize();

            switch (event.key) {
                case "q": // Strafe gauche
                    this.camera.position.addScaledVector(right, -moveSpeed);
                    break;
                case "d": // Strafe droite
                    this.camera.position.addScaledVector(right, moveSpeed);
                    break;
                case "z": // Avancer
                    this.camera.position.addScaledVector(forward, moveSpeed);
                    break;
                case "s": // Reculer
                    this.camera.position.addScaledVector(forward, -moveSpeed);
                    break;
                case "e": // Monter (facultatif, si nécessaire)
                    this.camera.position.addScaledVector(up, moveSpeed);
                    break;
                case "a": // Descendre (facultatif, si nécessaire)
                    this.camera.position.addScaledVector(up, -moveSpeed);
                    break;
            }

            this.applyBounds();
            this.controls.update();
        });
    }

    /**
     * Clamps the camera position within defined bounds.
     */
    applyBounds() {
        const { minX, maxX, minY, maxY, minZ, maxZ } = this.config.bounds;

        this.camera.position.x = Math.max(minX, Math.min(maxX, this.camera.position.x));
        this.camera.position.y = Math.max(minY, Math.min(maxY, this.camera.position.y));
        this.camera.position.z = Math.max(minZ, Math.min(maxZ, this.camera.position.z));
    }
}
