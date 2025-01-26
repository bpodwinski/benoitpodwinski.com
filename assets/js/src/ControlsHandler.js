var ControlsHandler = (function () {
  var t = 0;

  var mainParams = {
    time: 0.0001,
    auto: false,
    fullscreen: function () {
      document.documentElement.webkitRequestFullscreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
      Main.toggleControls();
    },
    generate_one: function () {
      Asteroid.generate(0, 0);
    },
    generate_grid: function () {
      Asteroid.generate(8, 8);
    },
  };

  var audioParams = {
    useMic: false,
    useSample: false,
    showDebug: true,
    volSens: 1, //1,
    beatHoldTime: 40,
    beatDecayRate: 0.97,
    bpmMode: false,
    bpmRate: 0,
  };

  var fxParams = {
    song: 0,
    nuts: false,
    tilt: true,
    tv: false,
    kaleidoscope: -1,
    kaleidoscopeJump: false,
    rgb: true,
    wireframe: false,
    dots: false,
    person: false,
    ssao: true,
    ssaoOnly: false,
    heart: true,
    items: true,
    black: true,
    animSpeed: 1.0,
    colorProgress: 0.0,
    spreadProgress: 0.0,
    waterProgress: 0.3,
    bgProgress: 0.0,
    glow: 0.3,
  };

  var vizParams = {
    fullSize: true,
    showControls: false,
    fakeKinect: false,
    // useBars: false,
    // useGoldShapes: true,
    // useNebula:true,
    // useNeonShapes:true,
    // useStripes:true,
    // useTunnel:true,
    // useWaveform:true,
  };

  function init() {
    return events.on("update", update);
  }

  function show(trigger, percStart, percFinish, value) {
    var changedValue = true;
    if (typeof value === "number") {
      changedValue = value;
    }
    if (mainParams.time > percStart && mainParams.time <= percFinish) {
      fxParams[trigger] = changedValue;
    }
  }

  function autoChange() {
    mainParams.auto = true;
  }

  function manualChange() {
    mainParams.auto = false;
    FXHandler.toggle();
  }

  function update() {
    if (mainParams.auto) {
      mainParams.time +=
        1 / 3 /*hours*/ / 60 /*minutes*/ / 60 /*seconds*/ / 60 /*fps*/; //*60*4;
      if (mainParams.time > 1) mainParams.time = 1;
      if (mainParams.time < 0) mainParams.time = 0;
    }

    var clone = {};
    for (var attr in fxParams) {
      if (fxParams.hasOwnProperty(attr)) {
        clone[attr] = fxParams[attr];
      }
    }
    if (mainParams.auto) {
      for (var attr in fxParams) {
        if (fxParams.hasOwnProperty(attr)) {
          if (fxParams[attr] === true) fxParams[attr] = false;
        }
      }

      fxParams.waterProgress = Math.sin(3.5 + mainParams.time * 6) / 2 + 0.5;
      fxParams.colorProgress = mainParams.time;
      fxParams.spreadProgress = mainParams.time;
      //fxParams.bgProgress=mainParams.time

      show("black", 0.07, 0.25);
      show("bgProgress", 0.0, 0.5, 0);
      show("bgProgress", 0.5, 1.0, 1);

      show("kaleidoscope", 0.0, 0.09, -1);
      show("kaleidoscope", 0.13, 0.16, 0);
      show("kaleidoscope", 0.16, 0.19, 1);
      show("kaleidoscope", 0.19, 0.24, 4);

      show("heart", 0.0, 0.37);
      show("heart", 0.43, 1);
      show("black", 0.3, 0.4);
      show("spreadProgress", 0.3, 1, 1);

      show("kaleidoscope", 0.24, 0.3, -1);
      show("kaleidoscope", 0.3, 0.33, 0);
      show("kaleidoscope", 0.33, 0.36, 1);
      show("kaleidoscope", 0.36, 0.43, 2);

      show("items", 0.15, 1.0);

      show("animSpeed", 0.17, 0.2, -3);
      show("animSpeed", 0.2, 0.23, 4);
      show("animSpeed", 0.23, 0.3, -10);
      show("animSpeed", 0.53, 0.61, -3);
      show("animSpeed", 0.61, 0.67, 4);
      show("animSpeed", 0.67, 0.73, -6);
      show("animSpeed", 0.73, 0.81, 7);
      show("animSpeed", 0.81, 0.87, 0);
      show("animSpeed", 0.91, 1, -10);

      show("kaleidoscope", 0.4, 0.6, -1);
      show("kaleidoscope", 0.6, 0.65, 0);
      show("kaleidoscope", 0.65, 0.7, 1);
      show("kaleidoscope", 0.7, 0.75, 2);

      show("nuts", 0.43, 0.47);
      show("wireframe", 0.47, 0.57);
      show("nuts", 0.57, 1.0);

      show("rgb", 0.3, 0.4);
      show("rgb", 0.7, 1.0);

      show("tv", 0.65, 1);

      show("kaleidoscopeJump", 0.75, 1);
    }

    /*show('nuts',.5,1)
         show('tv',.5,1)
         show('wireframe',.16,.20)
         show('wireframe',.33,.38)
         show('dots',.9,1)
         show('black',.3,.7)*/

    var changed = false;

    for (var attr in fxParams) {
      if (
        clone[attr] != fxParams[attr] &&
        typeof fxParams[attr] === "boolean" &&
        attr !== "heart" &&
        attr !== "wireframe" &&
        attr !== "items" &&
        attr !== "black" &&
        attr !== "waterProgress" &&
        attr !== "spreadProgress" &&
        attr !== "bgProgress"
      ) {
        changed = true;
        console.log(attr, fxParams[attr]);
      }
    }
    //if(changed)console.log(fxParams.nuts, changed)
    //if(changed)alert('hi')
    if (changed) FXHandler.toggle();
  }

  return {
    init: init,
    audioParams: audioParams,
    fxParams: fxParams,
    vizParams: vizParams,
  };
})();
