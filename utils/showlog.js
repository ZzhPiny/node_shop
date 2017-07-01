const winston = require('winston');
const logger = require('./logger');

winston.cli();

module.exports = function(req) {
    var url = req.url;
    var ip = req.ip;
    var startTime = Date.now();
    var userAgent = req.headers['user-agent'];
    var method = req.method;
    var query = req.query;

    return function(data) {
        logger(ip).info(method, url, userAgent);
        // Request
        winston.info('__________________________ Request ' + url + ' Start __________________________');
        winston.info('url: ', url);
        winston.info('Method: ', method);
        winston.info('User-Agent: ', userAgent);
        winston.info('requestData: ', JSON.stringify(query));
        // Response
        winston.info('responseData: ', JSON.stringify(data));
        winston.info('cost:', (Date.now() - startTime) + 'ms');
        winston.info('__________________________ Request ' + url + ' End __________________________');
    }
}
