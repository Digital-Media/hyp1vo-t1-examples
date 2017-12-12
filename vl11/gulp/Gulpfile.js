let gulp = require("gulp");
let uglify = require("gulp-uglify-es").default;
let sass = require("gulp-sass");
let cssnano = require("gulp-cssnano");
let sourcemaps = require("gulp-sourcemaps");
let eslint = require("gulp-eslint");
let browsersync = require("browser-sync");

gulp.task("test", function () {
    console.log("Hallo Welt!");
});

gulp.task("scripts", function () {
    return gulp.src("_js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("js"));
});

gulp.task("styles", function () {
    return gulp.src("_scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"));
});

gulp.task("lint", function () {
    return gulp.src("_js/**/*.js")
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
});

gulp.task("server", function (done) {
    browsersync({
        server: {
            baseDir: ["."]
        }
    });
    done();
});

gulp.task("watch", function () {
    gulp.watch("_scss/**/*.scss", ["styles"]);
    gulp.watch("_js/**/*.js", ["scripts"]);
    gulp.watch(["css/*", "js/*"], browsersync.reload);
});

gulp.task("default", ["styles", "scripts", "server", "watch"]);
