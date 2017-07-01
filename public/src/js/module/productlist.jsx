/**
 * Create By Piny 
 * 2017/06/20
 */

import React, { Component } from 'react';

import {Row, Col, Menu, Icon} from 'antd';

export class ProductNav extends Component {
    render() {
        return (
            <div className="product-nav">
                <header style={{display: 'none'}}>产品分类</header>
                <Menu style={{
                    border: 'none',
                    background: 'transparent',
                    display: 'flex',
                    justifyContent: 'center'
                }} mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <div style={{

                        }}>
                            <span>调压器系列</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <div>
                            <span>国外调压器系列</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <div>
                            <span>国外调压器系列</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <div>
                            <span>国外调压器系列</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <div>
                            <span>国外调压器系列</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <div>
                            <span>国外调压器系列</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <div>
                            <span>国外调压器系列</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <div>
                            <span>国外调压器系列</span>
                        </div>
                    </Menu.Item>

                </Menu>
            </div>
        )
    }
}

export class ProductList extends Component {
    render() {
        return (
            <div className="product-list">
                <Row type="flex" justify="left" gutter={10}>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="product-item" >
                            <div className="product-item-image" >
                                <img src='/upload/images/banner_1.jpg'/>
                            </div>
                            <div className="product-item-name">Product Name</div>
                        </div>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default class Product extends Component {


    render() {
        return (
            <div className="container product row-body">
                <header >
                    科技产品
                </header>
                <p className="describe">
                    我们致力于让科技改善人们的生活
                </p>
                <ProductNav />
                <ProductList />
            </div>
            
        )
    }
}