import { EventEmitter } from "./lib/eventEmitter";
import { isWebGLSupported, displayWebGLError } from "./lib/webGLUtils";
import { sceneManager } from "./components/SceneManager";

const events = new EventEmitter();

const App = {
  init() {
    if (!isWebGLSupported()) {
      displayWebGLError();
      return;
    }
    window.addEventListener("resize", this.onResize.bind(this), false);
    sceneManager.init();
    this.onResize();
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
