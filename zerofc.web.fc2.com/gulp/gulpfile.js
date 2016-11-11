"use strict";

var gulp = require("gulp");
var webserver = require('gulp-webserver');
var plumber   = require("gulp-plumber");
var rename    = require('gulp-rename');
var compass   = require("gulp-compass");
var autoprefixer = require("gulp-autoprefixer");
var concat    = require("gulp-concat");
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

gulp.task("concat", function(){
  gulp.src([CSS_FILE])
    .pipe(concat("set.css"))
    .pipe(gulp.dest(CSS_DIR))
    ;
});

gulp.task("minify", function(){
  gulp.src([CSS_DIR + '/set.css'])
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
      "concat",
      "minify"
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

gulp.task("css", function(){
  gulp.start('compass');
  gulp.start('concat');
  gulp.start('minify');
});