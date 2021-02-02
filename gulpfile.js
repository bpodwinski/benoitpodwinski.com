var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    DEBUG: false,
    pattern: '*'
  });

// BrowserSync
gulp.task('browserSync', function() {
  return plugins.browserSync.init({
    //host: '0.0.0.0',
    proxy: 'benoitpodwinski.local',
    ghostMode: false,
    open: false,
    reloadOnRestart: true
  });
})

// JS task
gulp.task('js', function() {
  return gulp.src([
    'assets/js/src/lib/minivents.js',
    'assets/js/src/lib/jquery-2.2.4.js',
    'assets/js/src/lib/Detector.js',
    'assets/js/src/lib/three.js',
    'assets/js/src/lib/SimplexNoise.js',
    'assets/js/src/lib/atutil.js',
    'assets/js/src/lib/TweenMax.min.js',
    'assets/js/src/lib/controls/OrbitControls.js',
    'assets/js/src/lib/controls/DeviceOrientationControls.js',
    'assets/js/src/lib/controls/VRControls.js',
    'assets/js/src/lib/ViveController.js',
    'assets/js/src/lib/isMobile.js',
    'assets/js/src/viz/BG.js',
    'assets/js/src/viz/Mecha.js',
    'assets/js/src/viz/Shards.js',
    'assets/js/src/viz/Assets.js',
    'assets/js/src/Main.js',
    'assets/js/src/ControlsHandler.js',
    'assets/js/src/FXHandler.js',
    'assets/js/src/VizHandler.js'
  ])
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.plumber())
  .pipe(plugins.concat('build.js'))
  .pipe(plugins.uglify())
  .pipe(plugins.sourcemaps.write('.'))
  .pipe(gulp.dest('assets/js'));
});

// CSS task
gulp.task('sass', function() {
  return gulp.src('assets/sass/**/*.scss')
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.plumber())
  .pipe(plugins.sass.sync({
    includePaths: 'sass/styles.scss',
    outputStyle: 'compressed'
  })
    .on('error', plugins.sass.logError)
  )
  .pipe(plugins.autoprefixer())
  .pipe(plugins.rename({
    basename: 'build',
    extname: '.css'
  }))
  .pipe(plugins.sourcemaps.write('.'))
  .pipe(gulp.dest('assets/css'))
  .pipe(plugins.browserSync.stream());
});

// Default task
gulp.task('default', ['browserSync', 'sass', 'js'], function() {
  gulp.watch('assets/sass/**/*.scss', ['sass'])
  gulp.watch('assets/js/src/**/*.js', ['js']).on("change", plugins.browserSync.reload)
  gulp.watch('*.html').on("change", plugins.browserSync.reload);
});
