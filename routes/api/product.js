const express = require('express');
const router = express.Router();
const _ = require('underscore');

const db = require('../../database/model_product');
const Product = db.Product;

const getProduct = require('../module/getProduct');
const getClassify = require('../module/getClassify');

router.get('/getIndexProduct', (req, res) => {
    getProduct(function(data) {
        res.sendJSON(data);
    })
});

router.get('/getClassifyList', (req, res) => {
    getClassify(function(data) {
        res.sendJSON(data);
    })
});

router.get('/getProductListByType', (req, res) => {
    var option = {};
    if(!!req.query.type) {
        option.productClass = req.query.type;
    }
    var startPos = parseInt(req.query.startPos);
    var length = parseInt(req.query.length);

    var query = Product.find( option );
    query.then(data => {
        res.sendJSON({
            productList: data.slice(startPos, startPos + length),
            totalCount: data.length
        });
    }).catch(err => {
        // console.log(err);
        res.sendJSON(err);
    })
});

module.exports = router;
