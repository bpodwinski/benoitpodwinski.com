var Mecha = (function () {
  var groupHolder;
  var multiMaterial;
  var scene;
  var dae;
  var timeout;
  var flotilla = [];
  var material;
  var bonesCount = 10;
  var bonesPositions = [];
  var bonesPositionsTween = [];
  var center = new THREE.Vector3();
  var centerTween = new THREE.Vector3();
  var mouseControl = false;
  function init() {
    //init event listeners
    events.on("update", update);
    events.on("onBeat", onBeat);
    groupHolder = new THREE.Object3D();
    VizHandler.getScene().add(groupHolder);

    reload();

    var groundBump = new THREE.TextureLoader().load(
      "assets/img/ground_bump.jpg"
    );
    groundBump.wrapS = THREE.RepeatWrapping;
    groundBump.wrapT = THREE.RepeatWrapping;
    groundBump.repeat.set(100, 100);

    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: 0xc9c9c9,
      metalness: 0.2,
      roughness: 0.6,
      transparent: true,
      bumpMap: groundBump,
      bumpScale: 1,
    });

    cubeMesh = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), cubeMaterial);
    cubeMesh.rotation.x = -Math.PI / 2;
    cubeMesh.position.y = -0.25;
    cubeMesh.castShadow = true;
    cubeMesh.receiveShadow = true;
    groupHolder.add(cubeMesh);

    document.addEventListener("mousemove", onDocumentMouseDown);
    document.addEventListener("touchmove", onDocumentTouchStart, false);
  }
  function onDocumentTouchStart(event) {
    if (event.touches.length === 1) {
      var mouse = new THREE.Vector2();
      mouse.x = (event.touches[0].pageX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.touches[0].pageY / window.innerHeight) * 2 + 1;
      boom(mouse);
    }
  }
  function onDocumentMouseDown(event) {
    var mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    boom(mouse);
  }
  function boom(mouse) {
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, VizHandler.getCamera());
    var intersects = raycaster.intersectObject(cubeMesh, true);
    //console.log(intersects, mouse)
    if (intersects[0]) {
      mouseControl = true;
      //console.log(intersects[ 0 ])
      var p = intersects[0].point.multiplyScalar(1 / 0.05);
      //center.copy()
      TweenMax.to(center, center.distanceTo(p) * 0.1, {
        x: p.x * 0.6,
        z: p.z * 0.6,
        ease: Linear.easeNone,
        onComplete: function () {
          mouseControl = false;
        },
      });
    }
  }

  function reload() {
    if (dae) {
      groupHolder.remove(dae);
      dae.geometry.dispose();
      dae = null;
    }

    var shininess = 50,
      specular = 0xffffff,
      bumpScale = 0.055,
      shading = THREE.SmoothShading;
    var reflectionCube = Assets.getCubeMap(31);
    reflectionCube.format = THREE.RGBFormat;
    var roughness = 0;
    var metalness = 1;
    var diffuseColor = new THREE.Color(1, 1, 1);
    material = new THREE.MeshStandardMaterial({
      bumpScale: bumpScale,
      color: 0xffffff,
      metalness: metalness,
      //fog: false,
      roughness: roughness,
      flatShading: true,
      envMap: reflectionCube,
      side: THREE.DoubleSide,
      //depthWrite:false,
      //depthTest:false,
      //blendEquation:THREE.MinEquation
    });

    initBones();
  }

  function initBones() {
    meshes = [];
    skeletonHelpers = [];

    var segmentHeight = 5;
    var segmentCount = 2;
    var height = segmentHeight * segmentCount;
    var halfHeight = height * 0.5;

    var sizing = {
      segmentHeight: segmentHeight,
      segmentCount: segmentCount,
      height: height,
      halfHeight: halfHeight,
    };

    for (var i = 0; i < bonesCount; i++) {
      var mesh;
      var geometry = createGeometry(sizing);
      var bones = createBones(sizing);
      mesh = createMesh(geometry, bones);
      mesh.scale.set(0.05, 0.05, 0.05);

      groupHolder.add(mesh);
      meshes.push(mesh);

      var pos = new THREE.Vector3();
      pos.oldCenter = new THREE.Vector3();
      bonesPositions.push(pos);
      bonesPositionsTween.push(pos.clone());
    }
  }

  // Before Threejs r125
  // function createGeometry(sizing) {
  //   var geometry = new THREE.CylinderGeometry(
  //     0, // radiusTop
  //     3, // radiusBottom
  //     sizing.height, // height
  //     7, // radiusSegments
  //     sizing.segmentCount * 3, // heightSegments
  //     true // openEnded
  //   );

  //   for (var i = 0; i < geometry.vertices.length; i++) {
  //     var vertex = geometry.vertices[i];
  //     var y = vertex.y + sizing.halfHeight;

  //     var skinIndex = Math.floor(y / sizing.segmentHeight);
  //     var skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;

  //     vertex.x -= (0.5 - Math.random()) * 2;
  //     vertex.z -= (0.5 - Math.random()) * 2;
  //     if (vertex.y == -sizing.segmentHeight) {
  //       vertex.x = vertex.z = 0;
  //     }

  //     geometry.skinIndices.push(
  //       new THREE.Vector4(skinIndex, skinIndex + 1, 0, 0)
  //     );
  //     geometry.skinWeights.push(
  //       new THREE.Vector4(1 - skinWeight, skinWeight, 0, 0)
  //     );
  //   }

  //   return geometry;
  // }

  function createGeometry(sizing) {
    // Crée une géométrie cylindrique en utilisant BufferGeometry
    const geometry = new THREE.CylinderGeometry(
      0, // radiusTop
      3, // radiusBottom
      sizing.height, // height
      7, // radiusSegments
      sizing.segmentCount * 3, // heightSegments
      true // openEnded
    );

    // Récupère les attributs des positions
    const positionAttribute = geometry.attributes.position;
    const vertexCount = positionAttribute.count;

    // Crée des tableaux pour skinIndices et skinWeights
    const skinIndices = [];
    const skinWeights = [];

    for (let i = 0; i < vertexCount; i++) {
      const vertex = new THREE.Vector3(
        positionAttribute.getX(i),
        positionAttribute.getY(i),
        positionAttribute.getZ(i)
      );

      const y = vertex.y + sizing.halfHeight;

      const skinIndex = Math.floor(y / sizing.segmentHeight);
      const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;

      // Modifie les positions
      vertex.x -= (0.5 - Math.random()) * 2;
      vertex.z -= (0.5 - Math.random()) * 2;

      if (vertex.y === -sizing.segmentHeight) {
        vertex.x = vertex.z = 0;
      }

      // Met à jour la position de l'attribut
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);

      // Ajoute les indices et poids de la peau
      skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
      skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
    }

    // Ajoute les nouveaux attributs à la géométrie
    geometry.setAttribute(
      "skinIndex",
      new THREE.Uint16BufferAttribute(skinIndices, 4)
    );
    geometry.setAttribute(
      "skinWeight",
      new THREE.Float32BufferAttribute(skinWeights, 4)
    );

    return geometry;
  }

  function createBones(sizing) {
    const bones = [];
    const rootBone = new THREE.Bone();
    rootBone.position.y = -sizing.halfHeight;
    bones.push(rootBone);

    let prevBone = rootBone;
    for (let i = 0; i < sizing.segmentCount; i++) {
      const bone = new THREE.Bone();
      bone.position.y = sizing.segmentHeight;
      bones.push(bone);
      prevBone.add(bone);
      prevBone = bone;
    }

    return bones;
  }

  function createMesh(geometry, bones) {
    const skeleton = new THREE.Skeleton(bones);
    const skinnedMesh = new THREE.SkinnedMesh(geometry, material);

    skinnedMesh.add(bones[0]);
    skinnedMesh.bind(skeleton);

    skinnedMesh.castShadow = true;
    skinnedMesh.receiveShadow = true;

    return skinnedMesh;
  }

  function update() {
    var time = Date.now() * 0.0001;
    //var bone = mesh;

    //Wiggle the bones
    /*if (state.animateBones) {
         for (var i = 0; i < mesh.skeleton.bones.length; i++) {
         mesh.skeleton.bones[ i ].position.x = 20*Math.sin(i+3*time) * 2 / mesh.skeleton.bones.length;
         mesh.skeleton.bones[ i ].position.z = 20*Math.sin(i+2*time) * 2 / mesh.skeleton.bones.length;
         mesh.skeleton.bones[ i ].position.y = 10*Math.sin(i+time) * 2 / mesh.skeleton.bones.length;
         }
         }*/
    var i = 0;

    var spd = 0.2;
    if (!mouseControl) {
      var des = new THREE.Vector3(
        (window.innerWidth / window.innerHeight) *
          10 *
          Math.sin(i + 2 * time) *
          Math.sin(i + 3.5 * time) *
          1,
        0,
        15 * Math.sin(i + 1 * time) * Math.sin(i + 4.5 * time) * 1
      );
      TweenMax.to(center, center.distanceTo(des) * 0.2, {
        x: des.x,
        z: des.z,
        ease: Linear.easeNone,
      });
    }
    TweenMax.to(center, 0, {
      y: 2 * Math.sin(i + time * 10),
      ease: Linear.easeNone,
    });
    //var centerSpd = centerTween.distanceTo(center) / 2.5
    //console.log(centerSpd)
    TweenMax.to(centerTween, spd * 5, {
      x: center.x,
      y: center.y,
      z: center.z,
      ease: Linear.easeNone,
    });

    for (var j = 0; j < bonesCount; j++) {
      var mesh = meshes[j];

      if (
        bonesPositions[j].x == 0 ||
        Math.random() < 0.003 ||
        (bonesPositions[j].distanceTo(center) > 13 &&
          !TweenMax.isTweening(bonesPositionsTween[j]))
      ) {
        //var i = Math.floor(Math.random() * bonesCount)

        var r = 2 * Math.PI * (j / bonesCount + Math.random() / 10);

        bonesPositions[j].x = center.x + Math.sin(r) * 10;
        bonesPositions[j].y = 0;
        bonesPositions[j].z = center.z + Math.cos(r) * 10;
        bonesPositions[j].oldCenter.copy(center);

        //if (!TweenMax.isTweening(bonesPositionsTween[j])) {
        TweenMax.killTweensOf(bonesPositionsTween[j]);
        TweenMax.to(bonesPositionsTween[j], spd * 2, {
          x: bonesPositions[j].x,
          z: bonesPositions[j].z,
        });
        TweenMax.to(bonesPositionsTween[j], spd, { y: 5 });
        TweenMax.to(bonesPositionsTween[j], spd, {
          delay: spd,
          y: bonesPositions[j].y,
        });
        //}
      }

      mesh.skeleton.bones[0].position.copy(centerTween);
      mesh.skeleton.bones[0].position.add(
        centerTween.clone().multiplyScalar(0.5)
      );
      mesh.skeleton.bones[1].position.set(
        bonesPositionsTween[j].x / 2,
        5 + bonesPositionsTween[j].y / 2,
        bonesPositionsTween[j].z / 2
      );
      mesh.skeleton.bones[1].position.sub(
        centerTween.clone().multiplyScalar(0.5)
      );
      mesh.skeleton.bones[2].position.set(
        bonesPositionsTween[j].x,
        -10 + bonesPositionsTween[j].y,
        bonesPositionsTween[j].z
      );
      mesh.skeleton.bones[2].position.sub(
        centerTween.clone().multiplyScalar(1)
      );
    }

    //console.log(bonesPositionsTween[0].x)

    /*mesh.skeleton.bones[1].position.x=0;
         mesh.skeleton.bones[1].position.y=0;
         mesh.skeleton.bones[1].position.z=0;
         mesh.skeleton.bones[2].position.x=10;
         mesh.skeleton.bones[2].position.y=10;
         mesh.skeleton.bones[2].position.z=10;*/
  }

  function onBeat() {
    /*if (Math.random() < .2) {
         goBack();
         return;
         }
         var point = new THREE.Vector3()
         var s = Math.random() * Math.PI
         var t = Math.random() * Math.PI
         var r = 4;
         point.x = r * Math.cos(s) * Math.sin(t)
         point.y = r * Math.sin(s) * Math.sin(t)
         point.z = r * Math.cos(t)
         animate(point)*/
  }

  function prerender() {
    //plane.visible = false;
  }

  function postrender() {
    //plane.visible = true;
  }

  function setEnvMap(cubeMap) {
    material.envMap = cubeMap;
  }
  function getRandomOne() {
    return flotilla[Math.floor(Math.random() * flotilla.length)];
  }

  return {
    init: init,
    update: update,
    onBeat: onBeat,
    //generate: generate,
    //generateArmy: generateArmy,
    prerender: prerender,
    postrender: postrender,
    setEnvMap: setEnvMap,
    getRandomOne: getRandomOne,
  };
})();
