import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import { Link } from 'react-router';



export default class User extends React.Component {
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
