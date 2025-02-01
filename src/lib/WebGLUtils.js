<<<<<<< HEAD
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
=======
/**
 * Checks if WebGL is supported by the browser and the hardware.
 *
 * @returns {boolean} True if WebGL is supported, false otherwise.
 */
export function isWebGLSupported() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

/**
 * Displays an error message on the webpage if WebGL is not supported.
 */
export function displayWebGLError() {
  if (!isWebGLSupported()) {
    const element = document.createElement("div");
    element.id = "webgl-error-message";
    element.style.fontFamily = "monospace";
    element.style.fontSize = "13px";
    element.style.fontWeight = "normal";
    element.style.textAlign = "center";
    element.style.background = "#fff";
    element.style.color = "#000";
    element.style.padding = "1.5em";
    element.style.width = "400px";
    element.style.margin = "5em auto 0";

    element.innerHTML = `
      Your graphics card or browser does not seem to support 
      <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.
      <br />Find out how to get it 
      <a href="http://get.webgl.org/" style="color:#000">here</a>.
    `;

    document.body.appendChild(element);
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
  }
}
