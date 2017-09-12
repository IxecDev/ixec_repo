const gulp = require('gulp');
const sass = require('gulp-css-scss');

gulp.task('scss-css', () => {
    return gulp.src('src/assets/styles_sass/*')
        .pipe(cssScss())
        .pipe(gulp.dest('src/assets/styles'));
});

/*gulp.task('angular4-build'), () => {
    return gulp.src('./')
        .pipe(ngBuild());
});*/

gulp.task('default', ['scss-css']);
