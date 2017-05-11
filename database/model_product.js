// const mongoose = require('./db_connect').mongoose;
// const db = require('./db_connect').db;

const mongoose = require('mongoose');

/**
 * @声明用户数据集合
 * @type {mongoose.Schema}
 */
var ProductSchema = new mongoose.Schema({
    productName: String,
    productClass: String,
    mainImg: String,
    addTime: {
        type: Date,
        default: Date.now()
    },
    newProduct: {
        type: Boolean,
        default: true,
    },
    hotProduct: {
        type: Boolean,
        default: false
    },
    no: {
        type: Number
    },
    display: {
        type: Boolean,
        default: true,
    },
    productInfo: {
        type: String,
        default: "什么都没有留下！"
    }
});

var Product = mongoose.model('Product', ProductSchema);

var ClassifySchema = new mongoose.Schema({
    className: String,
    classInfo: String,
    classSort: Number,
    no: Number,
    display: {
        type: Boolean,
        default: true,
    }
});

var Classify = mongoose.model('Classify', ClassifySchema);

// Class.prototype.save = function() {
//
// }

module.exports = {
    Product: Product,
    Classify: Classify
};
