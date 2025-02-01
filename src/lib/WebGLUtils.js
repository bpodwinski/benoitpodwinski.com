import Settings from "../config/Settings";

export class WebGLUtils {
  static debugMode = Settings.DEBUG_MODE;
  static log(...args) {
    if (this.debugMode) {
      console.log("[WebGLUtils]", ...args);
    }
  }

  /**
   * Checks if WebGL is available and if hardware acceleration is enabled.
   * @returns {boolean} True if WebGL is hardware-accelerated, false otherwise.
   */
  static isWebGLSupported() {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (!gl) {
        this.log("❌ WebGL is NOT supported (Context not created)");
        this.log("Please use a computer to access all features");
        return false;
      }

      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      const renderer = debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        : "Unknown";

      const vendor = debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
        : "Unknown";

      const isSoftwareRenderer =
        /SwiftShader|Software|Mesa|Microsoft Basic Render Driver/i.test(
          renderer
        );

      if (isSoftwareRenderer) {
        this.log(
          `❌ WebGL is running in software mode: ${renderer} (Vendor: ${vendor})`
        );
        this.log("Please use a computer to access all features");
        return false;
      }

      this.log(
        `✅ WebGL is supported with hardware acceleration: ${renderer} (Vendor: ${vendor})`
      );
      return true;
    } catch (e) {
      this.log("❌ Error while checking WebGL support:", e);
      return false;
    }
  }

  /**
   * Checks if WebGL2 is available and if hardware acceleration is enabled.
   * @returns {boolean} True if WebGL2 is hardware-accelerated, false otherwise.
   */
  static isWebGL2Supported() {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2");

      if (!gl) {
        this.log("❌ WebGL 2 is NOT supported (Context not created).");
        this.log("Please use a computer to access all features");
        return false;
      }

      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      const renderer = debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
        : "Unknown";

      const vendor = debugInfo
        ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
        : "Unknown";

      const isSoftwareRenderer =
        /SwiftShader|Software|Mesa|Microsoft Basic Render Driver/i.test(
          renderer
        );

      if (isSoftwareRenderer) {
        this.log(
          `❌ WebGL 2 is running in software mode: ${renderer} (Vendor: ${vendor})`
        );
        this.log("Please use a computer to access all features");
        return false;
      }

      this.log(
        `✅ WebGL 2 is supported with hardware acceleration: ${renderer} (Vendor: ${vendor})`
      );
      return true;
    } catch (e) {
      this.log("❌ Error while checking WebGL 2 support:", e);
      return false;
    }
  }
}
