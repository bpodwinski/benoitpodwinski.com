import * as THREE from "three";

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
    this.running = true;
  }

  /**
   * Starts the benchmark by initializing Three.js and running the test.
   */
  start() {
    console.log(
      `[Benchmark] Starting WebGL benchmark at ${this.width}x${this.height}...`
    );

    this.setupScene();
    this.setupOverlay();

    requestAnimationFrame(this.update.bind(this));

    setTimeout(() => {
      this.stop();
    }, this.duration);
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
      color: 0xffffff, // Teinte légèrement bleutée pour un effet verre
      roughness: 1, // Surface lisse, presque miroir
      metalness: 0, // Pas de métal, car c'est du verre
      clearcoat: 0.5, // Couche de vernis pour un effet ultra-brillant
      clearcoatRoughness: 0, // Légère rugosité du vernis
      transmission: 1, // Transparence quasi complète
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

    const icosahedronGeometry = new THREE.IcosahedronGeometry(1.5, 32);
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
   * Creates an overlay to display benchmark results.
   */
  setupOverlay() {
    this.overlay = document.createElement("div");
    this.overlay.id = "benchmark-overlay";
    this.overlay.style.position = "absolute";
    this.overlay.style.top = "10px";
    this.overlay.style.left = "10px";
    this.overlay.style.color = "#fff";
    this.overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
    this.overlay.style.padding = "10px";
    this.overlay.style.fontFamily = "monospace";
    this.overlay.style.fontSize = "14px";
    this.overlay.style.borderRadius = "5px";
    this.overlay.innerHTML = "Benchmark running...";
    document.body.appendChild(this.overlay);
  }

  /**
   * Updates the benchmark on each frame.
   */
  update() {
    if (!this.running) return;

    requestAnimationFrame(this.update.bind(this));

    // Incrémenter le nombre de frames
    this.frameCount++;

    // Appliquer une animation aux objets pour simuler un rendu plus complexe
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
    this.running = false;

    const totalFrames = this.frameCount;
    const info = this.renderer.info;
    const triangleCount = info.render.triangles;

    // Calcul d'un score basé sur le nombre de frames rendues et le nombre de triangles
    const score = Math.round(totalFrames * (triangleCount / 100000));

    console.log("[Benchmark] Test finished.");
    console.log(`[Benchmark] Total Frames Rendered: ${totalFrames}`);
    console.log(`[Benchmark] Rendered Triangles: ${triangleCount}`);
    console.log(`[Benchmark] Performance Score: ${score}`);

    this.overlay.innerHTML = `
      <strong>Benchmark Results:</strong><br/>
      Frames Rendered: ${totalFrames}<br/>
      Triangles: ${triangleCount}<br/>
      Score: ${score}
    `;

    // Nettoyer la scène après test
    setTimeout(() => {
      this.dispose();
    }, 0);
  }

  /**
   * Cleans up the benchmark resources.
   */
  dispose() {
    if (this.renderer) {
      document.body.removeChild(this.renderer.domElement);
    }
    if (this.overlay) {
      document.body.removeChild(this.overlay);
    }
    this.scene = null;
    this.renderer = null;
    this.camera = null;
    this.meshes = null;
    console.log("[Benchmark] Cleanup complete.");
  }
}
