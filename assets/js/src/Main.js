var events = new Events();
var simplexNoise = new SimplexNoise();

var Main = function () {

    function init() {

        if (!Detector.webgl) {
            Detector.addGetWebGLMessage();
        }

        //INIT DOCUMENT
        window.addEventListener('resize', onResize, false);

        //INIT HANDLERS
        ControlsHandler.init();
        VizHandler.init();
        FXHandler.init();

        onResize();

        if (ControlsHandler.vizParams.showControls) {
            $('#controls').show();
        }

        update();

    }

    function update() {
        requestAnimationFrame(update);
        events.emit("update");
    }

    function onResize() {
        VizHandler.onResize();
        FXHandler.onResize();
    }

    return {
        init: init
    };

}();

$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(300).fadeOut('slow');
})

$(document).ready(function () {
    setTimeout(Main.init, 100);
});
