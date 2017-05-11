const router = require('express').Router();
var getClassify = require('./module/getClassify');

router.get('/', (req, res) => {
    var productId = req.query.productId;
    getClassify(function(classifyData) {
        res.render('showproduct', {
            title: '产品' + productId,
            page: "product",
            nav: classifyData,
            productInfo: {
                productName: "发动机",
                description: `发动机的放大器或驱动器占用极小空间，
                              却能带来强劲、极具艺术魅力的声效。当您将 Aston Martin 接通电源，声学透镜会慢慢进入您的视线。
                              这些令人愉快的小惊喜最初可能看起来不可思议，但很快就会融入您的愉悦享受中。<br />
                              如今，Bang & Olufsen 的 15 件产品已成为其永久馆藏设计。
                              这些精湛的产品承载着博物馆对于产品质量和必须具有时代意义的严格标准，成就了 20 世纪。`,
                size: "M1156",
                price: "￥449"
            }
        })
    })
})

module.exports = router;