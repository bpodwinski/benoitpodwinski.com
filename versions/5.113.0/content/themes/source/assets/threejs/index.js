import { P as q, a as j, B as X, S as C, b as H, W as F, c as R, M as b, d as M, I as Y, e as Z, D as w, R as S, V as W, f as K, O as Q, g as l, C as J, h as U, i as G, U as ee, F as te, j as se, k as ne, l as A, m as ie, n as re, o as ae, p as O, q as oe, r as he, s as E, A as de, t as ce, u as le, v as ue, w as ge, x as I, y as pe, z as me, E as fe, G as B, K as _, H as T, L as we, J as be, N as Me, Q as ye, T as z, X as ve, Y as Se } from "./three-DRySlwZh.mjs";
import { g as p } from "./gsap-BpX8eJek.mjs";
const V = !1, x = {
  low: {
    resolutionScale: 0.7,
    frameRate: 18,
    textureResolution: 512,
    anisotropy: 8,
    shadowQuality: X,
    shadowResolution: 512,
    antialias: !1
  },
  medium: {
    resolutionScale: 0.8,
    frameRate: 24,
    textureResolution: 1024,
    anisotropy: 8,
    shadowQuality: q,
    shadowResolution: 1024,
    antialias: !0
  },
  high: {
    resolutionScale: 1,
    frameRate: 60,
    textureResolution: 2048,
    anisotropy: 16,
    shadowQuality: j,
    shadowResolution: 2048,
    antialias: !0
  }
}, u = {
  currentDetailLevel: "medium",
  currentSettings: x.medium
};
function Ee(d) {
  x[d] || (d = "medium"), u.currentDetailLevel = d, u.currentSettings = x[d];
}
const g = {
  DEBUG_MODE: V
};
class xe {
  /**
   * Initializes the benchmark with a given duration.
   * @param {number} duration - The duration of the benchmark in seconds.
   */
  constructor(e = 3, t = 100, s = 100) {
    this.duration = e * 1e3, this.width = t, this.height = s, this.startTime = performance.now(), this.frameCount = 0, this.scene = null, this.renderer = null, this.camera = null, this.overlay = null, this.running = !1, this.debugMode = g.DEBUG_MODE, this.log = this.debugMode ? console.log.bind(console, "[Benchmark]") : () => {
    };
  }
  /**
   * Runs the benchmark and returns a promise that resolves with the recommended detail level.
   * @returns {Promise<string>} Resolves when the benchmark is complete.
   */
  run() {
    return this.running ? Promise.resolve(u.currentDetailLevel) : (this.running = !0, new Promise((e) => {
      this.start();
      let t = 0;
      const s = setInterval(() => {
        t += 100;
        const n = Math.round(t / this.duration * 50);
        y.updateLoadingScreen(n);
      }, 100);
      setTimeout(() => {
        clearInterval(s), this.stop(), e(this.determineDetailLevel(this.frameCount));
      }, this.duration);
    }));
  }
  /**
   * Starts the benchmark by initializing Three.js and running the test.
   */
  start() {
    this.log(`[Benchmark] Starting benchmark at ${this.width}x${this.height}`), this.setupScene(), requestAnimationFrame(this.update.bind(this));
  }
  /**
   * Sets up a temporary Three.js scene with high rendering complexity.
   */
  setupScene() {
    this.scene = new C(), this.camera = new H(
      120,
      this.width / this.height,
      0.1,
      100
    ), this.camera.position.set(0, 15, 0), this.camera.lookAt(0, 0, 0), this.renderer = new F({ antialias: !0 }), this.renderer.setSize(this.width, this.height), this.renderer.shadowMap.enabled = !0, this.renderer.domElement.style.position = "absolute", this.renderer.domElement.style.left = "50%", this.renderer.domElement.style.top = "50%", this.renderer.domElement.style.transform = "translate(-50%, -50%)", this.renderer.domElement.id = "benchmark", this.renderer.domElement.style.display = "none", document.body.appendChild(this.renderer.domElement), this.createGround(), this.createObjects(), this.addLighting();
  }
  /**
   * Creates a reflective ground plane.
   */
  createGround() {
    const e = new R(100, 100), t = new b({
      color: 16777215,
      roughness: 1,
      metalness: 0,
      clearcoat: 0.5,
      clearcoatRoughness: 0,
      transmission: 1
    }), s = new M(e, t);
    s.rotation.x = -Math.PI / 2, s.receiveShadow = !0, this.scene.add(s);
  }
  /**
   * Creates a grid of objects including icosahedrons and cubes.
   */
  createObjects() {
    this.meshes = [];
    const n = new Y(1.5, 64), i = new Z(2, 2, 2), r = new b({
      color: 16711680,
      roughness: 0.05,
      metalness: 0.9,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      transmission: 0.8,
      ior: 1.5,
      envMapIntensity: 5,
      transparent: !0
    });
    for (let a = 0; a < 15; a++)
      for (let h = 0; h < 15; h++) {
        const o = (a + h) % 2 === 0, c = o ? i : n, m = new M(c, r);
        m.position.set(
          (a - 15 / 2.1) * 4,
          3,
          (h - 15 / 2.1) * 4
        ), m.castShadow = !0, this.scene.add(m), this.meshes.push(m);
      }
  }
  /**
   * Adds lighting to the scene.
   */
  addLighting() {
    const e = new w(16777215, 20);
    e.position.set(0, 4, 0), e.castShadow = !0, e.shadow.mapSize.width = 2048, e.shadow.mapSize.height = 2048, e.shadow.camera.near = 0, e.shadow.camera.far = 50, e.shadow.camera.left = -50, e.shadow.camera.right = 50, e.shadow.camera.top = 50, e.shadow.camera.bottom = -50, this.scene.add(e);
  }
  /**
   * Updates the benchmark on each frame.
   */
  update() {
    if (!this.running) return;
    requestAnimationFrame(this.update.bind(this)), this.frameCount++;
    const e = performance.now() * 1e-3;
    this.meshes.forEach((t, s) => {
      t.rotation.x = e + s * 0.1, t.rotation.y = e + s * 0.1;
    }), this.renderer.render(this.scene, this.camera);
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
    if (this.running = !1, !this.renderer) {
      console.warn("[Benchmark] Renderer is already disposed.");
      return;
    }
    const e = this.frameCount, s = this.renderer.info.render.triangles, n = Math.round(e * (s / 1e5)), i = this.determineDetailLevel(n);
    this.log(`[Benchmark] Total Frames Rendered: ${e}`), this.log(`[Benchmark] Rendered Triangles: ${s}`), this.log(`[Benchmark] Performance Score: ${n}`), this.log(`[Benchmark] Recommended Detail Level: ${i}`), Ee(i), this.dispose();
  }
  /**
   * Determines the optimal detail level based on benchmark score and updates settings.
   * @param {number} score - The performance score calculated.
   * @returns {string} The recommended detail level.
   */
  determineDetailLevel(e) {
    let t;
    return e < 1500 * (this.duration / 1e3) ? t = "low" : e <= 2500 * (this.duration / 1e3) ? t = "medium" : t = "high", t;
  }
  /**
   * Cleans up the benchmark resources.
   */
  dispose() {
    this.renderer && this.renderer.domElement.remove(), this.scene = null, this.renderer = null, this.camera = null, this.meshes = null, this.log("[Benchmark] Cleanup complete");
  }
}
class $ {
  /**
   * Initializes an EventEmitter instance.
   * @param {Object} [target=null] - Optional target to bind the emitter to.
   */
  constructor(e = null) {
    this.events = /* @__PURE__ */ new Map(), this.target = e || this;
  }
  /**
   * Returns the default configuration for the EventEmitter.
   * @returns {Object} Default configuration settings (future extension).
   */
  static defaultConfig() {
    return {};
  }
  /**
   * Ensures the provided event type is valid.
   * @param {string} type - The event type to validate.
   * @throws {Error} If the event type is not a string.
   */
  validateEventType(e) {
    if (typeof e != "string")
      throw new Error(`Invalid event type: ${e}. Expected a string.`);
  }
  /**
   * Registers an event listener for a specific event type.
   * @param {string} type - The event type to listen to.
   * @param {Function} callback - The callback function to invoke when the event is emitted.
   * @param {Object} [context=null] - Optional context to bind the callback to.
   * @returns {Object} - The target bound to this emitter.
   */
  on(e, t, s = null) {
    if (this.validateEventType(e), typeof t != "function")
      throw new Error(
        `Invalid callback for event '${e}'. Expected a function.`
      );
    return this.events.has(e) || this.events.set(e, []), this.events.get(e).push({ callback: t, context: s }), this.target;
  }
  /**
   * Removes an event listener or all listeners for a specific event type.
   * @param {string} [type=null] - The event type to remove listeners from.
   * @param {Function} [callback=null] - The specific callback to remove.
   * @returns {Object} - The target bound to this emitter.
   */
  off(e = null, t = null) {
    if (!e)
      this.events.clear();
    else if (this.events.has(e))
      if (!t)
        this.events.delete(e);
      else {
        const s = this.events.get(e);
        this.events.set(
          e,
          s.filter((n) => n.callback !== t)
        );
      }
    return this.target;
  }
  /**
   * Emits an event, invoking all registered callbacks for the given event type.
   * @param {string} type - The event type to emit.
   * @param {...any} args - Arguments to pass to the callbacks.
   * @returns {Object} - The target bound to this emitter.
   */
  emit(e, ...t) {
    if (this.validateEventType(e), !this.events.has(e)) return this.target;
    const s = [...this.events.get(e)];
    for (const { callback: n, context: i } of s)
      n.apply(i, t);
    return this.target;
  }
  /**
   * Checks if an event type has registered listeners.
   * @param {string} type - The event type to check.
   * @returns {boolean} - Returns true if there are listeners, otherwise false.
   */
  hasEvent(e) {
    return this.events.has(e) && this.events.get(e).length > 0;
  }
  /**
   * Clears all registered events, effectively resetting the emitter.
   */
  clearAll() {
    this.events.clear();
  }
  /**
   * Disposes the EventEmitter instance, removing all events and references.
   */
  dispose() {
    this.clearAll(), this.events = null, this.target = null;
  }
}
const f = new $();
class N {
  static debugMode = g.DEBUG_MODE;
  static log(...e) {
    this.debugMode && console.log("[WebGLUtils]", ...e);
  }
  /**
   * Checks if WebGL is available and if hardware acceleration is enabled.
   * @returns {boolean} True if WebGL is hardware-accelerated, false otherwise.
   */
  static isWebGLSupported() {
    try {
      const e = document.createElement("canvas"), t = e.getContext("webgl") || e.getContext("experimental-webgl");
      if (!t)
        return this.log("❌ WebGL is NOT supported (Context not created)"), this.log("Please use a computer to access all features"), !1;
      const s = t.getExtension("WEBGL_debug_renderer_info"), n = s ? t.getParameter(s.UNMASKED_RENDERER_WEBGL) : "Unknown", i = s ? t.getParameter(s.UNMASKED_VENDOR_WEBGL) : "Unknown";
      return /SwiftShader|Software|Mesa|Microsoft Basic Render Driver/i.test(
        n
      ) ? (this.log(
        `❌ WebGL is running in software mode: ${n} (Vendor: ${i})`
      ), this.log("Please use a computer to access all features"), !1) : (this.log(
        `✅ WebGL is supported with hardware acceleration: ${n} (Vendor: ${i})`
      ), !0);
    } catch (e) {
      return this.log("❌ Error while checking WebGL support:", e), !1;
    }
  }
  /**
   * Checks if WebGL2 is available and if hardware acceleration is enabled.
   * @returns {boolean} True if WebGL2 is hardware-accelerated, false otherwise.
   */
  static isWebGL2Supported() {
    try {
      const t = document.createElement("canvas").getContext("webgl2");
      if (!t)
        return this.log("❌ WebGL 2 is NOT supported (Context not created)."), this.log("Please use a computer to access all features"), !1;
      const s = t.getExtension("WEBGL_debug_renderer_info"), n = s ? t.getParameter(s.UNMASKED_RENDERER_WEBGL) : "Unknown", i = s ? t.getParameter(s.UNMASKED_VENDOR_WEBGL) : "Unknown";
      return /SwiftShader|Software|Mesa|Microsoft Basic Render Driver/i.test(
        n
      ) ? (this.log(
        `❌ WebGL 2 is running in software mode: ${n} (Vendor: ${i})`
      ), this.log("Please use a computer to access all features"), !1) : (this.log(
        `✅ WebGL 2 is supported with hardware acceleration: ${n} (Vendor: ${i})`
      ), !0);
    } catch (e) {
      return this.log("❌ Error while checking WebGL 2 support:", e), !1;
    }
  }
}
class Ce {
  /**
   * Creates a new Ground instance
   * @param {THREE.WebGLRenderer} renderer - The WebGL renderer
   * @param {Object} textures - The textures to be used
   */
  constructor(e, t) {
    this.groundMesh = null, this.renderer = e, this.textures = t;
  }
  /**
   * Initializes the ground plane with the specified parameters
   * @param {THREE.Scene} scene - The Three.js scene to which the ground will be added
   */
  init(e) {
    const { alphaMap: n, aoMap: i, normalMap: r, displacementMap: a } = this.textures;
    (() => {
      i.wrapS = i.wrapT = S, i.repeat.set(6, 6), r.wrapS = r.wrapT = S, r.repeat.set(6, 6), a.wrapS = a.wrapT = S, a.repeat.set(6, 6);
      const o = new b({
        color: 0,
        flatShading: !1,
        transparent: !0,
        transmission: 1,
        clearcoat: 0,
        clearcoatRoughness: 1,
        metalness: 1,
        roughness: 0.1,
        alphaMap: n,
        aoMap: i,
        aoMapIntensity: 1,
        normalMap: r,
        normalScale: new W(0.1, 0.1),
        displacementMap: a,
        displacementScale: 0.01,
        envMap: e.environment,
        envMapIntensity: 100,
        opacity: 0.6
      });
      this.groundMesh = new M(
        new R(8, 8, 250, 250),
        o
      ), this.groundMesh.rotation.x = -Math.PI / 2, this.groundMesh.rotation.z = Math.PI / 2.2, this.groundMesh.position.y = -0.26, this.groundMesh.castShadow = !1, this.groundMesh.receiveShadow = !0, e.add(this.groundMesh), f.emit("groundReady", this.groundMesh);
    })();
  }
  /**
   * Returns the ground mesh for interactions
   * @returns {THREE.Mesh} The ground mesh
   */
  getGroundMesh() {
    return this.groundMesh ? this.groundMesh : null;
  }
}
class Re {
  /**
   * Creates a Mecha Spider - a biomechanical-inspired robotic spider
   * that interacts with the environment and follows user input.
   *
   * This 3D object features:
   * - A procedural skeletal structure with multiple articulated legs.
   * - Dynamic movement that responds to user clicks/touches on the ground.
   * - Smooth animations and physics-driven positioning.
   *
   * @param {THREE.Scene} scene - The scene where the mecha will be added.
   * @param {THREE.Camera} camera - The camera used to track interactions.
   * @param {Object} ground - The ground object to interact with.
   */
  constructor(e, t, s) {
    this.scene = e, this.camera = t, this.ground = s, this.raycaster = new K(), this.mouse = new W(), this.groupHolder = new Q(), this.groupHolder.matrixAutoUpdate = !1, this.material = null, this.dae = null, this.bonesCount = 8, this.bonesPositions = [], this.bonesPositionsTween = [], this.center = new l(), this.centerTween = new l(), this.mouseControl = !1, this.meshes = [], this.groundMesh = null, this.clock = new J(), this.tempVec3 = new l(), this.targetVec3 = new l(), this.scene.add(this.groupHolder), this.update = this.update.bind(this), this.setupEvents(), this.setupGround(), this.reload();
  }
  /** Sets up event listeners for updates and interactions */
  setupEvents() {
    this.onMouseDownHandler = this.onMouseDown.bind(this), this.onTouchStartHandler = this.onTouchStart.bind(this), f.on("update", this.update), document.addEventListener("mousedown", this.onMouseDownHandler), document.addEventListener("touchstart", this.onTouchStartHandler);
  }
  /** Initializes ground and listens for its readiness */
  setupGround() {
    this.ground && (this.ground.init(this.scene), f.on("groundReady", (e) => {
      this.groundMesh = e;
    }));
  }
  /** Reloads Spider, reinitializing materials and bones */
  reload() {
    this.material || (this.material = new b({
      color: 6750194,
      metalness: 0.6,
      roughness: 0.1,
      flatShading: !0,
      transmission: 1,
      clearcoat: 0.6,
      clearcoatRoughness: 0.4,
      envMap: this.scene.environment,
      envMapIntensity: 100,
      side: U
    })), this.dae && (this.groupHolder.remove(this.dae), this.dae.geometry.dispose(), this.dae = null), this.initBones();
  }
  /** Initializes bones of Spider */
  initBones() {
    const i = { segmentHeight: 5, segmentCount: 2, height: 10, halfHeight: 5 };
    for (let r = 0; r < this.bonesCount; r++) {
      const a = this.createGeometry(i), h = this.createBones(i), o = this.createMesh(a, h);
      o.scale.set(0.05, 0.05, 0.05), o.updateMatrix(), this.groupHolder.add(o), this.meshes.push(o);
      const c = new l();
      c.oldCenter = new l(), this.bonesPositions.push(c), this.bonesPositionsTween.push(c.clone());
    }
  }
  /** Creates bone structure (skeleton) */
  createGeometry(e) {
    const t = new G(
      0,
      3,
      e.height,
      8,
      e.segmentCount * 3,
      !0
    ), s = t.attributes.position, n = s.count, i = [], r = [];
    for (let a = 0; a < n; a++) {
      const h = new l(
        s.getX(a),
        s.getY(a),
        s.getZ(a)
      ), o = h.y + e.halfHeight, c = Math.floor(o / e.segmentHeight), m = o % e.segmentHeight / e.segmentHeight;
      s.setXYZ(a, h.x, h.y, h.z), i.push(c, c + 1, 0, 0), r.push(1 - m, m, 0, 0);
    }
    return t.setAttribute(
      "skinIndex",
      new ee(i, 4)
    ), t.setAttribute(
      "skinWeight",
      new te(r, 4)
    ), t;
  }
  createInstancedLegs(e) {
    const t = new G(
      0,
      3,
      e.height,
      8,
      e.segmentCount * 3,
      !0
    ), s = this.bonesCount;
    this.legs = new se(t, this.material, s);
    const n = new ne();
    for (let i = 0; i < s; i++)
      n.setPosition(
        Math.sin(i / s * Math.PI * 2) * 3,
        0,
        Math.cos(i / s * Math.PI * 2) * 3
      ), this.legs.setMatrixAt(i, n);
    this.legs.instanceMatrix.needsUpdate = !0, this.legs.matrixAutoUpdate = !1, this.scene.add(this.legs);
  }
  /** Creates the skinned mesh */
  createBones(e) {
    const t = [], s = new A();
    s.position.y = -e.halfHeight, t.push(s);
    let n = s;
    for (let i = 0; i < e.segmentCount; i++) {
      const r = new A();
      r.position.y = e.segmentHeight, t.push(r), n.add(r), n = r;
    }
    return t;
  }
  /** Creates skinned mesh */
  createMesh(e, t) {
    const s = new ie(t), n = new re(e, this.material);
    return n.add(t[0]), n.bind(s), n.castShadow = !0, n.receiveShadow = !0, n;
  }
  /** Handles mouse click interaction */
  onMouseDown(e) {
    this.processInteraction(e.clientX, e.clientY);
  }
  /** Handles touch event interaction */
  onTouchStart(e) {
    e.touches.length === 1 && this.processInteraction(e.touches[0].pageX, e.touches[0].pageY);
  }
  /** Processes interactions (clicks/touches) and moves Spider */
  processInteraction(e, t) {
    if (!this.groundMesh) return;
    this.mouse.set(
      e / window.innerWidth * 2 - 1,
      -(t / window.innerHeight) * 2 + 1
    ), this.raycaster.setFromCamera(this.mouse, this.camera);
    const s = this.raycaster.intersectObject(this.groundMesh, !0);
    s.length > 0 && (this.mouseControl = !0, this.targetVec3.copy(s[0].point), p.to(this.center, {
      duration: this.center.distanceTo(this.targetVec3) * 0.1,
      x: this.targetVec3.x * 0.6,
      z: this.targetVec3.z * 0.6,
      ease: "linear",
      onComplete: () => this.mouseControl = !1
    }));
  }
  /** Updates Spider movement and animations */
  update() {
    const e = this.clock.getElapsedTime() * 0.1, t = 0.2;
    if (!this.mouseControl) {
      const s = window.innerWidth / window.innerHeight * 10;
      this.tempVec3.set(
        s * Math.sin(e * 2) * Math.sin(e * 3.5),
        0,
        15 * Math.sin(e) * Math.sin(e * 4.5)
      ), p.to(this.center, {
        duration: this.center.distanceTo(this.tempVec3) * 0.1,
        x: this.tempVec3.x,
        z: this.tempVec3.z,
        ease: "none",
        onUpdate: () => {
          this.groupHolder.matrixWorldNeedsUpdate = !0;
        }
      });
    }
    p.to(this.center, {
      duration: 0,
      y: 2 * Math.sin(e * 10),
      ease: "none"
    }), p.to(this.centerTween, {
      duration: t * 5,
      x: this.center.x,
      y: this.center.y,
      z: this.center.z,
      ease: "none"
    });
    for (let s = 0; s < this.bonesCount; s++) {
      const n = this.meshes[s], i = this.bonesPositions[s], r = this.bonesPositionsTween[s];
      if (i.x === 0 || Math.random() < 3e-3 || i.distanceTo(this.center) > 13 && !p.isTweening(r)) {
        const a = 2 * Math.PI * (s / this.bonesCount + Math.random() / 10);
        i.x = this.center.x + Math.sin(a) * 10, i.y = 0, i.z = this.center.z + Math.cos(a) * 10, i.oldCenter.copy(this.center), p.killTweensOf(r), p.to(r, {
          duration: t * 2,
          x: i.x,
          z: i.z
        }), p.to(r, {
          duration: t,
          y: 5
        }), p.to(r, {
          duration: t,
          delay: t,
          y: i.y
        });
      }
      n.skeleton.bones[0].position.copy(this.centerTween), n.skeleton.bones[0].position.add(
        this.centerTween.clone().multiplyScalar(0.5)
      ), n.skeleton.bones[1].position.set(
        r.x / 2,
        5 + r.y / 2,
        r.z / 2
      ), n.skeleton.bones[1].position.sub(
        this.centerTween.clone().multiplyScalar(0.5)
      ), n.skeleton.bones[2].position.set(
        r.x,
        -10 + r.y,
        r.z
      ), n.skeleton.bones[2].position.sub(
        this.centerTween.clone().multiplyScalar(1)
      );
    }
  }
  /** Cleans up event listeners and removes Spider */
  dispose() {
    f.off("update", this.update), document.removeEventListener("mousedown", this.onMouseDownHandler), document.removeEventListener("touchstart", this.onTouchStartHandler), this.meshes.forEach((e) => {
      e.castShadow = !0, e.receiveShadow = !1;
    }), this.meshes.length = 0, this.scene.remove(this.groupHolder);
  }
}
class k {
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
  constructor(e) {
    this.config = { ...k.defaultConfig(), ...e }, this.validateConfig();
    const { scene: t } = this.config;
    this.camera = this.createCamera(), this.scene = t, this.cameraHelper = null, this.debugMode = g.DEBUG_MODE, this.log = this.debugMode ? console.log.bind(console, "[CameraManager]") : () => {
    }, this.debugMode && this.updateDebugHelper(), this.log("Camera initialized", this.config);
  }
  static defaultConfig() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      fov: 75,
      near: 0.01,
      far: 100,
      position: [0, 0, 0],
      orthographic: !1,
      scene: null
    };
  }
  validateConfig() {
    const { width: e, height: t, position: s } = this.config;
    if (!Number.isFinite(e) || !Number.isFinite(t) || e <= 0 || t <= 0)
      throw new Error("CameraManager requires valid width and height");
    if (!Array.isArray(s) || s.length !== 3 || !s.every(Number.isFinite))
      throw new Error("Position must be an array of three numbers: [x, y, z]");
  }
  /**
   * Creates and returns a Three.js camera (Perspective or Orthographic).
   * @returns {THREE.Camera} The created camera.
   */
  createCamera() {
    const { width: e, height: t, fov: s, near: n, far: i, position: r, orthographic: a } = this.config;
    let h;
    if (a) {
      const o = e / t, c = 10;
      h = new ae(
        -10 * o,
        c * o,
        c,
        -10,
        n,
        i
      );
    } else
      h = new H(s, e / t, n, i);
    return Array.isArray(r) && r.length === 3 && h.position.set(r[0], r[1], r[2]), h;
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
  updateSize(e, t) {
    this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.log("Camera size updated:", { width: e, height: t });
  }
  /**
   * Updates the field of view (FOV) of the camera.
   * @param {number} fov - The new field of view value.
   * @throws Will throw an error if FOV is not a positive number.
   */
  updateFOV(e) {
    if (!Number.isFinite(e) || e <= 0)
      throw new Error("FOV must be a positive number");
    this.camera.fov = e, this.camera.updateProjectionMatrix(), this.log("Camera FOV updated:", e);
  }
  /**
   * Sets the camera's position in the 3D space.
   * @param {Array<number>} position - The new position as [x, y, z].
   */
  setPosition(e) {
    this.camera.position.set(...e), this.log("Camera position updated:", e);
  }
  /**
   * Rotates the camera to look at a specific target in the 3D space.
   * @param {Array<number>} target - The target position as [x, y, z].
   * @throws Will throw an error if the target is not properly formatted.
   */
  lookAt(e) {
    if (!Array.isArray(e) || e.length !== 3 || !e.every(Number.isFinite))
      throw new Error("Target must be an array of three numbers: [x, y, z]");
    this.camera.lookAt(...e), this.log("Camera now looking at:", e);
  }
  /**
   * Animates the camera to a new position over a specified duration.
   * @param {Array<number>} position - The target position as [x, y, z].
   * @param {number} duration - Duration of the animation in seconds.
   */
  animateToPosition(e, t = 1) {
    if (!Array.isArray(e) || e.length !== 3 || !e.every(Number.isFinite))
      throw new Error("Position must be an array of three numbers: [x, y, z]");
    const s = new l().copy(this.camera.getWorldPosition), n = new l().fromArray(e), i = new l(), r = performance.now(), a = (h) => {
      const o = Math.min((h - r) / (t * 1e3), 1);
      i.lerpVectors(s, n, o), this.camera.position.copy(i), o < 1 && requestAnimationFrame(a);
    };
    requestAnimationFrame(a), this.log("Animating camera to position:", e);
  }
  /**
   * Enables or disables the debug camera helper.
   * Adds a visual representation of the camera's frustum.
   */
  updateDebugHelper() {
    if (this.scene) {
      if (this.debugMode && !this.cameraHelper) {
        this.cameraHelper = new O(this.camera), this.scene.add(this.cameraHelper), this.log("Camera helper enabled");
        return;
      }
      !this.debugMode && this.cameraHelper && (this.scene.remove(this.cameraHelper), this.cameraHelper.dispose(), this.cameraHelper = null, this.log("Camera helper disabled and disposed"));
    }
  }
  /**
   * Cleans up camera resources and removes helpers.
   */
  dispose() {
    this.cameraHelper && (this.scene?.remove(this.cameraHelper), this.cameraHelper.dispose(), this.cameraHelper = null), this.camera?.clearViewOffset(), this.camera = null, this.log("Camera disposed");
  }
}
class L {
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
  constructor(e, t, s = {}) {
    this.camera = e, this.controls = new oe(e, t), this.config = { ...L.defaultConfig(), ...s }, this.debugMode = g.DEBUG_MODE, this.log = this.debugMode ? console.log.bind(console, "[ControlManager]") : () => {
    }, this.validateConfig(), this.applyConfig(), this.controls.update(), this.keyboardControls(), this.log("Controls initialized", this.config);
  }
  /**
   * Returns the default configuration for the controls.
   * @returns {Object} Default controls configuration.
   */
  static defaultConfig() {
    const e = he.degToRad(15);
    return {
      target: { x: 0, y: 0, z: 0 },
      autoRotate: !1,
      enablePan: !1,
      enableZoom: !1,
      enableRotate: !0,
      enableDamping: !0,
      dampingFactor: 0.1,
      rotateSpeed: 0.1,
      minDistance: 2,
      maxDistance: 4,
      minAzimuthAngle: -1.825 - e,
      maxAzimuthAngle: -1.825 + e,
      minPolarAngle: 1,
      maxPolarAngle: Math.PI / 2,
      bounds: {
        minX: -2,
        maxX: 4,
        minY: 0,
        maxY: 1,
        minZ: -1.5,
        maxZ: 1.5
      }
    };
  }
  /**
   * Validates the configuration object.
   * @throws Will throw an error if configuration values are invalid.
   */
  validateConfig() {
    if (typeof this.config.bounds != "object" || !this.config.bounds.minX)
      throw new Error("Invalid bounds configuration");
  }
  /**
   * Applies configuration settings to OrbitControls.
   */
  applyConfig() {
    const e = this.config;
    this.controls.target.set(e.target.x, e.target.y, e.target.z), this.controls.autoRotate = e.autoRotate, this.controls.enablePan = e.enablePan, this.controls.enableZoom = e.enableZoom, this.controls.enableRotate = e.enableRotate, this.controls.enableDamping = e.enableDamping, this.controls.dampingFactor = e.dampingFactor, this.controls.rotateSpeed = e.rotateSpeed, this.controls.minDistance = e.minDistance, this.controls.maxDistance = e.maxDistance, this.controls.minAzimuthAngle = e.minAzimuthAngle, this.controls.maxAzimuthAngle = e.maxAzimuthAngle, this.controls.minPolarAngle = e.minPolarAngle, this.controls.maxPolarAngle = e.maxPolarAngle;
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
    this.applyBounds(), this.controls.update();
  }
  /**
   * Adds keyboard-based movement controls.
   */
  keyboardControls() {
    this.keyDownHandler = (t) => {
      const s = new l(), n = new l(), i = new l(0, 1, 0);
      switch (this.camera.getWorldDirection(s), s.y = 0, s.normalize(), n.crossVectors(s, i).normalize(), t.key) {
        case "q":
          this.camera.position.addScaledVector(n, -0.1);
          break;
        case "d":
          this.camera.position.addScaledVector(n, 0.1);
          break;
        case "z":
          this.camera.position.addScaledVector(s, 0.1);
          break;
        case "s":
          this.camera.position.addScaledVector(s, -0.1);
          break;
        case "e":
          this.camera.position.addScaledVector(i, 0.1);
          break;
        case "a":
          this.camera.position.addScaledVector(i, -0.1);
          break;
      }
      this.applyBounds(), this.controls.update();
    }, window.addEventListener("keydown", this.keyDownHandler);
  }
  /**
   * Clamps the camera position within defined bounds.
   */
  applyBounds() {
    const { minX: e, maxX: t, minY: s, maxY: n, minZ: i, maxZ: r } = this.config.bounds;
    this.camera.position.x = Math.max(
      e,
      Math.min(t, this.camera.position.x)
    ), this.camera.position.y = Math.max(
      s,
      Math.min(n, this.camera.position.y)
    ), this.camera.position.z = Math.max(
      i,
      Math.min(r, this.camera.position.z)
    );
  }
  /**
   * Disposes of the controls and removes event listeners.
   */
  dispose() {
    window.removeEventListener("keydown", this.keyDownHandler), this.controls.dispose(), this.log("Controls disposed");
  }
}
class P {
  /**
   * Manages lighting setup in a Three.js scene.
   * Supports various light types and their configurations.
   *
   * @param {THREE.Scene} scene - The scene where the lights will be added.
   */
  constructor(e) {
    if (!e)
      throw new Error("A valid THREE.Scene instance is required.");
    this.scene = e, this.lights = [], this.helpers = [], this.debugMode = g.DEBUG_MODE, this.log = this.debugMode ? console.log.bind(console, "[LightManager]") : () => {
    }, this.log("LightManager initialized.");
  }
  /**
   * Returns the default configuration for a light.
   * @returns {Object} Default light configuration.
   */
  static defaultConfig() {
    return {
      type: "DirectionalLight",
      color: 16777215,
      intensity: 1,
      position: [0, 1, 0],
      shadow: null
    };
  }
  /**
   * Validates the configuration object.
   * @param {Object} config - Configuration for the light.
   * @throws Will throw an error if configuration values are invalid.
   */
  validateConfig(e) {
    if (!e.type || typeof e.type != "string")
      throw new Error("Light type must be a valid string.");
    if (!Array.isArray(e.position) || e.position.length !== 3)
      throw new Error(
        "Light position must be an array of three numbers [x, y, z]."
      );
  }
  /**
   * Adds a light to the scene with the given configuration.
   * @param {Object} config - Configuration object for the light.
   * @returns {THREE.Light} The created light.
   */
  addLight(e = {}) {
    const t = { ...P.defaultConfig(), ...e };
    this.validateConfig(t);
    let s;
    switch (t.type) {
      case "DirectionalLight":
        s = new w(
          t.color,
          t.intensity
        );
        break;
      case "AmbientLight":
        s = new de(
          t.color,
          t.intensity
        );
        break;
      case "PointLight":
        s = new E(t.color, t.intensity);
        break;
      default:
        throw new Error(`Unsupported light type: ${t.type}`);
    }
    return s.position.set(...t.position), this.configureShadows(s, t.shadow), this.scene.add(s), this.lights.push(s), this.debugMode && this.addHelper(s), this.log(`Added ${t.type} to scene.`), s;
  }
  /**
   * Configures shadow settings for a light.
   * @param {THREE.Light} light - The light to configure shadows for.
   * @param {Object|null} shadowConfig - Shadow settings.
   */
  configureShadows(e, t) {
    !t || !(e instanceof w || e instanceof E) || (e.castShadow = !0, e.shadow.radius = t.radius || 2, e.shadow.camera.near = t.near || 0.1, e.shadow.camera.far = t.far || 100, e.shadow.camera.left = t.left || -2, e.shadow.camera.right = t.right || 2, e.shadow.camera.top = t.top || 2, e.shadow.camera.bottom = t.bottom || -2, e.shadow.mapSize.width = t.mapSize || 1024, e.shadow.mapSize.height = t.mapSize || 1024, this.log("Shadows configured for light."));
  }
  /**
   * Adds a helper for the specified light.
   * @param {THREE.Light} light - The light to create a helper for.
   */
  addHelper(e) {
    let t;
    if (e instanceof w) {
      t = new ce(e, 1), this.scene.add(t);
      const s = new O(e.shadow.camera);
      this.scene.add(s), this.helpers.push(s);
    } else e instanceof E && (t = new le(e, 1), this.scene.add(t));
    t && (this.helpers.push(t), this.log(`Added helper for ${e.type}`));
  }
  /**
   * Removes all light helpers from the scene.
   */
  removeHelpers() {
    this.helpers.forEach((e) => {
      this.scene.remove(e);
    }), this.helpers = [], this.log("Removed all light helpers.");
  }
  /**
   * Removes all lights and helpers from the scene.
   */
  dispose() {
    this.lights.forEach((e) => {
      this.scene.remove(e), e.dispose && e.dispose();
    }), this.removeHelpers(), this.lights = [], this.log("Disposed all lights and helpers.");
  }
}
class v {
  /**
   * This class manages the WebGLRenderer setup and controls rendering properties.
   * It provides utility methods for updating size, setting background color,
   * and rendering the scene efficiently.
   *
   * @param {Object} config - Configuration object for the renderer.
   * @param {number} config.width - The width of the rendering canvas.
   * @param {number} config.height - The height of the rendering canvas.
   * @param {number} [config.bgColor=0x000000] - The background color of the renderer.
   * @param {boolean} [config.antialias=true] - Whether to enable antialiasing.
   * @param {boolean} [config.alpha=true] - Whether the background should be transparent.
   * @param {boolean} [config.shadowMap=true] - Whether shadows should be enabled.
   * @param {boolean} [config.vrEnabled=false] - Whether to enable WebXR (VR).
   * @param {HTMLElement} [config.container=null] - The DOM element where the canvas will be appended.
   */
  constructor(e) {
    this.config = { ...v.defaultConfig(), ...e }, this.validateConfig(), this.debugMode = g.DEBUG_MODE, this.log = this.debugMode ? console.log.bind(console, "[RendererManager]") : () => {
    }, this.scale = u.currentSettings.resolutionScale, this.renderer = null, this.vrEnabled = this.config.vrEnabled, this.container = this.config.container;
  }
  /**
   * Initializes the renderer.
   * This should be called explicitly after constructing an instance.
   */
  init() {
    if (this.renderer) {
      this.log("Renderer is already initialized");
      return;
    }
    this.renderer = this.createRenderer(), this.renderer.xr.enabled = this.vrEnabled, this.vrEnabled && (document.body.appendChild(ue.createButton(this.renderer)), this.log("VR mode enabled")), this.container && this.appendToContainer(this.container), this.log("Renderer initialized", this.config);
  }
  /**
   * Returns the default configuration for the renderer.
   * @returns {Object} The default configuration object.
   */
  static defaultConfig() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      bgColor: 0,
      antialias: u.currentSettings.antialias,
      alpha: !0,
      shadowMap: !0,
      vrEnabled: !1,
      container: null
    };
  }
  /**
   * Validates the configuration object.
   * @throws Will throw an error if any required configuration is invalid.
   */
  validateConfig() {
    const { width: e, height: t } = this.config;
    if (!Number.isFinite(e) || !Number.isFinite(t) || e <= 0 || t <= 0)
      throw new Error("RendererManager requires valid width and height.");
  }
  /**
   * Creates and returns a WebGLRenderer instance.
   * @returns {THREE.WebGLRenderer} The initialized WebGLRenderer.
   */
  createRenderer() {
    const { width: e, height: t, bgColor: s, antialias: n, alpha: i, shadowMap: r } = this.config, a = new F({ antialias: n, alpha: i });
    return a.setPixelRatio(window.devicePixelRatio), a.setSize(e, t), a.setClearColor(s), a.shadowMap.enabled = r, a.shadowMap.autoUpdate = r, a.shadowMap.type = u.currentSettings.shadowQuality, this.applyRenderResolution(a, this.scale), a;
  }
  applyRenderResolution(e, t) {
    if (!e) return;
    const s = e.domElement;
    s.style.width = "100%", s.style.height = "100%";
    const n = Math.floor(this.config.width * t), i = Math.floor(this.config.height * t);
    e.setSize(n, i, !1), e.setViewport(0, 0, n, i), e.setScissor(0, 0, n, i), e.setScissorTest(!0);
  }
  /**
   * Updates the renderer's size when the window is resized.
   * @param {number} width - The new width of the rendering canvas.
   * @param {number} height - The new height of the rendering canvas.
   */
  updateSize(e = window.innerWidth, t = window.innerHeight) {
    this.renderer || (console.warn(
      "[RendererManager] Renderer not initialized, calling init()..."
    ), this.init()), this.config.width = e, this.config.height = t, this.renderer.setSize(e, t, !1), this.renderer.setPixelRatio(window.devicePixelRatio), this.applyRenderResolution(this.renderer, this.scale), this.log(`Renderer resized: ${e}x${t}, Scale: ${this.scale}`);
  }
  /**
   * Appends the renderer's DOM element to a container.
   * @param {HTMLElement} container - The DOM container to append the canvas to.
   */
  appendToContainer(e) {
    if (!(e instanceof HTMLElement))
      throw new Error(
        "A valid DOM container is required to append the renderer."
      );
    this.renderer || this.init(), e.appendChild(this.renderer.domElement), this.log("Renderer appended to container.");
  }
  /**
   * Renders the scene using the provided camera.
   * @param {THREE.Scene} scene - The scene to render.
   * @param {THREE.Camera} camera - The camera used for rendering.
   * @throws Will throw an error if scene or camera are missing.
   */
  render(e, t) {
    if (!(e instanceof C) || !(t instanceof ge))
      throw new Error("A valid scene and camera are required for rendering.");
    this.renderer.render(e, t);
  }
  /**
   * Returns the WebGLRenderer instance.
   * @returns {THREE.WebGLRenderer} The renderer instance.
   */
  getRenderer() {
    return this.renderer;
  }
  /**
   * Cleans up the renderer and removes its DOM element.
   */
  dispose() {
    this.renderer.dispose(), this.renderer.domElement.parentElement && this.renderer.domElement.parentElement.removeChild(
      this.renderer.domElement
    ), this.renderer = null, this.log("Renderer disposed.");
  }
}
class ke {
  /**
   * Manages the background and environment map for a Three.js scene.
   * Supports color, HDRI, and CubeMap backgrounds.
   *
   * @param {THREE.Scene} scene - The scene where the background is applied.
   * @param {THREE.WebGLRenderer} renderer - The renderer for HDR processing.
   */
  constructor(e, t) {
    if (!e || !t)
      throw new Error(
        "A valid THREE.Scene and THREE.WebGLRenderer instance are required"
      );
    this.scene = e, this.renderer = t, this.envMap = null, this.backgroundType = "color", this.debugMode = V, this.log = this.debugMode ? console.log.bind(console, "[BackgroundManager]") : () => {
    }, this.log("BackgroundManager initialized");
  }
  /**
   * Returns the default background configuration.
   * @returns {Object} Default background configuration.
   */
  static defaultConfig() {
    return {
      type: "color",
      color: 0,
      hdrPath: "",
      cubeMapPaths: []
    };
  }
  /**
   * Validates the provided configuration.
   * @param {Object} config - Configuration for the background.
   * @throws Will throw an error if the configuration is invalid.
   */
  validateConfig(e) {
    if (e.type !== "color" && e.type !== "hdr" && e.type !== "cubemap")
      throw new Error(`Invalid background type: ${e.type}`);
    if (e.type === "color" && typeof e.color != "number")
      throw new Error("Color background must be a hexadecimal number.");
    if (e.type === "hdr" && !e.hdrPath)
      throw new Error("HDR background requires a valid file path");
    if (e.type === "cubemap" && (!Array.isArray(e.cubeMapPaths) || e.cubeMapPaths.length !== 6))
      throw new Error(
        "CubeMap background requires an array of 6 texture paths"
      );
  }
  /**
   * Sets a solid color background.
   * @param {number} color - Hexadecimal color value.
   */
  setColorBackground(e = 0) {
    this.scene.background = new I(e), this.scene.environment = null, this.envMap = null, this.backgroundType = "color", this.log(`Color background set to ${e.toString(16)}`);
  }
  /**
   * Loads and sets an HDRI background.
   * @param {string} path - Path to the HDR file.
   */
  setHDRIBackground(e) {
    if (!e) {
      console.error("Invalid HDRI path");
      return;
    }
    const t = new pe(), s = new me(this.renderer);
    s.compileEquirectangularShader(), t.load(
      e,
      (n) => {
        this.envMap = s.fromEquirectangular(n).texture, this.scene.environment = this.envMap, this.scene.background = this.envMap, n.dispose(), s.dispose(), this.backgroundType = "hdr", this.log("HDRI background loaded successfully");
      },
      void 0,
      (n) => {
        console.error("Error loading HDRI:", n);
      }
    );
  }
  /**
   * Loads and sets a CubeMap background.
   * @param {string[]} paths - Array of 6 texture paths.
   */
  setCubeMapBackground(e) {
    if (!Array.isArray(e) || e.length !== 6)
      throw new Error("CubeMap requires exactly 6 texture paths");
    const t = new fe();
    this.envMap = t.load(e), this.envMap.colorSpace = B, this.scene.environment = this.envMap, this.scene.background = this.envMap, this.backgroundType = "cubemap", this.log("CubeMap background loaded successfully");
  }
  /**
   * Sets a background using a textured plane.
   * This method is useful for creating a simple sky or backdrop without using a CubeMap.
   *
   * @param {string} path - The path to the texture file.
   * @param {number} [width=100] - The width of the plane.
   * @param {number} [height=100] - The height of the plane.
   * @param {Object} [position={ x: 0, y: 0, z: 0 }] - The position of the plane in the scene.
   * @param {number} position.x - The x-coordinate of the plane.
   * @param {number} position.y - The y-coordinate of the plane.
   * @param {number} position.z - The z-coordinate of the plane.
   * @param {Object} [rotation={ x: 0, y: 0, z: 0 }] - The rotation of the plane in radians.
   * @param {number} rotation.x - The rotation around the x-axis in radians.
   * @param {number} rotation.y - The rotation around the y-axis in radians.
   * @param {number} rotation.z - The rotation around the z-axis in radians.
   * @param {Object} [scale={ x: 1, y: 1, z: 1 }] - The scale of the plane.
   * @param {number} scale.x - The scale factor along the x-axis.
   * @param {number} scale.y - The scale factor along the y-axis.
   * @param {number} scale.z - The scale factor along the z-axis.
   */
  setPlaneBackground(e, t = 100, s = 100, n = { x: 0, y: 0, z: 0 }, i = { x: 0, y: 0, z: 0 }, r = { x: 1, y: 1, z: 1 }) {
    const a = (o) => o * (Math.PI / 180), h = new _();
    h.setTranscoderPath("assets/libs/basis/"), h.detectSupport(this.renderer), h.load(e, (o) => {
      o.anisotropy = u.currentSettings.anisotropy, o.wrapS = T, o.wrapT = T, o.minFilter = we, o.magFilter = be;
      const c = new R(t, s), m = new Me({
        map: o,
        side: U
      });
      this.planeBackground = new M(c, m), this.planeBackground.position.set(n.x, n.y, n.z), this.planeBackground.rotation.set(
        a(i.x),
        a(i.y),
        a(i.z)
      ), this.planeBackground.scale.set(r.x, r.y, r.z), this.envMap = o, this.envMap.colorSpace = B, this.scene.environment = this.envMap, this.scene.background = this.envMap, this.backgroundType = "plane", this.scene.add(this.planeBackground), this.log("Plane background set successfully");
    });
  }
  /**
   * Gets the current environment map.
   * @returns {THREE.Texture|null} The current envMap or null if none is set.
   */
  getEnvMap() {
    return this.envMap;
  }
  /**
   * Gets the current background type.
   * @returns {string} The active background type ("color", "hdr", "cubemap").
   */
  getBackgroundType() {
    return this.backgroundType;
  }
  /**
   * Clears the background and environment map.
   */
  dispose() {
    this.envMap && (this.envMap.dispose(), this.envMap = null), this.scene.background = null, this.scene.environment = null, this.backgroundType = "color", this.log("Background disposed");
  }
}
class D {
  /**
   * Manages the Three.js scene setup including fog, background, and environment settings
   * It provides utilities for setting background textures and handling resizing events
   *
   * @param {Object} config - Configuration object for the scene
   * @param {number} [config.BG_COLOR=0x000000] - The background color
   * @param {number} [config.FOG_NEAR=1] - The near distance of the fog
   * @param {number} [config.FOG_FAR=100] - The far distance of the fog
   * @param {boolean} [config.enableFog=false] - Whether to enable fog
   * @param {HTMLElement} [config.container=null] - The container element for the renderer
   * @param {CameraManager} cameraManager - Instance of the camera manager
   * @param {RendererManager} rendererManager - Instance of the renderer manager
   */
  constructor(e = {}, t, s) {
    this.config = { ...D.defaultConfig(), ...e }, this.validateConfig(), this.scene = new C(), this.environment = null, this.container = this.config.container, this.cameraManager = t, this.rendererManager = s, this.debugMode = g.DEBUG_MODE, this.log = this.debugMode ? console.log.bind(console, "[SceneManager]") : () => {
    }, this.configureScene(), this.log("Scene initialized", this.config);
  }
  /**
   * Returns the default configuration for the scene
   * @returns {Object} The default configuration object
   */
  static defaultConfig() {
    return {
      BG_COLOR: 0,
      FOG_NEAR: 1,
      FOG_FAR: 100,
      enableFog: !1,
      container: null
    };
  }
  /**
   * Validates the configuration object
   * @throws Will throw an error if any configuration value is invalid
   */
  validateConfig() {
    if (typeof this.config.BG_COLOR != "number")
      throw new Error("BG_COLOR must be a valid hexadecimal number");
    if (!Number.isFinite(this.config.FOG_NEAR) || !Number.isFinite(this.config.FOG_FAR))
      throw new Error("FOG_NEAR and FOG_FAR must be valid numbers");
  }
  /**
   * Gets the current scene instance
   * @returns {THREE.Scene} The current scene
   */
  getScene() {
    return this.scene;
  }
  /**
   * Configures the scene settings such as background color and fog
   */
  configureScene() {
    const { BG_COLOR: e, FOG_NEAR: t, FOG_FAR: s, enableFog: n } = this.config;
    this.scene.background = new I(e), n && (this.scene.fog = new ye(e, t, s)), this.log("Scene configured with", this.config);
  }
  /**
   * Sets a custom scene background (e.g., HDRI, CubeMap, or Color)
   * @param {THREE.Texture | THREE.Color | Array} background - The scene background
   */
  setBackground(e) {
    this.scene.background = e, (e instanceof z || Array.isArray(e)) && this.setEnvironment(e), this.log("Scene background updated");
  }
  /**
   * Sets an environment map for the scene (affects reflections and lighting)
   * @param {THREE.Texture} envMap - The environment map texture
   */
  setEnvironment(e) {
    this.environment = e, this.scene.environment = e, this.log("Environment map set");
  }
  /**
   * Cleans up scene-related resources (e.g., textures)
   */
  dispose() {
    this.environment && this.environment.dispose(), this.scene.background instanceof z && this.scene.background.dispose(), this.scene = null, this.log("Scene disposed");
  }
}
class Le {
  constructor() {
    this.sceneManager = new D(), this.scene = this.sceneManager.getScene(), this.rendererManager = y.rendererManager, this.cameraManager = null, this.controlManager = null, this.lightManager = null, this.fxManager = null, this.backgroundManager = null, this.stats = null, this.running = !0, this.targetFPS = u.currentSettings.frameRate, this.frameInterval = 1e3 / this.targetFPS, this.lastFrameTime = 0, this.animationFrame = null, this.objects = [];
  }
  init() {
    const e = document.getElementById("threejs-container");
    if (!e)
      throw new Error("Container with ID 'threejs-container' not found");
    this.setupRenderer(e), this.setupScene(), this.setupBackground(), this.setupCamera(), this.setupControls(), this.setupLights(), this.setupEffects(), this.setupObjects(), this.setupObserver(), f.on("update", this.update.bind(this)), window.addEventListener("resize", this.onResize.bind(this)), document.addEventListener(
      "visibilitychange",
      this.handleVisibilityChange.bind(this)
    ), this.animate(), p.delayedCall(0.1, this.updateShadow.bind(this));
  }
  setupRenderer(e) {
    this.rendererManager = new v({
      width: window.innerWidth,
      height: window.innerHeight,
      bgColor: 0,
      vrEnabled: !0
    }), this.rendererManager.appendToContainer(e);
  }
  setupScene() {
    this.sceneManager.configureScene(this.CONFIG);
  }
  setupBackground() {
    if (this.backgroundManager = new ke(
      this.scene,
      this.rendererManager.getRenderer()
    ), u.currentDetailLevel === "high") {
      const e = [
        "/assets/textures/px.png",
        "/assets/textures/nx.png",
        "/assets/textures/py.png",
        "/assets/textures/ny.png",
        "/assets/textures/pz.png",
        "/assets/textures/nz.png"
      ];
      this.backgroundManager.setCubeMapBackground(e);
    } else
      this.backgroundManager.setPlaneBackground(
        "/assets/textures/planete.ktx2",
        130,
        130,
        { x: 50, y: 0, z: 14.3 },
        { x: 0, y: 80, z: -180 },
        { x: 1.1, y: 1, z: 1 }
      );
  }
  setupCamera() {
    this.cameraManager = new k({
      width: window.innerWidth,
      height: window.innerHeight,
      fov: 35,
      position: [-1.7, 0, -0.5],
      scene: this.scene
    });
  }
  setupControls() {
    this.controlManager = new L(
      this.cameraManager.getCamera(),
      this.rendererManager.getRenderer().domElement
    );
  }
  setupLights() {
    this.lightManager = new P(this.scene), this.lightManager.addLight({
      type: "DirectionalLight",
      color: 16777215,
      intensity: 5,
      position: [5, 2, 0],
      shadow: { mapSize: u.currentSettings.shadowResolution }
    }), this.lightManager.addLight({
      type: "DirectionalLight",
      color: 16774371,
      intensity: 5,
      position: [5, 3, 4.1],
      shadow: { mapSize: u.currentSettings.shadowResolution }
    }), this.lightManager.addLight({
      type: "PointLight",
      color: 11140341,
      intensity: 3,
      position: [0, -2, 0]
    });
  }
  setupEffects() {
  }
  setupObjects() {
    const e = new Ce(this.rendererManager.getRenderer(), y.textures);
    e.init(this.scene), this.mecha = new Re(this.scene, this.cameraManager.getCamera(), e);
  }
  updateShadow() {
    this.rendererManager.getRenderer().shadowMap.needsUpdate = !0;
  }
  animate() {
    if (!this.running) return;
    const e = performance.now(), t = e - this.lastFrameTime;
    t >= this.frameInterval && (this.lastFrameTime = e - t % this.frameInterval, f.emit("update")), this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }
  handleVisibilityChange() {
    document.hidden ? (this.running = !1, cancelAnimationFrame(this.animationFrame)) : (this.running = !0, this.lastFrameTime = performance.now(), this.animate());
  }
  setupObserver() {
    new IntersectionObserver((t) => {
      t.forEach((s) => {
        this.running = s.isIntersecting, this.running ? this.animate() : cancelAnimationFrame(this.animationFrame);
      });
    }).observe(this.rendererManager.getRenderer().domElement);
  }
  update() {
    this.controlManager.update(), this.stats?.update(), this.rendererManager.render(this.scene, this.cameraManager.getCamera());
  }
  onResize() {
    this.cameraManager.updateSize(window.innerWidth, window.innerHeight), this.rendererManager.updateSize(window.innerWidth, window.innerHeight);
  }
  dispose() {
    this.rendererManager.dispose(), this.cameraManager.dispose(), this.controlManager.dispose(), this.lightManager.dispose(), this.fxManager.dispose(), this.backgroundManager.dispose(), f.off("update", this.update), window.removeEventListener("resize", this.onResize.bind(this));
  }
}
class Pe {
  constructor() {
    this.events = new $(), this.mainScene = null, this.rendererManager = null, this.loadingManager = null, this.statsElement = null, this.stats = null, this.textures = {}, this.debugMode = g.DEBUG_MODE, this.webGLUtils = new N();
  }
  /**
   * Initializes the application.
   */
  async init() {
    this.log("Initializing application..."), this.updateLoadingScreen(0);
    const e = new xe().run(
      this.updateLoadingScreen.bind(this)
    );
    await Promise.all([e]), this.rendererManager = new v(), this.rendererManager.init(), this.setupLoadingManager(), this.loadAssets();
  }
  /**
   * Sets up the Three.js loading manager to track asset loading.
   */
  setupLoadingManager() {
    this.loadingManager = new ve(
      () => this.start(),
      (e, t, s) => {
        const n = Math.round(t / s * 100);
        this.updateLoadingScreen(n);
      },
      (e) => {
        this.log(`Error loading ${e}`);
      }
    );
  }
  /**
   * Loads required assets using KTX2Loader.
   */
  loadAssets() {
    const e = new _(this.loadingManager);
    if (e.setTranscoderPath("assets/threejs/"), !this.rendererManager || !this.rendererManager.getRenderer()) {
      this.log("RendererManager is not initialized.");
      return;
    }
    e.detectSupport(this.rendererManager.getRenderer()), this.textures = {};
    const t = {
      alphaMap: "/assets/textures/ground_alpha.ktx2",
      aoMap: "/assets/textures/ground_ao.ktx2",
      normalMap: "/assets/textures/ground_normal.ktx2",
      displacementMap: "/assets/textures/ground_displacement.ktx2"
    };
    Object.keys(t).forEach((s) => {
      e.load(t[s], (n) => {
        this.textures[s] = n;
      });
    });
  }
  /**
   * Updates the loading screen based on the progress.
   * @param {number} progress - Loading progress percentage.
   */
  updateLoadingScreen(e) {
    const t = document.getElementById("loading");
    t.setAttribute("aria-valuenow", e);
    const s = t?.querySelector(".progress-bar");
    s && (s.style.width = `${e}%`, s.textContent = `${e}%`), e >= 100 && this.hideLoadingScreen();
  }
  /**
   * Hides the loading screen and reveals the scene.
   */
  async hideLoadingScreen() {
    const e = document.getElementById("loading");
    e && (e.style.visibility = "hidden", e.style.opacity = "0", await setTimeout(() => e.remove(), 1500));
    const t = document.getElementById("threejs-container");
    t && await setTimeout(() => {
      t.style.visibility = "visible", t.style.opacity = "1";
    }, 3500);
  }
  /**
   * Starts the main scene after all assets are loaded.
   */
  start() {
    window.addEventListener("resize", this.onResize.bind(this), !1);
    const e = () => ["alphaMap", "aoMap", "normalMap", "displacementMap"].every((n) => this.textures[n] !== void 0), t = () => {
      e() ? (this.log("All textures loaded, initializing MainScene."), this.mainScene = new Le(), this.mainScene.init(), this.onResize(), this.update()) : (this.log("Waiting for textures to load..."), setTimeout(t, 100));
    };
    t();
  }
  /**
   * Creates performance monitoring statistics.
   */
  createStats() {
    this.stats = new Se(), this.stats.dom.style.position = "absolute", this.stats.dom.style.top = "0px", this.stats.dom.style.left = "0px", document.body.appendChild(this.stats.dom);
  }
  /**
   * Creates a panel to display rendering statistics.
   */
  createStatsPanel() {
    this.statsElement = document.createElement("div"), this.statsElement.id = "stats-container", Object.assign(this.statsElement.style, {
      position: "absolute",
      top: "50px",
      left: "0px",
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: "10px",
      fontFamily: "monospace",
      fontSize: "12px",
      borderRadius: "5px"
    }), document.body.appendChild(this.statsElement);
  }
  /**
   * Updates rendering statistics.
   */
  updateStats() {
    if (!this.mainScene) return;
    const t = this.mainScene.rendererManager.getRenderer().info;
    this.statsElement.innerHTML = `
      Triangles: ${t.render.triangles}<br/>
      Lines: ${t.render.lines}<br/>
      Points: ${t.render.points}<br/>
      Textures: ${t.memory.textures}
    `;
  }
  /**
   * Updates the rendering loop.
   */
  update() {
    requestAnimationFrame(this.update.bind(this)), this.events.emit("update"), this.stats && this.stats.update(), this.statsElement && this.updateStats();
  }
  /**
   * Handles window resize events.
   */
  onResize() {
    this.mainScene && this.mainScene.onResize();
  }
  /**
   * Logs messages to the console only if DEBUG_MODE is enabled.
   * @param {...any} args - The messages or objects to log.
   */
  log(...e) {
    this.debugMode && console.log("[AppManager]", ...e);
  }
}
const y = new Pe();
class De {
  static debugMode = g.DEBUG_MODE;
  static log(...e) {
    this.debugMode && console.log("[DeviceDetector]", ...e);
  }
  /**
   * Checks if the device is a mobile device based on the user agent.
   * @returns {boolean} True if the device is mobile, false otherwise.
   */
  static isMobile() {
    const e = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    return this.log(`Mobile : ${e ? "Yes" : "No"}`), e;
  }
  /**
   * Checks if the device supports touch input.
   * @returns {boolean} True if the device has touch support, false otherwise.
   */
  static isTouchDevice() {
    const e = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    return this.log(`Touch Support: ${e ? "Enabled" : "Disabled"}`), e;
  }
  /**
   * Retrieves the WebGL renderer information.
   * @returns {string|null} The GPU renderer name if available, otherwise null.
   */
  static getGPURendererInfo() {
    try {
      const e = document.createElement("canvas"), t = e.getContext("webgl") || e.getContext("experimental-webgl");
      if (!t)
        return this.log("⚠️ WebGL not available"), null;
      const s = t.getExtension("WEBGL_debug_renderer_info"), n = s ? t.getParameter(s.UNMASKED_RENDERER_WEBGL) : "Unknown GPU";
      return this.log(`GPU Renderer: ${n}`), n;
    } catch (e) {
      return this.log("❌ Failed to retrieve GPU renderer info:", e), null;
    }
  }
}
class Ge {
  static debugMode = g.DEBUG_MODE;
  static log(...e) {
    this.debugMode && console.log("[WebGPUUtils]", ...e);
  }
  /**
   * Checks if WebGPU is available and if hardware acceleration is enabled.
   * @returns {boolean} True if WebGPU is available with hardware acceleration, false otherwise.
   */
  static async isWebGPUSupported() {
    try {
      if (!navigator.gpu)
        return this.log("❌ WebGPU is NOT supported (navigator.gpu not found)"), this.log("Please use a modern browser with WebGPU enabled"), !1;
      const e = await navigator.gpu.requestAdapter();
      if (!e)
        return this.log("❌ WebGPU adapter not available. Likely software rendering"), !1;
      const t = await e.requestDevice(), s = e.features, n = e.limits, i = e.vendor || "Unknown Vendor", r = e.architecture || "Unknown Renderer";
      return /SwiftShader|Software|Mesa|Microsoft Basic Render Driver/i.test(
        r
      ) ? (this.log(
        `❌ WebGPU is running in software mode: ${r} (Vendor: ${i})`
      ), this.log("Please use a computer with a compatible GPU"), !1) : (this.log("✅ WebGPU is supported with hardware acceleration"), this.log(`🔹 Vendor: ${i}`), this.log(`🔹 Renderer: ${r}`), this.log("🔹 Features:", [...s]), this.log("🔹 Limits:", n), !0);
    } catch (e) {
      return this.log("❌ Error while checking WebGPU support:", e), !1;
    }
  }
}
class Ae {
  constructor() {
    this.sceneContainer = document.getElementById("threejs-container"), this.debugMode = g.DEBUG_MODE, this.log = this.debugMode ? console.log.bind(console, "[WebGLUtils]") : () => {
    };
  }
  /**
   * Initializes the application when the DOM is fully loaded
   */
  static init() {
    document.addEventListener("DOMContentLoaded", () => {
      const e = N.isWebGLSupported(), t = De.isMobile();
      if ((async () => await Ge.isWebGPUSupported())(), !e || t) {
        this.displayNoWebGLWarning(t, e);
        return;
      }
      y.init();
    });
  }
  /**
   * Displays a warning message when the application is accessed from a mobile device
   */
  static displayNoWebGLWarning() {
    if (!this.sceneContainer) return;
    const e = document.createElement("div");
    e.id = "mobile-version", this.sceneContainer.appendChild(e);
  }
}
Ae.init();
