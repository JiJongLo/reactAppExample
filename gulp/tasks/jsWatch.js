/**
 * Created by ggggggggggggg on 02.08.2015.
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config').watch;
gulp.task('js', function () {
    return gulp.src('js/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
