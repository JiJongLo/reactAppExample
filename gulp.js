/**
 * Created by ggggggggggggg on 06.07.2015.
 */
var lr = require('tiny-lr'), // Минивебсервер для livereload
    gulp = require('gulp'), // Сообственно Gulp JS
    livereload = require('gulp-livereload'), // Livereload для Gulp
    concat = require('gulp-concat'), // Склейка файлов
    connect = require('connect'), // Webserver
    server = lr();
var less = require('gulp-less');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
    console.log("ddd");
    return gulp.src('./project/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'));
});