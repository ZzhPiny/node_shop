const gulp = require('gulp');
const glob = require('glob');
const minifyCss = require('gulp-minify-css');
const htmlreplace = require('gulp-html-replace');
const clean = require('gulp-clean');
const watch = require('gulp-watch');
const Path = require('path');
const webpack = require('webpack');
const gutil = require('gulp-util');
const shell = require('gulp-shell');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var domain = 'http://localhost:3000';

gulp.task('css', () => {
    var path = ['public/src/css/**/*.css', 'public/src/css/**/*.scss'];
    return gulp.src(path)
        // .pipe(watch(path, {}, logger))
        // .pipe(rev())
        .pipe(watch(path))
        .pipe(minifyCss())
        .pipe(gulp.dest('public/dist/css'))
        // .pipe( rev.manifest() )
        // .pipe( gulp.dest( 'public/rev/css' ) );
});

// gulp.task('scripts', () => {
//     return gulp.src('public/src/js/*.js')
//         .pipe( rev.manifest() )
//         .pipe( gulp.dest( 'public/rev/js' ) );
// });

gulp.task('component', () => {
    var path = 'public/src/js_components/**/*';
    return gulp.src(path)
        .pipe(gulp.dest('public/dist/js/components/'))
})

gulp.task('rev', ['css'], () => {
    // gulp.src(['public/rev/css/*.json', 'public/src/html/*.html'])
    //     // .pipe(watch(path, {}, logger))
    //     .pipe(revCollector({
    //         // replaceReved: true,
    //         dirReplacements: {
    //             '/css/': domain + '/dist/css/',
    //         }
    //     }))
    //     .pipe(gulp.dest('public/dist/html'));
});

gulp.task('images', (cb) => {
    var path = [
        'public/src/images/**/*.jpg',
        'public/src/images/**/*.png',
        'public/src/images/**/*.gif',
        'public/src/images/**/*.jpeg'
    ];
    return gulp.src(path)
        .pipe(watch(path))
        .pipe(gulp.dest('public/dist/images'))
    cb();
});

gulp.task('fonts', (cb) => {
    // var path = [
    //     'public/src/js_components/**/*.eot',
    //     'public/src/js_components/**/*.svg',
    //     'public/src/js_components/**/*.ttf',
    //     'public/src/js_components/**/*.woff',
    //     'public/src/js_components/**/*.woff2',
    // ]
    // return gulp.src(path)
    //     .pipe(gulp.dest('public/dist/fonts'));
    var path = ['public/src/fonts/**/*'];
    return gulp.src(path)
        .pipe(gulp.dest('public/dist/fonts'));
});

gulp.task('html', (cb) => {
    var path = 'public/src/html/**/*';
    return gulp.src(path)
        .pipe(watch(path))
        .pipe(gulp.dest('public/dist/html'))
});

gulp.task('webpack', (cb) => {
    var config = require('./webpack.config');
    webpack(config, function(err, status){
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", status.toString({}));

    });
    cb();
});


gulp.task("express", shell.task([
    'supervisor -i public -w routes,app.js,utils,database,config -- ./bin/www --dev'
    // 'supervisor -i public -w routes,app.js,utils,database,config -- ./bin/www --dev NODE_ENV=development '
]));

gulp.task('clean', (cb) => {
    gulp.src(['public/dist', 'views/*']) //'public/rev',
        .pipe(clean());
    cb();
})

gulp.task('release', ['css', 'images', 'fonts', 'html', 'component', 'images', 'webpack'], cb => {
    cb();
})

gulp.task('run', ['css', 'images', 'fonts', 'html', 'component', 'express'], cb => {
    cb();
})

gulp.task('default', ['css', 'images', 'fonts', 'html', 'component', 'express'], (cb) => {
    cb();
});
