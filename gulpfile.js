const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
  return gulp
    .src(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"])
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream())
    
    
});

// Move the javascript files into our /src/js folder
gulp.task("js", function() {
  return gulp
    .src([
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/popper.js/dist/umd/popper.min.js",
      "node_modules/aos/dist/aos.js"
    ])
    .pipe(gulp.dest("src/js/"))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task(
  "serve",
  gulp.series(["sass"], function() {
    browserSync.init({
      server: "./src"
    });

    gulp.watch(
      ["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"],gulp.series(["sass"])
    );
    gulp.watch(["src/*.html", "src/js/*.js"]).on("change", browserSync.reload);
  })
);

gulp.task("default", gulp.series(["js", "serve"]));
