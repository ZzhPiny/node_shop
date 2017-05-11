var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var argv = require('yargs').argv;

// 连接数据库
var dbConnect = require('./database/db_connect');
var dbConfig = require('./config/db.config');
var db = dbConnect(dbConfig);

/**
 * 请求中间件 
 * @middleware 输出日志文件 打印日志；
 * @verifyLogging  验证前台是否登录；
 * @verifyAdminLoggging 验证管理后台是否登录
 * @visitCount 请求计数
 */

var middleware = require('./utils/middleware');
var verifyLogging = require('./utils/login');
var verifyAdminLogging = require('./utils/adminlogin');
var setVisitCount = require('./utils/visitcount');
/** 
 * 路由控制
 */
var router = require('./routes/router');

/**
 * 前端构建工具 打包压缩
 * webpack
 */
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public/dist/html'));
app.engine("html", ejs.renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/dist')));
app.use('/upload', express.static(path.join(__dirname, 'upload')));

if (argv.dev) {
    var compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: true,
        stats: {
            warnings: false,
            colors: true
        },
        hot: true
    }));
    app.use(webpackHotMiddleware(compiler))
}
app.use(setVisitCount());
app.use(middleware());
app.use(verifyLogging());
app.use(verifyAdminLogging());

app.use(router);

// error handlers

// development error handler
// will print stacktrace
if (argv.dev) {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;