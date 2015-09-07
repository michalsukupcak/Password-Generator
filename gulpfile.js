var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('default', function () {
    return gulp.src('./elements/elements.html')
        .pipe(vulcanize())
        .pipe(gulp.dest('./build'));
});