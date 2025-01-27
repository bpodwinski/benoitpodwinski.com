import * as THREE from "three";

export class RendererManager {
    /**
     * Initializes the renderer.
     * @param {number} width - The width of the rendering canvas.
     * @param {number} height - The height of the rendering canvas.
     * @param {number} bgColor - The background color of the renderer.
     */
    constructor(width, height, bgColor = 0xffffff) {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(bgColor);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.autoUpdate = true;
    }

    /**
     * Appends the renderer's DOM element to a container.
     * @param {HTMLElement} container - The DOM container to append the canvas to.
     */
    appendToContainer(container) {
        if (!container) {
            throw new Error("A valid container is required to append the renderer.");
        }
        container.appendChild(this.renderer.domElement);
    }

    /**
     * Updates the size of the renderer when the window is resized.
     * @param {number} width - The new width of the rendering canvas.
     * @param {number} height - The new height of the rendering canvas.
     */
    updateSize(width, height) {
        this.renderer.setSize(width, height);
    }

    /**
     * Renders the sceneManager using the provided camera.
     * @param {THREE.Scene} scene - The sceneManager to render.
     * @param {THREE.Camera} camera - The camera used for rendering.
     */
    render(scene, camera) {
        if (!scene || !camera) {
            throw new Error("A valid sceneManager and camera are required for rendering.");
        }
        this.renderer.render(scene, camera);
    }

    /**
     * Returns the renderer instance.
     * @returns {THREE.WebGLRenderer} The renderer instance.
     */
    getRenderer() {
        return this.renderer;
    }
}
