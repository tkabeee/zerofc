"use strict";

var gulp = require("gulp");
var webserver = require('gulp-webserver');
var plumber   = require("gulp-plumber");
var compass   = require("gulp-compass");
var autoprefixer = require("gulp-autoprefixer");
var minifyCss = require("gulp-minify-css");

var APP_ROOT  = "../html";

var SCSS_FILE = "src/sass/*.scss";
var CSS_FILE  = "src/css/*.css";

var SASS_DIR  = "src/sass"
var CSS_DIR   = "src/css"
var CSS_DEST_DIR = APP_ROOT + "/css";

gulp.task("compass", function(){
  gulp.src([SCSS_FILE])
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        this.emit('end');
      }
    }))
    .pipe(compass({
      sass: SASS_DIR,
      css: CSS_DIR
    }))
    // .pipe(gulp.dest(CSS_DEST_DIR))
    ;
});

gulp.task("minify", function(){
  gulp.src([CSS_FILE])
      .pipe(plumber())
      .pipe(minifyCss({
        'keepBreaks': false
      }))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(CSS_DEST_DIR))
      ;
});

gulp.task("watch", function(){
  gulp.watch(
    [SCSS_FILE],
    [
      "compass",
      // "minify"
    ]
  );
});

gulp.task("webserver", function(){
  gulp.src(APP_ROOT)
    .pipe(webserver({
      livereload: true
    }))
    ;
});

gulp.task("default", function(){
  gulp.start('webserver');
  gulp.start('watch');
});