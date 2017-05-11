const winston = require('winston');
const logger = require('./logger');
module.exports = function(req) {
    var url = req.url;
    var ip = req.ip;
    var startTime = Date.now();
    var userAgent = req.headers['user-agent'];
    var method = req.method;
    var query = req.query;
    return {
        begin: function() {
            logger(ip).info(method, url, userAgent);
            winston.info('__________________________ Request ' + url + ' Start __________________________');
            // winston.info('url: ', req.url);
            winston.info('Method: ', method);
            // winston.info('User-Agent: ', req.headers['user-agent']);
            winston.info('requestData: ', JSON.stringify(query));
        },
        end: function(data) {
            winston.info('responseData: ', JSON.stringify(data));
            winston.info('cost:', (Date.now() - startTime) + 'ms');
            winston.info('__________________________ Request ' + url + ' End __________________________');
        }
    }
}
