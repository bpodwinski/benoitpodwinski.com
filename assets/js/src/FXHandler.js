var FXHandler = function () {

    var shaderTime = 0;
    var screenW = 1920;
    var screenH = 1080;
    var blurriness = 3;
    var nuts = false;
    var bloomPass;
    var hblurPass = null;
    var vblurPass = null;
    var copyPass = null;
    var renderTarget2 = null;
    var glowComposer = null;
    var composer = null;
    var blendPass = null;
    var badTVPass = null;
    var mirrorPass = null;
    var dotScreenPass = null;
    var rgbPass = null;
    var smaaPass = null;
    var depthMaterial, depthRenderTarget;
    var msaaPass = null
    var scene, renderer, camera, controls, vrControls
    var vr, controller2, material, geom, bubbles = []
    var material, geoms = []
    var group = new THREE.Group()

    function init() {
        controls = VizHandler.getControls();
        scene = VizHandler.getScene();
        renderer = VizHandler.getRenderer();
        camera = VizHandler.getCamera();

        //EVENT HANDLERS
        events.on("update", update);
        events.on("onBeat", onBeat);

        setup()
    }

    function setup() {

        vrControls = new THREE.VRControls(camera);
        vrControls.standing = true;
        //vrControls.scale = .5;
    }

    function switchControls() {

        controls.autoRotate = false;
        controls.enabled = false;

        scene.add(group)
        group.position.y = -1.5

        vr = true
        
        Shards.init()

        /*var roz = 4
         var directionalLight=VizHandler.getLight()
         directionalLight.shadow.camera.near = -roz
         directionalLight.shadow.camera.far = roz * 5
         directionalLight.shadow.camera.left = -roz
         directionalLight.shadow.camera.right = roz
         directionalLight.shadow.camera.top = roz
         directionalLight.shadow.camera.bottom = -roz
         directionalLight.shadow.mapSize.width = 2048;
         directionalLight.shadow.mapSize.height = 2048;
         directionalLight.shadow.bias = 0//.001
         VizHandler.getRenderer().shadowMap.autoUpdate = true;*/

        var reflectionCube = Assets.getCubeMap(12)
        reflectionCube.format = THREE.RGBFormat;
        geom = new THREE.BoxGeometry(.2, .2, .2, 1, 1, 1)

        var shininess = 50, specular = 0xffffff, bumpScale = .055, shading = THREE.SmoothShading;
        var reflectionCube = Assets.getCubeMap(31)
        reflectionCube.format = THREE.RGBFormat;
        var roughness = .4;
        var metalness = .9;
        var diffuseColor = new THREE.Color(1, 1, 1);
        material = new THREE.MeshStandardMaterial({
            //skinning: true,
            bumpScale: bumpScale,
            color: diffuseColor,
            metalness: metalness,
            //fog: false,
            roughness: roughness,
            shading: THREE.FlatShading,
            envMap: reflectionCube,
            side: THREE.DoubleSide,
            //depthWrite:false,
            //depthTest:false,
            //blendEquation:THREE.MinEquation
        })

        onResize();
        mobile = false;
    }

    function removeBubble(bubble) {
        scene.remove(bubble)
    }

    function onBeat() {
        setTimeout(onBeatEnd, 300);
    }

    function onBeatEnd() {
    }

    function toggle() {
        setup()
    }

    function onResize() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        var pixelRatio = renderer.getPixelRatio();
        var newWidth = Math.floor(width / pixelRatio) || 1;
        var newHeight = Math.floor(height / pixelRatio) || 1;
        if (composer)
            composer.setSize(newWidth, newHeight);

    }

    function update(t) {

        if (vr)
            return;

        renderer.render(scene, camera);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.needsUpdate = true;

        scene.overrideMaterial = depthMaterial;
        renderer.render(scene, camera, depthRenderTarget, true);
        scene.overrideMaterial = null;

        if (composer) {
            //renderer.clear();
            composer.render();
        }

        return;
    }

    return {
        init: init,
        update: update,
        toggle: toggle,
        onBeat: onBeat,
        onResize: onResize
    };

}();