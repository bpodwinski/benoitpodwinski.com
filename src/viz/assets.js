import * as THREE from "three";

// Variables locales
let textureCube;
const cubeMaps = [];

// Initialisation
function init() {}

// Détruire un objet (et éventuellement ses textures)
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

// Récupérer ou générer une cube map
function getCubeMap(i = 0) {
  // Vérifie si la cube map pour cet index existe déjà
  if (cubeMaps[i]) {
    return cubeMaps[i];
  }

  // Crée une nouvelle texture cube
  const cubeMap = new THREE.Texture([]);
  cubeMap.format = THREE.RGBFormat;
  cubeMap.flipY = false;

  // Définition des textures disponibles
  const envMaps = [{ file: "/assets/img/skin.jpg", size: 1024, glow: 0.2 }];

  // Vérifie si l'index est valide
  if (i < 0 || i >= envMaps.length) {
    console.error(
      `Index ${i} invalide pour envMaps. Retourne une texture cube vide.`
    );
    return cubeMap; // Retourne une texture vide par défaut
  }

  const { file, size } = envMaps[i];

  // Chargeur d'images pour créer les faces du cube
  const loader = new THREE.ImageLoader();
  loader.load(file, (image) => {
    const getSide = (x, y) => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;

      const context = canvas.getContext("2d");
      context.drawImage(image, -x * size, -y * size);

      return canvas;
    };

    // Associe les faces de la texture cube
    cubeMap.image[0] = getSide(2, 1); // px
    cubeMap.image[1] = getSide(0, 1); // nx
    cubeMap.image[2] = getSide(1, 0); // py
    cubeMap.image[3] = getSide(1, 2); // ny
    cubeMap.image[4] = getSide(1, 1); // pz
    cubeMap.image[5] = getSide(3, 1); // nz
    cubeMap.needsUpdate = true; // Indique que la texture doit être mise à jour
  });

  // Stocke la cube map dans le cache
  cubeMaps[i] = cubeMap;
  return cubeMap;
}

// Détruire un mesh (et éventuellement ses textures)
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

function getTextureCube() {
  return textureCube;
}

const Assets = {
  init,
  getTextureCube,
  destroy,
  getCubeMap,
};

export { Assets };
