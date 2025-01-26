import $ from "jquery";
import App from "./app";

$(function () {
  App.init();
});

$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").fadeOut("slow");
});

$(document).on("click", "#toggleRotate", () => {
  import("./components/controls.js").then(({ controls }) => {
    controls.fxParams.autoRotate = !controls.fxParams.autoRotate;
  });
});
