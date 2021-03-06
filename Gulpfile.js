const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
 
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
 
gulp.task('css', function () {
    const processors = [
        autoprefixer,
        cssnano
    ];
    return gulp.src('./partials/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./styles'));
});