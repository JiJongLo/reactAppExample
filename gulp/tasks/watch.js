var gulp   = require('gulp');
var configWatch = require('../config').watch;
gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(configWatch.srcJs, ['markup']);
    gulp.watch(configWatch.srcCss, ['markup']);
    gulp.watch(configWatch.srcHtml, ['markup']);
});
