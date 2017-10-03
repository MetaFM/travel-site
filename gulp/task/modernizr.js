var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

/* test browser of 100 of features ex. flexbox svg css anim etc... */
gulp.task('modernizr', function(){
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
  .pipe(modernizr({
    "options": [
      "setClasses"
    ]
  }))
  .pipe(gulp.dest('./app/temp/scripts'));
});
