export class EnvironmentDetector {
    /**
     * Detect if the device is mobile.
     * @returns {boolean} True if the device is mobile, false otherwise.
     */
    static isMobile() {
        return /Mobi|Android/i.test(navigator.userAgent);
    }

    /**
     * Detect if the device has a high-performance GPU (e.g., NVIDIA or AMD).
     * @returns {boolean} True if a high-performance GPU is detected, false otherwise.
     */
    static hasHighPerformanceGPU() {
        const gl = document.createElement("canvas").getContext("webgl");
        if (!gl) return false;

        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        const renderer = debugInfo && gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

        //console.log(`GPU Renderer Detected: ${renderer}`);

        if (renderer) {
            return /NVIDIA|AMD|Radeon/i.test(renderer);
        }

        return false;
    }
}
