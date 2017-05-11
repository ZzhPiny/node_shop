var log4js = require('log4js');
var config = require('../config/log4js.config');

log4js.configure(config);

module.exports = function(name) {
    var name = name || 'logger';
    var logger = log4js.getLogger(name);
    logger.setLevel('INFO');
    return logger;
};
