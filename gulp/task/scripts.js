var gulp = require('gulp'),
webpack = require('webpack');

var script = gulp.task('scripts', function(callback){
  webpack(require('../../webpack.config.js'), function(err, stats){
    if(err) console.log(err.toString());
    console.log(stats.toString());
    callback();
  });
});