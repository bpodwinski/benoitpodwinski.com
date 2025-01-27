import { EventEmitter } from "./lib/eventEmitter";
import { isWebGLSupported, displayWebGLError } from "./lib/webGLUtils";
import { controls } from "./components/controls";
import { sceneManager } from "./components/SceneManager";

const events = new EventEmitter();

const App = {
  init() {
    if (!isWebGLSupported()) {
      displayWebGLError();
      return;
    }

    window.addEventListener("resize", this.onResize.bind(this), false);

    controls.init();
    sceneManager.init();

    this.onResize();

    if (controls.vizParams.showControls) {
      const controlsElement = document.getElementById("controls");
      if (controlsElement) {
        controlsElement.style.display = "block";
      }
    }

    this.update();
  },

  update() {
    requestAnimationFrame(this.update.bind(this));
    events.emit("update");
  },

  onResize() {
    sceneManager.onResize();
  },
};

export default App;
