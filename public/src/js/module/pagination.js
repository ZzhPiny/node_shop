define([
    'jqPaginator'
], function() {
    var _opts;
    /*
        {
        container: container,
        totalPages: totalPages,
        visiblePages: visiblePages,
        currentPage: currentPage,
        first: first,
        last: last,
        prev: prev,
        next: next,
        onPageChange: onPageChange
    }
     */
    function paging(opts) {
        _opts = opts;
        $.jqPaginator(_opts.container, {
            totalPages: _opts.totalPages || 1,
            visiblePages: _opts.visiblePages || 10,
            currentPage: _opts.currentPage || 1,
            first: '<li class="first"><a href="javascript:;">' + (_opts.first || "首页") + '</a></li>',
            last: '<li class="last"><a href="javascript:;">' + (_opts.last || "尾页") + '</a></li>',
            prev: '<li class="prev"><a href="javascript:;">' + (_opts.prev || "上一页") + '</a></li>',
            next: '<li class="next"><a href="javascript:;">' + (_opts.next || "下一页") + '</a></li>',
            page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
            onPageChange: function (num, type) {
                if(type == "change")
                    _opts.onPageChange(num);
            }
        });
    }

    return paging;
})
