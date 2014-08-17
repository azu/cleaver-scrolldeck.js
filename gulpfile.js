"use strict";
var gulp = require("gulp");
var concat = require('gulp-concat');

gulp.task('scripts', function () {
    gulp.src(["./js/vendor/*.js", "./js/plugin/*.js"])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./'))
});
gulp.task('css', function () {
    gulp.src('./css/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'))
});