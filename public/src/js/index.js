define([
    'module/navigation', 'swiper', 'module/pagination', 'tpl/tpl-classify-list', 'tpl/tpl-product-list', 'bootstrap'
], function(initNav, Swiper, pagination, classifyTpl, productTpl) {
    (function(){
        fetch('/api/product/getIndexProduct', {
            method: 'GET'
        }).then(res => {
            console.log(res);
            return res.json();
        }).then(resBlob => {
            console.log(resBlob)
        });
        initNav();
        initBanner();
        initProduct();
    })();

    function initClassNav() {
        fetch('/api/product/getClassifyList').then(res => {
            console.log(res);
        })
        $.get("/api/product/getClassifyList").done(function(res) {
            if (res.code != 0)
                return;
            var tpl = function(id = "", name = "") {
                return `<li class="list-group-item classify-item">
                    <a data-id="${id}" href="javascript:;">
                        <span>${name}</span>
                    </a>
                </li>`
            }
            res.data.map(item => {
                $('.classify-group').append(tpl(item._id, item.name))
            });
            initProductList(res.data[0].id);
        });
    }

    function initProductList(productType, num, length, isNotPage) {
        num = num || 0;
        length = length || 9;
        $.get('/api/product/getProductListByType', {
            type: productType,
            startPos: num * length,
            length: length
        }).done(function(res) {
            if (res.code != 0)
                return;
            var tpl = function(path = "", name = "") {
                return `<li class="col-lg-4 product-item">
                                <div class="product-img">
                                    <img src="${path}" alt="${name}">
                                </div>
                                <a class="product-link" href="javascript:;">${name}</a>
                            </li>`;
            }
            $(".product-group").empty();
            res.data.productList.map(item => {
                $(".product-group").append(tpl(item.path, item.name));
            })

            if (isNotPage)
                return;
            var totalPage = Math.floor(res.data.totalCount / length);
            pagination({
                container: '#pagination',
                totalPages: res.data.totalCount % length == 0
                    ? totalPage
                    : totalPage + 1,
                onPageChange: function(number) {
                    initProductList(productType, number - 1, length, true);
                }
            })
        })
    }

    function initBanner() {
        var mySwiper = new Swiper('#swiper-banner', {
            autoplay: 3000,
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
            autoplayDisableOnInteraction : false,
        });
    }

    function initProduct() {
        var swiperWidth = document.body.clientWidth;
        $.get("/api/product/getIndexProduct").done(function(res) {
            if(!_.isObject(res)) res = JSON.parse(res);
            if(res.code != 0) return ;
            var classifyHtml = "";
            classifyTpl = _.template(classifyTpl);
            productTpl = _.template(productTpl);
            res.data.map(function(classItem) {
                var productHtml = "";
                classItem.productList.map(function(productItem) {
                    productHtml += productTpl(productItem);
                });
                classItem.productList = productHtml;
                classifyHtml += classifyTpl(classItem);
            });
            $(".product-container").append(classifyHtml);
            var showCount = 3;
            if(swiperWidth > 960){
                 showCount = 3;
            } else if(swiperWidth > 768) {
                showCount = 2;
            } else {
                showCount = 1;
            }
            var option = {
                autoplay: false,
                loop: true,
                slidesPerView: showCount,
                slidesPerGroup: 1, //showCount,
                nextButton: "nextButton",
                prevButton: "prevButton"
            }
            res.data.map(function(item) {
                new Swiper("#product-swiper_" + item.classId, option);
            })
        })
    }
})
