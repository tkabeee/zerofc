"use strict";

var gulp = require("gulp");
var webserver = require('gulp-webserver');
var compass   = require("gulp-compass");
var header    = require('gulp-header');
var minifyCss = require("gulp-minify-css");
var plumber   = require("gulp-plumber");
var rename    = require('gulp-rename');
var autoprefixer = require("gulp-autoprefixer");

var APP_ROOT  = "../html";

var SCSS_FILE = "src/sass/**/*.scss";
var CSS_FILE  = "src/css/**/*.css";

var SASS_DIR  = "src/sass"
var CSS_DIR   = "src/css"
var CSS_DEST_DIR = APP_ROOT + "/css";

gulp.task("compile", function(){
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
    .pipe(header("@charset \"UTF-8\";\n\n"))
    .pipe(gulp.dest(CSS_DEST_DIR))
    .pipe(minifyCss({
      'keepBreaks': false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(CSS_DEST_DIR))
    ;
});

gulp.task("watch", function(){
  gulp.watch([SCSS_FILE],["compile"]
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
  gulp.start('compile');
});