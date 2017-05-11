define([
    'module/navigation',
    'module/pagination',
    'module/common',
    'tpl/tpl-product-list2'
], function(initNav, pagination, common, tplProductList) {
    (function() {
        initNav();
        var hashObj = common.getHashParam();
        var productType = hashObj.type;
        initProductList(hashObj.type, hashObj.startPos);
        $('#classify_' + (productType || 'all')).children('a').addClass('active');
        window.addEventListener('hashchange', function() {
            var hashObj = common.getHashParam();
            if(hashObj.type == productType) return;
            productType = hashObj.type;
            initProductList(hashObj.type, hashObj.startPos)
            $('.met-column-nav-ul .dropdown a').removeClass('active');
            $('#classify_' + (productType || 'all')).children('a').addClass('active');
        })
    })();

    function initProductList(productType, num, length, isNotPage) {
        num = num || 0;
        length = length || 8;
        $.get('/api/product/getProductListByType', {
            type: productType == undefined || productType == 'all' ? '' : productType,
            startPos: num * length,
            length: length
        }).then(function(res) {
            if(typeof res != "object") res = JOSN.parse(res);
            if (res.code != 0) return;
            productList = _.template(tplProductList);
            $("#product-group").empty();
            res.data.productList.map(item => {
                $("#product-group").append(productList({
                    productId: item._id,
                    productPath: item.mainImg,
                    productName: item.productName
                }));
            })
            if (isNotPage) return;
            var totalPages = Math.ceil(res.data.totalCount / length);
            var currentPage = + num + 1;
            pagination({
                container: '#pagination',
                currentPage: currentPage > totalPages ? 1 : currentPage,
                totalPages: totalPages,
                onPageChange: function(number) {
                    window.location.hash = common.buildParam({type: productType, startPos: number - 1 })
                    initProductList(productType, number - 1, length, true);
                }
            })
        }).catch(function(err) {
            console.error(err)
        })
    }
})