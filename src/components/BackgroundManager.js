import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { PMREMGenerator } from "three";

export class BackgroundManager {
    constructor() {
        this.envMap = null; // L'environnement actuellement chargé
        this.backgroundType = "color"; // Peut être "color", "hdr", ou "cubemap"
    }

    /**
     * Initialise un fond coloré.
     * @param {THREE.Scene} scene - La scène sur laquelle appliquer le fond.
     * @param {number} color - Couleur du fond (valeur hexadécimale).
     */
    setColorBackground(scene, color = 0x000000) {
        scene.background = new THREE.Color(color);
        scene.environment = null; // Retirer l'environnement
        this.envMap = null; // Pas d'envMap pour un fond coloré
        this.backgroundType = "color";

        console.log(`BackgroundManager: Fond coloré défini (${color.toString(16)})`);
    }

    /**
     * Charge un fond HDRI.
     * @param {THREE.Scene} scene - La scène sur laquelle appliquer le HDRI.
     * @param {THREE.WebGLRenderer} renderer - Le renderer utilisé.
     * @param {string} path - Le chemin vers le fichier HDRI.
     */
    setHDRIBackground(scene, renderer, path) {
        const loader = new RGBELoader();
        const pmremGenerator = new PMREMGenerator(renderer);
        pmremGenerator.compileEquirectangularShader();

        loader.load(
            path,
            (texture) => {
                this.envMap = pmremGenerator.fromEquirectangular(texture).texture;

                scene.environment = this.envMap;
                scene.background = this.envMap;

                texture.dispose();
                pmremGenerator.dispose();

                this.backgroundType = "hdr";
                console.log("BackgroundManager: HDRI chargé avec succès");
            },
            undefined,
            (error) => {
                console.error("BackgroundManager: Erreur lors du chargement du HDRI", error);
            }
        );
    }

    /**
     * Charge une cube map comme fond.
     * @param {THREE.Scene} scene - La scène sur laquelle appliquer la cube map.
     * @param {string[]} paths - Tableau contenant les chemins des six faces.
     */
    setCubeMapBackground(scene, paths) {
        const cubeTextureLoader = new THREE.CubeTextureLoader();
        this.envMap = cubeTextureLoader.load(paths);

        this.envMap.encoding = THREE.SRGBColorSpace;

        scene.environment = this.envMap;
        scene.background = this.envMap;

        this.backgroundType = "cubemap";
        console.log("BackgroundManager: CubeMap chargé avec succès");
    }

    /**
     * Récupère l'environnement actuel (envMap).
     * @returns {THREE.Texture|null} L'environnement actuel ou null si aucun n'est défini.
     */
    getEnvMap() {
        return this.envMap;
    }

    /**
     * Récupère le type actuel de fond.
     * @returns {string} Le type de fond actif ("color", "hdr", "cubemap").
     */
    getBackgroundType() {
        return this.backgroundType;
    }
}
