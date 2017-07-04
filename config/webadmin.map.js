export default const websiteMap = {
    '/': {
        name: '首页',
        path: '/admin',
        children: {
            'pages': {
                name: '页面设置',
                path: '/admin/pagesetting',
                children: {
                    'index': {
                        name: '网站主页',
                        path: ''
                    }
                }
            },
            'member': {
                name: '会员设置',
                path: '/admin/pagesetting',
                children: 
            },
            'setting': {
                name: '个人设置',
                path: '/admin/pagesetting',
                children: 
            }
        }
    }
}