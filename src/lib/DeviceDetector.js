/**
 * DeviceDetector class: Provides methods to detect device capabilities.
 * Includes checks for mobile devices, GPU performance, and touch capability.
 */
export class DeviceDetector {
  /**
   * Returns the default configuration for the DeviceDetector.
   * This can be extended in the future for more settings.
   * @returns {Object} Default configuration settings.
   */
  static defaultConfig() {
    return {};
  }

  /**
   * Detects if the device is a mobile device based on the user agent.
   * Logs the detection result.
   * @returns {boolean} True if the device is mobile, false otherwise.
   */
  static isMobile() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    console.log(
      `[DeviceDetector] Mobile Detection: ${isMobile ? "Yes" : "No"}`
    );
    return isMobile;
  }

  /**
   * Checks if the device supports touch input.
   * Logs the detection result.
   * @returns {boolean} True if the device has touch support, false otherwise.
   */
  static isTouchDevice() {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    console.log(
      `[DeviceDetector] Touch Support: ${isTouch ? "Enabled" : "Disabled"}`
    );
    return isTouch;
  }

  /**
   * Retrieves the WebGL renderer information.
   * Logs the GPU renderer name if available.
   * @returns {string|null} The GPU renderer name if available, otherwise null.
   */
  static getGPURendererInfo() {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (!gl) {
        console.warn("[DeviceDetector] WebGL not available.");
        return null;
      }

      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      const renderer = debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        : "Unknown GPU";

      console.log(`[DeviceDetector] GPU Renderer: ${renderer}`);
      return renderer;
    } catch (error) {
      console.warn(
        "[DeviceDetector] Failed to retrieve GPU renderer info:",
        error
      );
      return null;
    }
  }

  /**
   * Detects if the device has a high-performance GPU (e.g., NVIDIA or AMD).
   * Logs whether a high-performance GPU is detected or not.
   * @returns {boolean} True if a high-performance GPU is detected, false otherwise.
   */
  static hasHighPerformanceGPU() {
    const renderer = DeviceDetector.getGPURendererInfo();
    if (!renderer) {
      console.warn("[DeviceDetector] Unable to determine GPU performance.");
      return false;
    }

    const isHighPerf = /NVIDIA|AMD|Radeon|RTX|GTX/i.test(renderer);
    console.log(
      `[DeviceDetector] High-Performance GPU: ${isHighPerf ? "Yes" : "No"}`
    );
    return isHighPerf;
  }
}
