
var tpl = require('../tpl/index.html');
var _ = require('underscore');
var $ = require('jquery');
var bootbox = require('bootbox');
var _opts;

var render = function(opts){
    _opts = opts;
    var tplData = {
        title: "Piny",
        root: "#!/index",
    };
    $(_opts.container).empty().append(tpl(tplData));
    // initPage();
    // initBtn();
};


function initPage(){
    $(".nav-list-topbar li").eq(0).addClass("active");
    $("#addClassify").on("click", function(){
        bootbox.dialog({
            title: "添加分类",
            message: "bootbox",
            callback: function(){

            }
        });
    });
}

function initBtn(){
    $(".nav-list-topbar li").on({
        "click": function(){
            $(this).addClass("active");
        },
        "mouseover": function(){
            $(this).addClass("active");
        },
        "mouseout": function(){
            $(this).removeClass("active");
            $(".nav-list-topbar li").eq(0).addClass("active");
        }
    });
}


module.exports = {
    render: render,
};
