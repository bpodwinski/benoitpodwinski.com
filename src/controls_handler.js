import { events } from "./lib/Events";
import { FXHandler } from "./fx_handler";

export const ControlsHandler = {
  t: 0,

  mainParams: {
    time: 0.0001,
    auto: false,
    fullscreen: function () {
      document.documentElement.webkitRequestFullscreen(
        Element.ALLOW_KEYBOARD_INPUT
      );
      Main.toggleControls();
    },
  },

  audioParams: {
    useMic: false,
    useSample: false,
    showDebug: true,
    volSens: 1, //1,
    beatHoldTime: 40,
    beatDecayRate: 0.97,
    bpmMode: false,
    bpmRate: 0,
  },

  fxParams: {
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
  },

  vizParams: {
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
  },

  init() {
    events.on("update", this.update.bind(this));
  },

  show(trigger, percStart, percFinish, value) {
    var changedValue = true;

    if (typeof value === "number") {
      changedValue = value;
    }

    if (
      this.mainParams.time > percStart &&
      this.mainParams.time <= percFinish
    ) {
      this.fxParams[trigger] = changedValue;
    }
  },

  autoChange() {
    this.mainParams.auto = true;
  },

  manualChange() {
    this.mainParams.auto = false;

    if (FXHandler && typeof FXHandler.toggle === "function") {
      FXHandler.toggle();
    }
  },

  update() {
    if (this.mainParams.auto) {
      this.mainParams.time +=
        1 / 3 /*hours*/ / 60 /*minutes*/ / 60 /*seconds*/ / 60 /*fps*/; //*60*4;
      if (this.mainParams.time > 1) this.mainParams.time = 1;
      if (this.mainParams.time < 0) this.mainParams.time = 0;
    }

    var clone = {};

    for (var attr in this.fxParams) {
      if (this.fxParams.hasOwnProperty(attr)) {
        clone[attr] = this.fxParams[attr];
      }
    }

    if (this.mainParams.auto) {
      for (var attr in fxParams) {
        if (this.fxParams.hasOwnProperty(attr)) {
          if (this.fxParams[attr] === true) fxParams[attr] = false;
        }
      }

      this.fxParams.waterProgress =
        Math.sin(3.5 + mainParams.time * 6) / 2 + 0.5;
      this.fxParams.colorProgress = this.mainParams.time;
      this.fxParams.spreadProgress = this.mainParams.time;

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
    var changed = false;

    for (var attr in this.fxParams) {
      if (
        clone[attr] != this.fxParams[attr] &&
        typeof this.fxParams[attr] === "boolean" &&
        attr !== "heart" &&
        attr !== "wireframe" &&
        attr !== "items" &&
        attr !== "black" &&
        attr !== "waterProgress" &&
        attr !== "spreadProgress" &&
        attr !== "bgProgress"
      ) {
        changed = true;
        console.log(attr, this.fxParams[attr]);
      }
    }

    if (changed) FXHandler.toggle();
  },
};
