// Load plugins

var gulp = require('gulp');
    resize = require('gulp-image-resize');
    compress = require('gulp-imagemin');
	clean = require('gulp-clean');
	server = lr();

// Run everything at once

gulp.task('default', function() {
    gulp.start('resize', 'compress');
});

// Resize

gulp.task('resize', function () {
  gulp.src('img/*')
    .pipe(imageResize({ 
      width : 100,
      height : 100,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('dist'));
});

 // Minify images

    gulp.task('compress', function() {
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

 //   gulp.task('clean', function() {
 //       return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], {
 //           read: false
 //		})
 //           .pipe(clean());
 //   });