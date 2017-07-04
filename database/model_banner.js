/**
 * Create By Piny
 * 2017.07.03
 */
const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    name: String,
    path: String,
    sort: Number,
    display: {
        type: Boolean,
        default: true
    }
});

const Banner = mongoose.model('Banner', BannerSchema);

var BannerFind = Banner.find.bind(Banner);

Banner.find = queryCondition => {
    queryCondition = queryCondition || {};
    // if(queryCondition.display)
    return BannerFind(Object.assign(queryCondition, {display: true}));
}

module.exports = Banner;