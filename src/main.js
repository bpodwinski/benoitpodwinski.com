import $ from "jquery";
import { Events } from "./lib/Events.js";
import { isWebGLSupported, displayWebGLError } from "./lib/WebGLUtils.js";
import { ControlsHandler } from "./controls_handler.js";
import { VizHandler } from "./viz_handler.js";
import { FXHandler } from "./fx_handler.js";

const events = new Events();

export const Main = {
  init() {
    if (!isWebGLSupported()) {
      displayWebGLError();
      return;
    }

    // Gestion des redimensionnements
    window.addEventListener("resize", this.onResize.bind(this), false);

    // Initialisation des gestionnaires
    ControlsHandler.init();
    VizHandler.init();
    FXHandler.init();

    this.onResize();

    if (ControlsHandler.vizParams.showControls) {
      $("#controls").show();
    }

    this.update();
  },

  update() {
    requestAnimationFrame(this.update.bind(this));
    events.emit("update");
  },

  onResize() {
    VizHandler.onResize();
    FXHandler.onResize();
  },
};

// Page load and document ready
$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(300).fadeOut("slow");
});

$(function () {
  setTimeout(() => Main.init(), 100);
});
