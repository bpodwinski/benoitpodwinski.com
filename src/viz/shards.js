import * as THREE from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { events } from "../lib/Events";
import { Assets } from "./assets";
import { VizHandler } from "../viz_handler";

export const Shards = (() => {
  let groupHolder;
  let multiMaterial;
  let drewNewShape = false;
  let scl = 0;
  let full;
  let spd = 0;
  let mod = 0;
  let speed = 0.035;
  let back = false;
  let main;
  let timeout;
  let flotilla = [];
  let isMobile = { any: false };
  let plane;
  let rings = [];
  let material;
  let time = 0;

  function init() {
    events.on("update", update);

    const reflectionCube = Assets.getCubeMap(0);
    reflectionCube.format = THREE.RGBFormat;

    material = new THREE.MeshStandardMaterial({
      bumpScale: 0.055,
      metalness: 1,
      fog: false,
      roughness: 0,
      flatShading: true,
      envMap: reflectionCube,
      color: 0xffffff,
    });

    //reload();
  }

  function reload() {
    if (full) {
      VizHandler.getScene().remove(full);
      full.geometry.dispose();
      full = null;
    }

    const geo = new THREE.BoxGeometry(0.1, 0.1, 0.1, 1, 1, 1);
    const group = new THREE.Object3D();

    for (let j = 0; j < 400; j++) {
      const r = 15;
      const tpos = new THREE.Vector3();
      if (j !== 0) {
        tpos.set(
          (Math.random() - 0.5) * r,
          (Math.random() - 0.5) * r,
          (Math.random() - 0.5) * r
        );
      }
      const ran = Math.random() * 5;
      for (let i = 0; i < ran; i++) {
        const cube = new THREE.Mesh(geo, material);
        const r = 0.2 + 0.4 * Math.random();
        cube.position.set(
          (Math.random() - 0.5) * r,
          (Math.random() - 0.5) * r,
          (Math.random() - 0.5) * r
        );
        cube.position.add(tpos);
        const scr0 = Math.random();
        const scr1 = Math.random();
        const scr2 = Math.random();
        cube.scale.set(scr0, scr1, scr2);
        group.add(cube);
        cube.castShadow = true;
        cube.receiveShadow = true;
      }
    }

    // Fusionne toutes les géométries collectées
    const geometries = group.children
      .map((child) => {
        if (child.isMesh && child.geometry) {
          const geom = child.geometry.clone();
          geom.applyMatrix4(child.matrix);
          return geom;
        }
        return null;
      })
      .filter((geom) => geom !== null);

    // Ajoute du bruit sur les sommets
    const positionAttribute = mergeGeometries(geometries).attributes.position;
    const mod = 0.1;
    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i) + (Math.random() - 0.5) * mod;
      const y = positionAttribute.getY(i) + (Math.random() - 0.5) * mod;
      const z = positionAttribute.getZ(i) + (Math.random() - 0.5) * mod;
      positionAttribute.setXYZ(i, x, y, z);
    }

    // Recalcule les normales pour la géométrie fusionnée
    mergeGeometries(geometries).computeVertexNormals();

    // Crée un maillage avec la géométrie fusionnée
    full = new THREE.Mesh(mergeGeometries(geometries), material);
    full.castShadow = true;
    full.receiveShadow = true;

    // Ajout du maillage à la scène
    VizHandler.getScene().add(full);

    // Demande de mise à jour de la shadowMap
    VizHandler.getRenderer().shadowMap.needsUpdate = true;
  }

  function update() {
    // Mettre à jour l'état si nécessaire
  }

  function generate() {
    // Ajouter la logique de génération ici
  }

  return {
    init,
    update,
    generate,
    reload,
  };
})();
