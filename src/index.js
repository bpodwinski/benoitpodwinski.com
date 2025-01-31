import App from "./app";
import { DeviceDetector } from "./lib/DeviceDetector";
import { WebGLUtils } from "./lib/WebGLUtils";

document.addEventListener("DOMContentLoaded", () => {
  const sceneContainer = document.getElementById("scene-container");

  if (DeviceDetector.isMobile() || !WebGLUtils.isWebGLSupported()) {
    if (sceneContainer) {
      noWebGlVersion(sceneContainer);
    }
    return;
  }

  console.log("Is Mobile:", DeviceDetector.isMobile());
  console.log("Has Touch:", DeviceDetector.isTouchDevice());
  console.log("GPU Info:", DeviceDetector.getGPURendererInfo());
  console.log("High Performance GPU:", DeviceDetector.hasHighPerformanceGPU());

  App.init();
});

/**
 * Displays a warning message when the application is accessed from a mobile device.
 * Instead of running the app, it appends a fullscreen div to the given container.
 *
 * @param {HTMLElement} container - The container where the warning will be displayed.
 */
function noWebGlVersion(container) {
  console.log("⚠️ Please use a computer to access all features");

  const warning = document.createElement("div");
  warning.id = "mobile-version";

  container.appendChild(warning);
}
