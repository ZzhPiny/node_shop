#gulp-rev-qn

```
npm install gulp-rev-qn
const rev = require('gulp-rev-qn');
```

请配合gulp-qn这个库一起使用
```
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
```