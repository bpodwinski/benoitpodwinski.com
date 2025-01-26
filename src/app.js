import $ from "jquery";
import { EventEmitter } from "./lib/eventEmitter";
import { isWebGLSupported, displayWebGLError } from "./lib/webGLUtils";
import { controls } from "./components/controls";
import { scene } from "./components/scene";
import { fx } from "./components/fx";

const events = new EventEmitter();

const App = {
  init() {
    if (!isWebGLSupported()) {
      displayWebGLError();
      return;
    }

    window.addEventListener("resize", this.onResize.bind(this), false);

    controls.init();
    scene.init();
    fx.init();

    this.onResize();

    if (controls.vizParams.showControls) {
      $("#controls").show();
    }

    this.update();
  },

  update() {
    requestAnimationFrame(this.update.bind(this));
    events.emit("update");
  },

  onResize() {
    scene.onResize();
    fx.onResize();
  },
};

export default App;
