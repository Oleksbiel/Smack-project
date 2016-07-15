'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat'),
	jsConcat1 = './bower_components/owl-carousel/owl-carousel/owl.carousel.min.js',
 	jsConcat2 = './bower_components/circliful/js/circliful.min.js',
 	jsConcat3 = './bower_components/countUp.js/dist/countUp.min.js',
 	jsConcat4 = './bower_components/mg-space/src/jquery.mg-space.js',
 	jsConcat5 = './markup/js/anchor-top.js',
 	jsConcat6 = './markup/js/anchor-bottom.js';


 //// Tasks


gulp.task('sass', function () {
  return gulp.src('./markup/scss/all.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./production/css'));
});
 

gulp.task('sass:watch', function () {
  gulp.watch('./markup/scss/**/*.scss', ['sass']);
});

gulp.task('default', () =>
	gulp.src('markup/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('production/images'))
);

gulp.task('jquery', () =>
	gulp.src('./bower_components/jquery/dist/jquery.js')
		.pipe(gulp.dest('markup/js/'))
);

 
gulp.task('scripts', function() {
  return gulp.src([jsConcat1, jsConcat2, jsConcat3, jsConcat4, jsConcat5 , jsConcat6])
    .pipe(concat('allInteractive.js'))
    .pipe(gulp.dest('markup/js/'));
});