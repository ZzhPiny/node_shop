const db = require('./model_product');
const Product = db.Product;
const Classify = db.Classify;

var product = new Product({
    name: '调压器',
    class: '583ebcae65ba53361a56a2c0',
    path: '/upload/image/banner_1.jpg',
    no: 1
})
// for(var i = 0; i < 100; i++) {
    setTimeout(() => {
        product.save();
    }, 1000);
// }
// console.log(product)
