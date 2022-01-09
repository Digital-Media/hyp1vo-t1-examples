"use strict";

const {src, dest, watch, series, parallel} = require("gulp");
const uglify = require("gulp-uglify-es").default;
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const sourcemaps = require("gulp-sourcemaps");
const eslint = require("gulp-eslint");
const browsersync = require("browser-sync");

function test(cb) {
    console.log("Hallo Welt!");
    cb();
}

function scripts() {
    return src("_js/**/*.js")
        .pipe(uglify())
        .pipe(dest("js"));
}

function styles() {
    return src("_scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(dest("css"));
}

function lint() {
    return src("_js/**/*.js")
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function server(done) {
    browsersync({
        server: {
            baseDir: ["."]
        }
    });
    done();
}

function reload(done) {
    browsersync.reload();
    done();
}

function watcher() {
    watch("_scss/**/*.scss", series(styles, reload));
    watch("_js/**/*.js", series(scripts, reload));
}

exports.test = test;
exports.scripts = scripts;
exports.styles = styles;
exports.lint = lint;
exports.server = server;
exports.watcher = watcher;
exports.default = series(parallel(styles, scripts), server, watcher);
