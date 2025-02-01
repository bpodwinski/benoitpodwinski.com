<<<<<<< HEAD
import App from "./components/AppManager";
import Settings from "./config/Settings";
import { DeviceDetector } from "./lib/DeviceDetector";
import { WebGLUtils } from "./lib/WebGLUtils";
import { WebGPUUtils } from "./lib/WebGPUUtils";

class Index {
  constructor() {
    this.sceneContainer = document.getElementById("scene-container");
    this.debugMode = Settings.DEBUG_MODE;
    this.log = this.debugMode
      ? console.log.bind(console, "[WebGLUtils]")
      : () => {};
  }

  /**
   * Initializes the application when the DOM is fully loaded.
   */
  static init() {
    document.addEventListener("DOMContentLoaded", () => {
      const isWebGLSupported = WebGLUtils.isWebGLSupported();
      const isMobile = DeviceDetector.isMobile();

      (async () => {
        const isWebGPUSupported = await WebGPUUtils.isWebGPUSupported();
      })();

      if (!isWebGLSupported || isMobile) {
        this.displayNoWebGLWarning(isMobile, isWebGLSupported);
        return;
      }

      App.init();
    });
  }

  /**
   * Displays a warning message when the application is accessed from a mobile device.
   */
  static displayNoWebGLWarning() {
    if (!this.sceneContainer) return;

    const warning = document.createElement("div");
    warning.id = "mobile-version";
    this.sceneContainer.appendChild(warning);
  }
}

Index.init();
=======
import App from "./app";

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

window.addEventListener("load", () => {
  const status = document.getElementById("status");
  const preloader = document.getElementById("preloader");

  if (status) status.style.display = "none";
  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 1s";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }
});

/*document.addEventListener("click", (event) => {
  if (event.target.id === "toggleRotate") {
    import("./components/controls.js").then(({ controls }) => {
      controls.fxParams.autoRotate = !controls.fxParams.autoRotate;
    });
  }
});*/
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
