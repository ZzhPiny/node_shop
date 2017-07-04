/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header } = Layout;

import '../../css/header.scss';

export default class extends Component {
    constructor() {
        super();
    }

    state = {
        titleHeight: 100,
        navHeight: 64,
    }

    fixedTop() {
        
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.scrollTop < 164;
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.handler);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handler.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handler);
    }

    handler(err) {
        var offset = this.state.titleHeight - window.pageYOffset < 0 ? 0 : this.state.titleHeight - window.pageYOffset;
        this.refs.title.style.height = offset + 'px';
        this.refs.nav.style.marginTop = offset + 'px';
        this.refs.logo.style.paddingLeft = 100 + offset + 'px';
        this.refs.logo.style.width = 220 + offset + 'px';
        this.refs.logo.style.height = 64 + 36 / 100 * offset + 'px';
        console.log(this.refs.companyName.style.transform)
        this.refs.companyName.style.transform = 'scale(' + offset / 100 + ')';
        this.refs.companyName.style.marginTop = (offset/2 - 50) + 'px';
    }

    render() {
        return (
            <Header ref='header' className="header" >
                <div ref="title" className="title" >
                    <div ref='logo' className="logo">
                        <img src="/images/logo.png" style={{height: '100%'}}/>                        
                    </div>
                    <div ref="companyName" className="company-name">
                        艾麦达科技有限公司
                    </div>
                </div>
                <div ref='nav' className="nav" >
                    <div className="logo"></div>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{ 
                        lineHeight: '64px',
                    }} >
                        <Menu.Item key="1"><a href="/">网站首页</a></Menu.Item>
                        <Menu.Item key="2"><a href="/">公司简介</a></Menu.Item>
                        <Menu.Item key="3"><a href="/">产品展厅</a></Menu.Item>
                        <Menu.Item key="4"><a href="/">新闻中心</a></Menu.Item>
                        <Menu.Item key="5"><a href="/">售后服务</a></Menu.Item>
                        <Menu.Item key="6"><a href="/">在线留言</a></Menu.Item>
                        <Menu.Item key="7"><a href="/ ">联系我们</a></Menu.Item>
                    </Menu>
                </div>
            </Header>
        )
    }
}

// <Menu.Item key="8"></Menu.Item>
