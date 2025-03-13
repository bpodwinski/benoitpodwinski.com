import { BasicShadowMap, PCFShadowMap, PCFSoftShadowMap } from "three";

export const DEBUG_MODE = false;

/**
 * Configuration detail levels
 */
const detailLevels = {
  low: {
    resolutionScale: 0.7,
    frameRate: 18,
    textureResolution: 512,
    anisotropy: 8,
    shadowQuality: BasicShadowMap,
    shadowResolution: 512,
    antialias: false,
  },
  medium: {
    resolutionScale: 0.8,
    frameRate: 24,
    textureResolution: 1024,
    anisotropy: 8,
    shadowQuality: PCFShadowMap,
    shadowResolution: 1024,
    antialias: true,
  },
  high: {
    resolutionScale: 1,
    frameRate: 60,
    textureResolution: 2048,
    anisotropy: 16,
    shadowQuality: PCFSoftShadowMap,
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

export default {
  DEBUG_MODE,
  detailLevels,
  SettingsState,
  updateSettings,
};
