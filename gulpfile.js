"use strict";

const gulp = require("gulp");
const eslint = require("gulp-eslint");
const sass = require("gulp-sass");
const sassLint = require("gulp-sass-lint");

const jsPath = "./js/**/*.js";
const sassPath = "./*.scss";


gulp.task("default", ["lint", "watch"]);

gulp.task("watch", ["js:watch", "sass:watch"]);
gulp.task("lint", ["js:lint", "sass:lint"]);


// JAVASCRIPT
gulp.task("js:lint", () => (
  gulp.src(jsPath)
    .pipe(eslint())
));

gulp.task("js:watch", () => (
  gulp.watch(jsPath, ["js:lint"])
));

// SASS
gulp.task("sass:lint", () => (
  gulp.src(sassPath)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
));

gulp.task("sass:compile", () => (
  gulp.src(sassPath)
    .pipe(sass())
    .pipe(gulp.dest("."))
));

gulp.task("sass:watch", () => (
  gulp.watch(sassPath, ["sass:lint", "sass:compile"])
));
