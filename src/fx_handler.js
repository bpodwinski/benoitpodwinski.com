import * as THREE from "three";
import { VizHandler } from "./viz_handler.js";
import { events } from "./lib/Events.js";
import { Shards } from "./viz/shards.js";
import { Assets } from "./viz/assets.js";

export const FXHandler = {
  shaderTime: 0,
  screenW: 1920,
  screenH: 1080,
  blurriness: 3,
  nuts: false,
  bloomPass: null,
  hblurPass: null,
  vblurPass: null,
  copyPass: null,
  renderTarget2: null,
  glowComposer: null,
  composer: null,
  blendPass: null,
  badTVPass: null,
  mirrorPass: null,
  dotScreenPass: null,
  rgbPass: null,
  smaaPass: null,
  depthMaterial: null,
  depthRenderTarget: null,
  msaaPass: null,
  scene: null,
  renderer: null,
  camera: null,
  controls: null,
  vrControls: null,
  vr: false,
  controller2: null,
  material: null,
  geom: null,
  bubbles: [],
  geoms: [],
  group: new THREE.Group(),

  init() {
    this.controls = VizHandler.getControls();
    this.scene = VizHandler.getScene();
    this.renderer = VizHandler.getRenderer();
    this.camera = VizHandler.getCamera();

    // Attach event handlers
    events.on("update", this.update.bind(this));
    events.on("onBeat", this.onBeat.bind(this));

    this.setup();
  },

  setup() {
    this.controls.autoRotate = false;
    this.controls.enabled = false;

    this.scene.add(this.group);
    this.group.position.y = -1.5;

    this.vr = true;

    Shards.init();

    const reflectionCube1 = Assets.getCubeMap(0);
    reflectionCube1.format = THREE.RGBFormat;

    this.geom = new THREE.BoxGeometry(0.2, 0.2, 0.2, 1, 1, 1);

    const shininess = 50,
      specular = 0xffffff,
      bumpScale = 0.055,
      shading = THREE.SmoothShading;

    const reflectionCube2 = Assets.getCubeMap(0);
    reflectionCube2.format = THREE.RGBFormat;

    const roughness = 0.4;
    const metalness = 0.9;
    const diffuseColor = new THREE.Color(1, 1, 1);

    this.material = new THREE.MeshStandardMaterial({
      bumpScale: bumpScale,
      color: diffuseColor,
      metalness: metalness,
      roughness: roughness,
      flatShading: true,
      envMap: reflectionCube2,
      side: THREE.DoubleSide,
    });

    this.onResize();
    this.mobile = false;
  },

  removeBubble(bubble) {
    this.scene.remove(bubble);
  },

  onBeat() {
    setTimeout(this.onBeatEnd.bind(this), 300);
  },

  onBeatEnd() {
    // Logique de fin de "beat"
  },

  toggle() {
    this.setup();
  },

  onResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const pixelRatio = this.renderer.getPixelRatio();
    const newWidth = Math.floor(width / pixelRatio) || 1;
    const newHeight = Math.floor(height / pixelRatio) || 1;

    if (this.composer) this.composer.setSize(newWidth, newHeight);
  },

  update() {
    if (this.vr) return;

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.needsUpdate = true;

    this.renderer.render(this.scene, this.camera, this.depthRenderTarget);

    if (this.composer) {
      this.composer.render();
    }
  },
};
