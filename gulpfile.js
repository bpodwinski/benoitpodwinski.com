const { src, dest, watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");

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
    // Core libraries and utilities
    "node_modules/jquery/dist/jquery.js",
    "assets/js/src/lib/Events.js",
    "assets/js/src/lib/WebGLDetector.js",
    //"assets/js/src/lib/SimplexNoise.js",
    "assets/js/src/lib/atutil.js",
    "assets/js/src/lib/TweenMax.min.js",
    //"assets/js/src/lib/isMobile.min.js",

    // Controls (depends on THREE.js)
    "assets/js/src/lib/controls/OrbitControls.js",
    "assets/js/src/lib/controls/DeviceOrientationControls.js",
    "assets/js/src/lib/controls/VRControls.js",
    "assets/js/src/lib/ViveController.js",

    // Visualization-specific scripts
    "assets/js/src/viz/Assets.js", // Assets needed for other visualization components
    "assets/js/src/viz/BG.js",
    "assets/js/src/viz/Mecha.js",
    "assets/js/src/viz/Shards.js",

    // Application logic
    "assets/js/src/Main.js",
    "assets/js/src/ControlsHandler.js",
    "assets/js/src/FXHandler.js",
    "assets/js/src/VizHandler.js",
  ])
    .pipe(sourcemaps.init())
    .pipe(concat("build.js"))
    .pipe(sourcemaps.write("."))
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
