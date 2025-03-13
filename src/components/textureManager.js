import { Texture, ImageLoader, RGBFormat } from "three";

// Local variables
let textureCube;
const cubeMaps = [];

/**
 * Initialization function
 */
function init() {
  // Function intentionally left empty
}

/**
 * Destroys an object and optionally its textures
 * @param {Object} object - The object to destroy
 * @param {boolean} textureToo - Whether to destroy the textures as well
 */
function destroy(object, textureToo) {
  if (object.children.length > 0) {
    const objects = [object.children[1], object.children[0]];

    object.remove(objects[0]);
    object.remove(objects[1]);

    destroyMesh(objects[0], textureToo);
    destroyMesh(objects[1], textureToo);
  } else {
    destroyMesh(object, textureToo);
  }
}

/**
 * Retrieves or generates a cube map
 * @param {number} [i=0] - The index of the cube map
 * @returns {THREE.Texture} The cube map texture
 */
function getCubeMap(i = 0) {
  // Check if the cube map for this index already exists
  if (cubeMaps[i]) {
    return cubeMaps[i];
  }

  // Create a new cube texture
  const cubeMap = new Texture([]);
  cubeMap.format = RGBFormat;
  cubeMap.flipY = false;

  // Definition of available textures
  const envMaps = [{ file: "textures/skin.jpg", size: 1024, glow: 0.2 }];

  // Check if the index is valid
  if (i < 0 || i >= envMaps.length) {
    console.error(
      `Index ${i} is invalid for envMaps so returning an empty cube texture`
    );
    return cubeMap; // Return an empty texture by default
  }

  const { file, size } = envMaps[i];

  // Image loader to create the cube faces
  const loader = new ImageLoader();
  loader.load(
    file,
    (image) => {
      const getSide = (x, y) => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;

        const context = canvas.getContext("2d");
        context.drawImage(image, -x * size, -y * size);

        return canvas;
      };

      cubeMap.image[0] = getSide(2, 1); // px
      cubeMap.image[1] = getSide(0, 1); // nx
      cubeMap.image[2] = getSide(1, 0); // py
      cubeMap.image[3] = getSide(1, 2); // ny
      cubeMap.image[4] = getSide(1, 1); // pz
      cubeMap.image[5] = getSide(3, 1); // nz
      cubeMap.needsUpdate = true;
    },
    (error) => {
      console.error("Error loading texture", file, error);
    }
  );

  // Store the cube map in the cache
  cubeMaps[i] = cubeMap;
  return cubeMap;
}

/**
 * Destroys a mesh and optionally its textures
 * @param {THREE.Mesh} mesh - The mesh to destroy
 * @param {boolean} textureToo - Whether to destroy the textures as well
 */
function destroyMesh(mesh, textureToo) {
  if (mesh.geometry) mesh.geometry.dispose();

  if (!mesh.material) return;

  let tex = mesh.material.map;
  if (!tex && mesh.material.materials) tex = mesh.material.materials[1]?.map;

  if (tex && textureToo) {
    tex.needsUpdate = false;
    tex.dispose();
    tex.image = null;
    tex = null;
  }

  if (mesh.material.materials) {
    mesh.material.materials.forEach((mat) => mat.dispose());
    mesh.material.materials.length = 0;
  }

  if (mesh.material.dispose) mesh.material.dispose();

  mesh.material = null;
  mesh.geometry = null;
  tex = null;
}

/**
 * Retrieves the current texture cube
 * @returns {THREE.Texture} The texture cube
 */
function getTextureCube() {
  return textureCube;
}

export const TextureManager = {
  init,
  getTextureCube,
  destroy,
  getCubeMap,
};
