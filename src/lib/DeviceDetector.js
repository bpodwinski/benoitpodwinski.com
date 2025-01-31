import Settings from "../config/Settings";

export class DeviceDetector {
  static debugMode = Settings.DEBUG_MODE;
  static log(...args) {
    if (this.debugMode) {
      console.log("[DeviceDetector]", ...args);
    }
  }

  /**
   * Checks if the device is a mobile device based on the user agent.
   * @returns {boolean} True if the device is mobile, false otherwise.
   */
  static isMobile() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    this.log(`Mobile : ${isMobile ? "Yes" : "No"}`);
    return isMobile;
  }

  /**
   * Checks if the device supports touch input.
   * @returns {boolean} True if the device has touch support, false otherwise.
   */
  static isTouchDevice() {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    this.log(`Touch Support: ${isTouch ? "Enabled" : "Disabled"}`);
    return isTouch;
  }

  /**
   * Retrieves the WebGL renderer information.
   * @returns {string|null} The GPU renderer name if available, otherwise null.
   */
  static getGPURendererInfo() {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (!gl) {
        this.log("⚠️ WebGL not available");
        return null;
      }

      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      const renderer = debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        : "Unknown GPU";

      this.log(`GPU Renderer: ${renderer}`);
      return renderer;
    } catch (error) {
      this.log("❌ Failed to retrieve GPU renderer info:", error);
      return null;
    }
  }
}
