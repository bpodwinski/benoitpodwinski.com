import { EventEmitter } from "./lib/EventEmitter";
import { isWebGLSupported, displayWebGLError } from "./lib/webGLUtils";
import { MainScene } from "./scenes/MainScene";

const events = new EventEmitter();
const mainScene = new MainScene();

const App = {
  init() {
    if (!isWebGLSupported()) {
      displayWebGLError();
      return;
    }
    window.addEventListener("resize", this.onResize.bind(this), false);

    mainScene.init();

    this.onResize();
    this.update();
  },

  update() {
    requestAnimationFrame(this.update.bind(this));
    events.emit("update");
  },

  onResize() {
    mainScene.onResize();
  },
};

export default App;
