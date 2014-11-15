
var gulp = require('gulp');
var bower = require('gulp-bower-files');
var concat = require('gulp-concat');
var gulpFilter = require('gulp-filter');
var rename = require('gulp-rename');

var publishdir = 'public';

var dist = {
  all: [publishdir + '/**/*'],
  css: publishdir + '/static/',
  js: publishdir + '/static/',
  vendor: publishdir + '/static/'
};

gulp.task('bower', function() {
  var jsFilter = gulpFilter('**/*.js')
  var cssFilter = gulpFilter('**/*.css')
  return bower()
    .pipe(jsFilter)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(dist.js))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(dist.css))
    .pipe(cssFilter.restore())
    .pipe(rename(function(path) {
      if (~path.dirname.indexOf('fonts')) {
        path.dirname = '/fonts'
      }
    }))
    .pipe(gulp.dest(dist.vendor))
});


gulp.task('default', ['bower']);