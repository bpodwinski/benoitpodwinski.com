import App from "./components/AppManager";
import Settings from "./config/Settings";
import { DeviceDetector } from "./lib/DeviceDetector";
import { WebGLUtils } from "./lib/WebGLUtils";
import { WebGPUUtils } from "./lib/WebGPUUtils";

class Index {
  constructor() {
    this.sceneContainer = document.getElementById("threejs-container");
    this.debugMode = Settings.DEBUG_MODE;
    this.log = this.debugMode
      ? console.log.bind(console, "[WebGLUtils]")
      : () => {};
  }

  /**
   * Initializes the application when the DOM is fully loaded
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
   * Displays a warning message when the application is accessed from a mobile device
   */
  static displayNoWebGLWarning() {
    if (!this.sceneContainer) return;

    const warning = document.createElement("div");
    warning.id = "mobile-version";
    this.sceneContainer.appendChild(warning);
  }
}

Index.init();
