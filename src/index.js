import App from "./app";

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

window.addEventListener("load", () => {
  const status = document.getElementById("status");
  const preloader = document.getElementById("preloader");

  if (status) status.style.display = "none";
  if (preloader) {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 1s";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 300);
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id === "toggleRotate") {
    import("./components/controls.js").then(({ controls }) => {
      controls.fxParams.autoRotate = !controls.fxParams.autoRotate;
    });
  }
});
