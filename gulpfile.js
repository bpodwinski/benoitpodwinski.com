const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");

// BrowserSync
function browserSyncTask() {
  browserSync.init({
    proxy: "192.168.1.190",
    ghostMode: false,
    open: false,
    reloadOnRestart: true,
  });
}

// JS task
function jsTask() {
  return src([
    "assets/js/src/lib/Events.js",
    "assets/js/src/lib/jquery-2.2.4.js",
    "assets/js/src/lib/Detector.js",
    "assets/js/src/lib/three.js",
    "assets/js/src/lib/SimplexNoise.js",
    "assets/js/src/lib/atutil.js",
    "assets/js/src/lib/TweenMax.min.js",
    "assets/js/src/lib/controls/OrbitControls.js",
    "assets/js/src/lib/controls/DeviceOrientationControls.js",
    "assets/js/src/lib/controls/VRControls.js",
    "assets/js/src/lib/ViveController.js",
    "assets/js/src/lib/isMobile.min.js",
    "assets/js/src/viz/BG.js",
    "assets/js/src/viz/Mecha.js",
    "assets/js/src/viz/Shards.js",
    "assets/js/src/viz/Assets.js",
    "assets/js/src/Main.js",
    "assets/js/src/ControlsHandler.js",
    "assets/js/src/FXHandler.js",
    "assets/js/src/VizHandler.js",
  ])
    .pipe(concat("build.js"))
    .pipe(dest("assets/js"))
    .pipe(browserSync.stream());
}

// CSS task
function sassTask() {
  return src("assets/sass/main.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      rename({
        basename: "build",
        extname: ".css",
      })
    )
    .pipe(dest("assets/css"))
    .pipe(browserSync.stream());
}

// Watch task
function watchFiles() {
  watch("assets/sass/**/*.scss", sassTask);
  watch("assets/js/src/**/*.js", jsTask);
  watch("*.html").on("change", browserSync.reload);
}

// Default task
exports.default = series(
  parallel(browserSyncTask, sassTask, jsTask),
  watchFiles
);
