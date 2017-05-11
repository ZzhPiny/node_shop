const fs = require('fs');
const path = require('path');

module.exports = function() {
    var count = 0;
    return function(req, res, next) {
        if(req.url.indexOf('api') === -1){
            count++;
            console.log(req.url)
            fs.writeFile(path.resolve('./visitcount.txt'), count, 'utf-8', function(err) {
                if( err )
                    return console.log(err)
                console.log(count)
            })
        }
        next();
    }
}