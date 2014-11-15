
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-minify-css');
var bower = require('gulp-bower-files');
var concat = require('gulp-concat');
var gulpFilter = require('gulp-filter');
var rename = require('gulp-rename');

var src = {
  styl: ['assets/**/*.styl'],
  css: ['assets/**/*.css'],
  coffee: ['assets/**/*.coffee'],
  js: ['assets/**/*.js'],
  bower: ['bower.json', '.bowerrc']
};

src.styles = src.styl.concat(src.css);
src.scripts = src.coffee.concat(src.js);

var publishdir = 'public';

var dist = {
  all: [publishdir + '/**/*'],
  css: publishdir + '/static/',
  js: publishdir + '/static/',
  vendor: publishdir + '/static/'
};

//
// concat *.js to `vendor.js`
// and *.css to `vendor.css`
// rename fonts to `fonts/*.*`
//
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

gulp.task('compress-css', ['css'], function() {
  return gulp.src(dist.css)
    .pipe(cssmin())
    .pipe(gulp.dest(dist.css))
});

gulp.task('compress-js', ['js'], function() {
  return gulp.src(dist.js)
    .pipe(uglify())
    .pipe(gulp.dest(dist.js))
});

gulp.task('compress', ['compress-css', 'compress-js']);

gulp.task('default', ['bower']); // development
gulp.task('build', ['bower', 'compress']); // build for production