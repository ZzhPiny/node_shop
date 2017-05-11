const _ = require('underscore');
const winston = require('winston');
const fs = require('fs');
const path = require('path');
const logger = require('./showlog');

/**a
 * [middleware description]
 * @method middleware
 * @param  Object   opts [description]
 * @return {[type]}        [description]
 */

function middleware(opts){

    // opts = {
        
    // }

    return function(req, res, next) {
        _.extend(req.query, req.body);
        _.extend(req.query, req.params);
        var showLog = logger(req);
        showLog.begin();


        var send = res.send;
        var render = res.render;
        res.render = function(page, data, callback) {
            // if(_.isFunction(data)) {
            //     callback = data;
            //     data = {};
            // }
            // if(!_.isFunction(callback)) {
            //     callback = function() {};
            // }
            // data = _.extend(data, {root: ""})
            render.call(res, page, data);
            showLog.end(data);
        };
        res.sendJSON = function(data) {
            if ( data instanceof Error){
                var e = data;
                data = {
                    code: -1,
                    message: e.stack || e.message || e.toString,
                    error: e
                };
            } else {
                // if(data.code)
                data = {
                    code: 0,
                    message: "",
                    data: data || ""
                }
            }
            send.call(res, data);
            res.end();
            showLog.end(data);

        };

        next();
    };
}

function verifUser(req, res) {
    var cookies = req.cookies;
    // return false;
}

function showLog(req) {

    return {
        begin: function() {

        },
        end: function(data) {

        }
    }
}

function showBeginLog(req) {
    req.startTime = Date.now();
    req._url = req.url;

    logger("info").info(req.ip, req.method, req.headers['user-agent']);

    winston.info('__________________________ Request ' + req._url + ' Start __________________________');
    // winston.info('url: ', req._url);
    winston.info('Method: ', req.method);
    // winston.info('User-Agent: ', req.headers['user-agent']);
    winston.info('requestData: ', JSON.stringify(req.query));
}

function showEndLog(req, data) {
    winston.info('responseData: ', JSON.stringify(data));
    winston.info('cost:', (Date.now() - req.startTime) + 'ms');
    winston.info('__________________________ Request ' + req._url + ' End __________________________');
}


module.exports = middleware;
