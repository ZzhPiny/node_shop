import React, { Component } from 'react';
import { Link } from 'react-router';

import { Layout, Menu, Dropdown, Icon } from 'antd/dist/antd';
const { Header } = Layout;

export class User extends Component {
    constructor() {
        super();
    }

    render() {
        var userStyle = {
            position: 'absolute',
            top: '0',
            right: '0',
            padding: '0 20px'

        }
        var userImg = {
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            border: '1px solid #e1e1e1',
            margin: '12px',
            float: 'left',
            background: 'url(/upload/userImg/user.png)',
            backgroundSize: 'contain'
        }

        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">个人资料</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="http://www.taobao.com/">个人设置</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">退出</Menu.Item>
            </Menu>
        );

        return (
            <div style={userStyle}>
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                        <div style={userImg}></div>
                    </a>
                </Dropdown>
                <div style={{float: 'left', margin: '0 12px'}}>Piny</div>
            </div>
        )
    }
}

export default class extends Component {
    contructor() {
        // super();
    }

    render() {

        return (
            <Header className="header">
                <div className='title'>
                    <div style={{float: 'left', height: "100%", padding: '5px', boxSizing: 'border-box'}}>
                        <img height="100%" src="/images/logo.png" />
                    </div>
                    <div style={{float: 'left'}}>
                        江西艾麦达后台管理系统
                    </div>
                </div>
                <User />
            </Header>
        )
    }
}