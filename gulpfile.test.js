const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const shrink = require('gulp-cssshrink');
const webpack = require('gulp-webpack');
const qn = require('gulp-qn');
// MD5戳
const rev = require('gulp-rev-qn');
const revCollector = require('gulp-rev-collector');
const runSequence = require('run-sequence');
const config = require('./webpack.config');
const shell = require('gulp-shell');
const qiniu_options = {
  accessKey: 'xxx',
  secretKey: 'xxx',
  bucket: 'xxx',
  domain: 'http://xxx.com'
};
gulp.task('publish-js', function () {
  return gulp.src(['./build/js/*.js'])
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest('./build/js'))
    .pipe(qn({
      qiniu: qiniu_options,
      prefix: 'js'
    }))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./build/rev/js'));
});
gulp.task('publish-font-img', function () {
  return gulp.src(['./build/js/*.svg','./build/js/*.gif','./build/js/*.woff2','./build/js/*.ttf','./build/js/*.eot','./build/js/*.woff'])
    .pipe(qn({
      qiniu: qiniu_options,
      prefix: 'js'
    }));
});
gulp.task('publish-css', function () {
  return gulp.src(['./build/js/*.css'])
    .pipe(rev())
    .pipe(gulp.dest('./build/js'))
    .pipe(qn({
      qiniu: qiniu_options,
      prefix: 'css'
    }))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./build/rev/css'));
});
gulp.task('publish-html', function () {
  return gulp.src(['./build/rev/**/*.json', './build/views/*.html'])
    .pipe(revCollector({
      dirReplacements: {
        '/js/': ''
      }
    }))
    .pipe(gulp.dest('./build/views'));
});
gulp.task('default',function(callback){
  runSequence(
    ['publish-css','publish-js','publish-font-img'],
    'publish-html',
    callback);
});
