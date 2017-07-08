import React from 'react';

import { Link } from 'react-router';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Nav extends React.Component {
    state = {
        current: 'item_000',
        openKeys: [],
        list: [{
            name: "数据统计",
            icon: 'mail',
            type: 'member',
            link: '/',
            children: []
        }, {
            name: '页面设置',
            icon: 'mail',
            type: 'group',
            link: '/admin/pagesetting',
            children: [{
                name: '整站设置',
                link: '/pagesetting/fullstation',
            }, {
                name: '网站首页',
                link: '/pagesetting/home',
            }, {
                name: '公司简介',
                link: '/pagesetting/company',
            }, {
                name: '产品展厅',
                link: '/pagesetting/production',
            }, {
                name: '新闻中心',
                link: '/pagesetting/news',
            }, {
                name: '售后服务',
                link: '/pagesetting/service',
            }, {
                name: '联系我们',
                link: '/pagesetting/contact',
            },]
        }, {
            name: '商品管理',
            icon: 'mail',
            type: 'group',
            link: '/admin',
            children: [{
                name: '分类列表',
                link: '/production/list',
            }, {
                name: '商品列表',
                link: '/production/classify',
            }, {
                name: '商品推荐',
                link: '/production/recommend',
            }, {
                name: '商品',
                link: '/production',
            },]
        }, {
            name: '用户管理',
            icon: 'appstore',
            type: 'group',
            children: [{
                name: '用户管理'
            }, {
                name: '公司简介'
            }, {
                name: '产品展厅'
            }, {
                name: '新闻中心'
            }, {
                name: '售后服务'
            }, {
                name: '联系我们'
            },]
        }, {
            name: '订单管理',
            icon: 'setting',
            type: 'group',
            children: [{
                name: '待支付订单'
            }, {
                name: '待发货订单'
            }, {
                name: '待收货订单'
            }, {
                name: '待评价订单'
            },]
        }, {
            name: '个人中心',
            icon: 'setting',
            type: 'group',
            children: [{
                name: '个人资料'
            }, {
                name: '系统设置'
            },]
        }]
    }
    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
    }
    onOpenChange = (openKeys) => {
        console.log(openKeys);
        // openKeys 为菜单设置的key值
        const state = this.state;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }
    getAncestorKeys = (key) => {
        const map = {
            sub_3: ['item_3_0'],
        };
        return map[key] || [];
    }
    render() {
        var subMenuList = this.state.list.map((item, index, arr) => item.type == 'group' ? (
            <SubMenu key={"sub_" + index} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
            {item.children.map((child, childIndex) => (<Menu.Item key={'item_' + index + '_' + childIndex}><Link to={'/admin' + child.link}>{child.name}</Link></Menu.Item>))}
            </SubMenu> ) : (
                <Menu.Item key={'item_' + index}><Link to={'/admin' + item.link}><Icon type={item.icon} />{item.name}</Link></Menu.Item>
            )
        )
        return (
            <Menu
                theme="light"
                mode="inline"
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                style={{ width: 240 }}
                onOpenChange={this.onOpenChange}
                onClick={this.handleClick}
            >{ subMenuList }</Menu>
        );
    }
}
