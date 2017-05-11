const mongoose = require("mongoose");
const bulebird = require('bluebird');

var count = 0;

function databaseConnect(config) {
    count++;
    var db = mongoose.connection;
    mongoose.Promise = bulebird;
    var mongoUrl = `mongodb://${config.url}:${config.port}/${config.name}`;
    mongoose.connect(mongoUrl);

    db.on('error', (err) => {
        console.error('Connection Error:', err);
        if(count > 10) 
            return console.log('There is an error');
    });

    db.once('open', () => {
        console.log('Mongodb Connect Success!!!');
    });
    return db;
}

module.exports = databaseConnect;