import * as THREE from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";

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
  controller2: null,
  material: null,
  geom: null,
  geoms: [],
  group: new THREE.Group(),

  init() {
    this.scene = VizHandler.getScene();
    this.renderer = VizHandler.getRenderer();
    this.camera = VizHandler.getCamera();

    // Attach event handlers
    events.on("update", this.update.bind(this));

    this.setup();
  },

  setup() {
    if (!this.composer) {
      const renderPass = new RenderPass(this.scene, this.camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.2, // Strength
        0.4, // Radius
        0.8 // Threshold
      );

      this.composer = new EffectComposer(this.renderer);
      this.composer.addPass(renderPass);
      this.composer.addPass(bloomPass);
    }

    this.scene.add(this.group);
    this.group.position.y = -1.5;

    Shards.init();

    const reflectionCube1 = Assets.getCubeMap(0);
    reflectionCube1.format = THREE.RGBFormat;

    this.geom = new THREE.BoxGeometry(0.2, 0.2, 0.2, 1, 1, 1);

    const reflectionCube2 = Assets.getCubeMap(0);
    reflectionCube2.format = THREE.RGBFormat;

    this.material = new THREE.MeshStandardMaterial({
      bumpScale: 0.8,
      color: new THREE.Color(1, 1, 1),
      metalness: 0.9,
      roughness: 0.5,
      flatShading: true,
      envMap: reflectionCube2,
      side: THREE.DoubleSide,
    });

    this.onResize();
    this.mobile = false;
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
    if (this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  },
};
