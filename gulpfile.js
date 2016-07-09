'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
  return gulp.src('./markup/scss/all.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./production/css'));
});
 

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', () =>
	gulp.src('markup/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('production/images'))
);