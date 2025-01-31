import * as THREE from "three";
import App from "../components/AppManager";
import Settings, { updateSettings, SettingsState } from "../config/Settings";

/**
 * Benchmark class: Runs a WebGL performance test using Three.js by counting total frames rendered.
 */
export class Benchmark {
  /**
   * Initializes the benchmark with a given duration.
   * @param {number} duration - The duration of the benchmark in seconds.
   */
  constructor(duration = 3, width = 100, height = 100) {
    this.duration = duration * 1000;
    this.width = width;
    this.height = height;
    this.startTime = performance.now();
    this.frameCount = 0;
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.overlay = null;
    this.running = false;

    this.debugMode = Settings.DEBUG_MODE;
    this.log = this.debugMode
      ? console.log.bind(console, "[Benchmark]")
      : () => {};
  }

  /**
   * Runs the benchmark and returns a promise that resolves with the recommended detail level.
   * @returns {Promise<string>} Resolves when the benchmark is complete.
   */
  run() {
    if (this.running) {
      return Promise.resolve(SettingsState.currentDetailLevel);
    }
    this.running = true;

    return new Promise((resolve) => {
      this.start();

      let elapsedTime = 0;
      const interval = setInterval(() => {
        elapsedTime += 100;
        const progress = Math.round((elapsedTime / this.duration) * 50);
        App.updateLoadingScreen(progress);
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        this.stop();
        resolve(this.determineDetailLevel(this.frameCount));
      }, this.duration);
    });
  }

  /**
   * Starts the benchmark by initializing Three.js and running the test.
   */
  start() {
    this.log(`[Benchmark] Starting benchmark at ${this.width}x${this.height}`);

    this.setupScene();

    requestAnimationFrame(this.update.bind(this));
  }

  /**
   * Sets up a temporary Three.js scene with high rendering complexity.
   */
  setupScene() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      120,
      this.width / this.height,
      0.1,
      100
    );
    this.camera.position.set(0, 15, 0);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.shadowMap.enabled = true;

    // Empêcher le canvas de s'adapter à la fenêtre
    this.renderer.domElement.style.position = "absolute";
    this.renderer.domElement.style.left = "50%";
    this.renderer.domElement.style.top = "50%";
    this.renderer.domElement.style.transform = "translate(-50%, -50%)";

    this.renderer.domElement.id = "benchmark";
    this.renderer.domElement.style.display = "none";
    document.body.appendChild(this.renderer.domElement);

    this.createGround();
    this.createObjects();
    this.addLighting();
  }

  /**
   * Creates a reflective ground plane.
   */
  createGround() {
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 1,
      metalness: 0,
      clearcoat: 0.5,
      clearcoatRoughness: 0,
      transmission: 1,
    });

    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);
  }

  /**
   * Creates a grid of objects including icosahedrons and cubes.
   */
  createObjects() {
    const rows = 15;
    const cols = 15;
    const spacing = 4;

    this.meshes = [];

    const icosahedronGeometry = new THREE.IcosahedronGeometry(1.5, 64);
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xff0000,
      roughness: 0.05,
      metalness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transmission: 0.8,
      ior: 1.5,
      envMapIntensity: 5,
      transparent: true,
    });

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const isCube = (i + j) % 2 === 0;
        const geometry = isCube ? cubeGeometry : icosahedronGeometry;

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
          (i - rows / 2.1) * spacing,
          isCube ? 3 : 3,
          (j - cols / 2.1) * spacing
        );
        mesh.castShadow = true;
        this.scene.add(mesh);
        this.meshes.push(mesh);
      }
    }
  }

  /**
   * Adds lighting to the scene.
   */
  addLighting() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 20);
    directionalLight.position.set(0, 4, 0);

    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = 50;
    directionalLight.shadow.camera.bottom = -50;

    this.scene.add(directionalLight);
  }

  /**
   * Updates the benchmark on each frame.
   */
  update() {
    if (!this.running) return;

    requestAnimationFrame(this.update.bind(this));

    this.frameCount++;

    const time = performance.now() * 0.001;
    this.meshes.forEach((mesh, index) => {
      mesh.rotation.x = time + index * 0.1;
      mesh.rotation.y = time + index * 0.1;
    });

    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Stops the benchmark and calculates performance results.
   */
  stop() {
    if (!this.running) {
      console.warn(
        "[Benchmark] Stop called, but benchmark is already stopped."
      );
      return;
    }

    this.running = false;

    if (!this.renderer) {
      console.warn("[Benchmark] Renderer is already disposed.");
      return;
    }

    const totalFrames = this.frameCount;
    const info = this.renderer.info;
    const triangleCount = info.render.triangles;

    const score = Math.round(totalFrames * (triangleCount / 100000));
    const recommendedDetail = this.determineDetailLevel(score);

    this.log(`[Benchmark] Total Frames Rendered: ${totalFrames}`);
    this.log(`[Benchmark] Rendered Triangles: ${triangleCount}`);
    this.log(`[Benchmark] Performance Score: ${score}`);
    this.log(`[Benchmark] Recommended Detail Level: ${recommendedDetail}`);

    updateSettings(recommendedDetail);

    this.dispose();
  }

  /**
   * Determines the optimal detail level based on benchmark score and updates settings.
   * @param {number} score - The performance score calculated.
   * @returns {string} The recommended detail level.
   */
  determineDetailLevel(score) {
    let level;

    if (score < 1500 * (this.duration / 1000)) {
      level = "low";
    } else if (score <= 2500 * (this.duration / 1000)) {
      level = "medium";
    } else {
      level = "high";
    }

    return level;
  }

  /**
   * Cleans up the benchmark resources.
   */
  dispose() {
    if (this.renderer) {
      this.renderer.domElement.remove();
    }
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.meshes = null;
    this.log("[Benchmark] Cleanup complete");
  }
}
