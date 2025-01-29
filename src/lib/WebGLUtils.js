/**
 * WebGL Utility class: Checks WebGL availability and handles errors.
 */
export class WebGLUtils {
  /**
   * Checks if WebGL is available in the current browser.
   * @returns {boolean} True if WebGL is available, false otherwise.
   */
  static isWebGLSupported() {
    try {
      const canvas = document.createElement("canvas");
      return !!(window.WebGLRenderingContext && canvas.getContext("webgl"));
    } catch (e) {
      return false;
    }
  }

  /**
   * Checks if WebGL2 is available in the current browser.
   * @returns {boolean} True if WebGL2 is available, false otherwise.
   */
  static isWebGL2Supported() {
    try {
      const canvas = document.createElement("canvas");
      return !!(window.WebGL2RenderingContext && canvas.getContext("webgl2"));
    } catch (e) {
      return false;
    }
  }

  /**
   * Creates and returns an error message element if WebGL is not supported.
   * @returns {HTMLElement} A DOM element containing the error message.
   */
  static getWebGLErrorMessage() {
    const message = document.createElement("div");
    message.style.fontFamily = "monospace";
    message.style.fontSize = "14px";
    message.style.color = "#fff";
    message.style.background = "#900";
    message.style.padding = "20px";
    message.style.borderRadius = "5px";
    message.style.textAlign = "center";
    message.style.position = "fixed";
    message.style.top = "20px";
    message.style.left = "50%";
    message.style.transform = "translateX(-50%)";
    message.style.zIndex = "1000";
    message.innerHTML = `
      ❌ <strong>WebGL is not supported in your browser.</strong><br/>
      Please update your browser or enable WebGL in the settings.
    `;
    return message;
  }

  /**
   * Displays an error message on the page if WebGL is not supported.
   */
  static appendErrorMessage() {
    if (!this.isWebGLSupported()) {
      console.warn("❌ WebGL is NOT supported in this browser.");
      document.body.appendChild(this.getWebGLErrorMessage());
    }
  }
}

// 🚀 Automatically check and display the error message if WebGL is unavailable
WebGLUtils.appendErrorMessage();
