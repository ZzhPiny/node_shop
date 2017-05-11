const _ = require('underscore');
const db = require('../../database/model_product');
const Product = db.Product;
var getClassify = require('./getClassify');

/**
 * [getProduct description]
 * @param  {[type]}   option   [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
function getProduct( option, callback ) {
    if( !callback && typeof option == "function" ) {
        callback = option;
        option = {};
    }
    
    getClassify(function( classifyData ) {
        var queryProduct = Product.find(_.extend(option, {})); //hotProduct: true
        queryProduct.then( productData => {
            var resData = [];
            classifyData.sort((item1, item2) => {
                return item1.classSort - item2.classSort;
            })
            classifyData.map(classItem => {
                var classItemForRes = {
                    classId: classItem._id,
                    className: classItem.className,
                    classInfo: classItem.classInfo,
                    productList: []
                };
                productData.map(productItem => {
                    // console.log(productItem.productClass, classItem._id)
                    if(productItem.productClass != classItem._id) return ;
                    var productItemForRes = {
                        productId: productItem._id,
                        productName: productItem.productName,
                        productInfo: productItem.productInfo,
                        productImg: productItem.mainImg
                    }
                    classItemForRes.productList.push(productItemForRes);
                });
                resData.push(classItemForRes);
            });
            callback(resData);
        });
    })
}

module.exports = getProduct;