import React from 'react';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Nav extends React.Component {
    state = {
        current: '1',
        openKeys: [],
    }
    handleClick = (e) => {
        console.log('Clicked: ', e);
        this.setState({ current: e.key });
    }
    onOpenChange = (openKeys) => {
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
            sub3: ['sub2'],
        };
        return map[key] || [];
    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                openKeys={this.state.openKeys}
                selectedKeys={[this.state.current]}
                style={{ width: 240 }}
                onOpenChange={this.onOpenChange}
                onClick={this.handleClick}
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>商品管理</span></span>}>
                    <Menu.Item key="1">分类列表</Menu.Item>
                    <Menu.Item key="2">商品列表</Menu.Item>
                    <Menu.Item key="3">商品推荐</Menu.Item>
                    <Menu.Item key="4">商品</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>用户管理</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>订单管理</span></span>}>
                    <Menu.Item key="9">待支付订单</Menu.Item>
                    <Menu.Item key="10">待发货订单</Menu.Item>
                    <Menu.Item key="11">待收货订单</Menu.Item>
                    <Menu.Item key="12">待评价订单</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" title={<span><Icon type="setting" /><span>个人中心</span></span>}>
                    <Menu.Item key="13">个人资料</Menu.Item>
                    <Menu.Item key="14">系统设置</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}
