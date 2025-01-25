//VizHandler
//Handle 3D world
var VizHandler = (function () {
  var rendertime = 0; //constantly incrementing value public
  var camera,
    scene,
    renderer,
    controls,
    fullscreen = false;
  var cubeCameraRead, cubeCameraWrite;
  var debugCube;
  var renderToggle = true;
  var mobile;

  var BG_COLOR = 0xffffff;
  var directionalLight;

  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;

  function init() {
    var id = parseInt(window.location.hash.substr(1));
    if (!id) id = 1;
    ControlsHandler.fxParams.song = id;

    //EVENT HANDLERS
    events.on("update", update);

    // var container = document.getElementById('viz')
    //document.body.appendChild(container);

    container = document.createElement("div");
    document.body.appendChild(container);

    //RENDERER
    renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(BG_COLOR);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.autoUpdate = true;
    //renderer.shadowMap.needsUpdate = true;
    //renderer.autoClear = false;

    //renderer.shadowMap.type = THREE.PCFShadowMap;
    //renderer.sortObjects = false;
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    //3D SCENE
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.x = -2;
    camera.position.y = 2.5;
    camera.position.z = 2;
    //scene.add(camera);

    scene.fog = new THREE.Fog(BG_COLOR, 2, 10);

    //controls = new THREE.TrackballControls(camera);
    controls = new THREE.OrbitControls(camera);
    controls.target.set(0, 0, 0);
    controls.update();
    controls.autoRotate = false;
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.05;
    //controls.autoRotateSpeed = (Math.random() * .5 - .25) / 7;
    controls.minDistance = 2;
    controls.maxDistance = 4;
    controls.maxPolarAngle = Math.PI / 2.5;
    controls.minPolarAngle = Math.PI / 5;

    Assets.init();

    directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight.position.x = 0.1;
    directionalLight.position.z = -0.9;
    directionalLight.position.y = 0.4;
    directionalLight.castShadow = true;
    var roz = 6;
    directionalLight.shadow.camera.near = -roz * 2;
    directionalLight.shadow.camera.far = roz * 2;
    directionalLight.shadow.camera.left = -roz;
    directionalLight.shadow.camera.right = roz;
    directionalLight.shadow.camera.top = roz;
    directionalLight.shadow.camera.bottom = -roz;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.bias = 0.0001;

    scene.add(directionalLight);
    //scene.add(new THREE.CameraHelper(directionalLight.shadow.camera));
    //scene.add(new THREE.CameraHelper(directionalLight2.shadow.camera));

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));

    /*hemiLight = new THREE.HemisphereLight(0xffffff, 0x666666, 0.6);
        hemiLight.color.setHSL(0.6, 1, 0.8);
        hemiLight.groundColor.setHSL(0.095, 1, 0.9);
        hemiLight.position.set(0, 10, 0);
        scene.add(hemiLight);*/

    //var helper = new THREE.CameraHelper(directionalLight.shadow.camera);
    //scene.add(helper);

    activeViz = [Mecha];

    activeVizCount = activeViz.length;
    for (var j = 0; j < activeVizCount; j++) {
      activeViz[j].init();
    }

    //window.addEventListener('deviceorientation', setOrientationControls, true);

    TweenMax.delayedCall(0.1, updateShadow);
  }

  function updateShadow() {
    renderer.shadowMap.needsUpdate = true;
  }

  function remake() {
    for (var j = 0; j < activeVizCount; j++) {
      activeViz[j].reload();
    }
    controls.autoRotateSpeed = Math.random() * 0.5 - 0.25;
    TweenMax.delayedCall(5, remake);
  }

  function setOrientationControls(e) {
    if (!e.alpha) {
      return;
    }

    controls.enabled = false;
    controls = new THREE.DeviceOrientationControls(camera, true);
    controls.connect();
    controls.update();

    window.removeEventListener(
      "deviceorientation",
      setOrientationControls,
      true
    );

    if (renderer.domElement) {
      renderer.domElement.addEventListener("click", function () {
        if (this.requestFullscreen) {
          this.requestFullscreen();
        } else if (this.msRequestFullscreen) {
          this.msRequestFullscreen();
        } else if (this.mozRequestFullScreen) {
          this.mozRequestFullScreen();
        } else if (this.webkitRequestFullscreen) {
          this.webkitRequestFullscreen();
        }
        fullscreen = true;
      });

      mobile = true;
    }
  }

  function update() {
    controls.update();

    if (mobile) {
      camera.position.set(0, 0, 0);
      camera.translateZ(1.8);
    }
  }

  function onResize() {
    var renderW = 1920;
    var renderH = 1080;

    if (ControlsHandler.vizParams.fullSize) {
      var renderW = window.innerWidth;
      var renderH = window.innerHeight;

      if (ControlsHandler.vizParams.showControls) {
        renderW -= 250;
      }
      $("#viz").css({ position: "relative", top: 0 });
    } else {
      //vertically center viz output
      $("#viz").css({
        position: "relative",
        top: window.innerHeight / 2 - FIXED_SIZE_H / 2,
      });
    }

    camera.aspect = renderW / renderH;
    camera.updateProjectionMatrix();
    renderer.setSize(renderW, renderH);
  }

  return {
    init: init,
    update: update,
    getCamera: function () {
      return camera;
    },
    getScene: function () {
      return scene;
    },
    getLight: function () {
      return directionalLight;
    },
    getRenderer: function () {
      return renderer;
    },
    getCubeCameras: function () {
      return [cubeCameraRead, cubeCameraWrite];
    },
    getControls: function () {
      return controls;
    },
    onResize: onResize,
    isFullscreen: function () {
      return fullscreen;
    },
    isMobile: function () {
      return mobile;
    },
  };
})();
