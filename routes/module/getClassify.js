const _ = require('underscore');
const db = require('../../database/model_product');
const Classify = db.Classify;


/**
 * [getClassify description]
 * @param  {[type]}   option   [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function getClassify( option, callback ) {
    if( !callback && typeof option == "function") {
        callback = option;
        option = {};
    }

    var query = Classify.find( _.extend(option, {display: true}) );
    query.then( data => {
        data.sort((item1, item2) => {
            return item1.classSort - item2.classSort;
        })
        console.log(data)
        callback( data )
    }).catch( err => {
        callback( err )
    })
}

module.exports = getClassify;
