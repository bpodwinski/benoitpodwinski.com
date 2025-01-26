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
  }
}
