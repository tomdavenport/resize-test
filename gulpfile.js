// Load plugins

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify');
clean = require('gulp-clean');
server = lr();

// Run everything at once

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});

// auto-prefix and minify CSS

gulp.task('styles', function() {
        return gulp.src('./css/*.css')
            .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(minifyCSS())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('dist/css'))
            .pipe(notify({
                message: 'CSS polishing complete'
            }));
    };

    // Minify JavaScript

    gulp.task('scripts', function() {
        return gulp.src('./js/*.js')
            .pipe(uglify())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('dist/js'))
            .pipe(notify({
                message: 'JavaScript minified'
            }));
    });

    // Minify images


    gulp.task('images', function() {
        return gulp.src('./img/*')
            .pipe(cache(imagemin({
                optimizationLevel: 3,
                progressive: true,
                interlaced: true
            })))
            .pipe(gulp.dest('dist/img'))
            .pipe(notify({
                message: 'Images task complete'
            }));
    });

    // Clean destination folders

    gulp.task('clean', function() {
        return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], {
            read: false
        })
            .pipe(clean());
    });