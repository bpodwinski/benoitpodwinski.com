<<<<<<< HEAD
import * as THREE from "three";

export const DEBUG_MODE = false;

/**
 * Configuration for different benchmark detail levels.
 */
const detailLevels = {
  low: {
    resolutionScale: 0.7,
    frameRate: 18,
    textureResolution: 512,
    anisotropy: 8,
    shadowQuality: THREE.BasicShadowMap,
    shadowResolution: 512,
    antialias: false,
  },
  medium: {
    resolutionScale: 0.8,
    frameRate: 24,
    textureResolution: 1024,
    anisotropy: 8,
    shadowQuality: THREE.PCFShadowMap,
    shadowResolution: 1024,
    antialias: true,
  },
  high: {
    resolutionScale: 1,
    frameRate: 60,
    textureResolution: 2048,
    anisotropy: 16,
    shadowQuality: THREE.PCFSoftShadowMap,
    shadowResolution: 2048,
    antialias: true,
  },
};

/**
 * Global settings state
 */
export const SettingsState = {
  currentDetailLevel: "medium",
  currentSettings: detailLevels.medium,
};

/**
 * Update settings globally when benchmark finishes
 * @param {string} level - The new detail level (low, medium, high)
 */
export function updateSettings(level) {
  if (!detailLevels[level]) {
    if (DEBUG_MODE)
      console.warn(
        `[Settings] Unknown level "${level}", defaulting to "medium".`
      );
    level = "medium";
  }

  SettingsState.currentDetailLevel = level;
  SettingsState.currentSettings = detailLevels[level];
}

/**
 * Default export with dynamic settings
 */
export default {
  DEBUG_MODE,
  detailLevels,
  SettingsState,
  updateSettings,
};
=======
export const DEBUG_MODE = false;
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
