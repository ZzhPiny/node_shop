/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
const { Footer } = Layout;

export default class extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Footer className="footer text-center" style={{padding: '0'}}>
                <div className="footer-nav" style={{padding: '30px 0', borderBottom: '1px solid #f0f2f5'}}>
                    <div className="container">
                        <Row type="flex" justify="left" gutter={20}>
                            <Col span={4}>
                                <h3>友情链接</h3>
                                1px
                            </Col>
                            <Col span={4}>
                                <h3>技术支持</h3>
                                1px
                            </Col>
                            <Col span={4}>
                                <h3>博客动态</h3>
                                1px
                            </Col>
                            <Col span={4}>
                                <h3>关于公司</h3>
                                1px
                            </Col>
                            <Col span={6} offset={1}>
                                1px
                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={{padding: '30px 0'}}>
                    <div className="container">
                        <p>科技公司 版权所有 &copy; 2017 赣ICP备8888888</p>
                        <p>Powered By Piny</p>
                    </div>
                </div>
            </Footer>
        )
    }
}