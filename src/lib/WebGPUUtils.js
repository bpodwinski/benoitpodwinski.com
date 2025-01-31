import Settings from "../config/Settings";

export class WebGPUUtils {
  static debugMode = Settings.DEBUG_MODE;
  static log(...args) {
    if (this.debugMode) {
      console.log("[WebGPUUtils]", ...args);
    }
  }

  /**
   * Checks if WebGPU is available and if hardware acceleration is enabled.
   * @returns {boolean} True if WebGPU is available with hardware acceleration, false otherwise.
   */
  static async isWebGPUSupported() {
    try {
      if (!navigator.gpu) {
        this.log("❌ WebGPU is NOT supported (navigator.gpu not found)");
        this.log("Please use a modern browser with WebGPU enabled");
        return false;
      }

      const adapter = await navigator.gpu.requestAdapter();
      if (!adapter) {
        this.log("❌ WebGPU adapter not available. Likely software rendering");
        return false;
      }

      const device = await adapter.requestDevice();
      const features = adapter.features;
      const limits = adapter.limits;
      const vendor = adapter.vendor || "Unknown Vendor";
      const renderer = adapter.architecture || "Unknown Renderer";

      const isSoftwareRenderer =
        /SwiftShader|Software|Mesa|Microsoft Basic Render Driver/i.test(
          renderer
        );

      if (isSoftwareRenderer) {
        this.log(
          `❌ WebGPU is running in software mode: ${renderer} (Vendor: ${vendor})`
        );
        this.log("Please use a computer with a compatible GPU");
        return false;
      }

      this.log("✅ WebGPU is supported with hardware acceleration");
      this.log(`🔹 Vendor: ${vendor}`);
      this.log(`🔹 Renderer: ${renderer}`);
      this.log(`🔹 Features:`, [...features]);
      this.log(`🔹 Limits:`, limits);

      return true;
    } catch (e) {
      this.log("❌ Error while checking WebGPU support:", e);
      return false;
    }
  }
}
