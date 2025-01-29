/**
 * DeviceDetector class: Provides methods to detect device capabilities.
 * Includes checks for mobile devices, GPU performance, and touch capability.
 */
export class DeviceDetector {
  /**
   * Returns the default configuration for the DeviceDetector.
   * @returns {Object} Default configuration settings (future extension).
   */
  static defaultConfig() {
    return {};
  }

  /**
   * Detects if the device is a mobile device based on the user agent.
   * @returns {boolean} True if the device is mobile, false otherwise.
   */
  static isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  /**
   * Checks if the device supports touch input.
   * @returns {boolean} True if the device has touch support, false otherwise.
   */
  static isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
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
      if (!gl) return null;

      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      return debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        : null;
    } catch (error) {
      console.warn("Failed to retrieve GPU renderer info:", error);
      return null;
    }
  }

  /**
   * Detects if the device has a high-performance GPU (e.g., NVIDIA or AMD).
   * @returns {boolean} True if a high-performance GPU is detected, false otherwise.
   */
  static hasHighPerformanceGPU() {
    const renderer = DeviceDetector.getGPURendererInfo();
    if (!renderer) return false;
    return /NVIDIA|AMD|Radeon|RTX|GTX/i.test(renderer);
  }
}
