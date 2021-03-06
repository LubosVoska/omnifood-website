var gulp        = require('gulp');
var bs = require('browser-sync').create();

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: ""
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./index.html").on('change', bs.reload);
    gulp.watch("./resources/css/*.css").on('change', bs.reload);
     gulp.watch("./resources/js/*.js").on('change', bs.reload);
});
