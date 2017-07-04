/**
 * Create By Piny 
 * 2017/06/30
 */

import React, { Component } from 'react';

import {Row, Col, Menu, Icon} from 'antd';

export class NewsList extends Component {
    render() {
        return (
            <div className="news-list">
                <Row type="flex" justify="left" gutter={20}>
                    <Col span={12}>
                        <div className="news-item">
                            <Row type="flex" justify="left">
                                <Col span={6}>
                                    <div className="news-item-image">
                                        <img src='/upload/images/banner_1.jpg'/>
                                    </div>
                                </Col>
                                <Col span={18}>
                                    <div className="news-item-content" >
                                        <p className="news-content-heading">
                                            <a href="/"> Product Name </a>
                                        </p>
                                        <p className="news-content-body">
                                            1234567890 <br />
                                            1234567890 <br />
                                            1234567890 <br />
                                        </p>
                                        <p className="news-content-footer">
                                            <span className="news-content-time">2017-06-06</span>
                                            <span className="news-content-author">author</span>
                                            <span className="news-content-viewcount">
                                                <Icon type="eye" style={{fontSize: '14px', marginRight: '4px'}}/>
                                                9999
                                            </span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="news-item">
                            <Row type="flex" justify="left">
                                <Col span={6}>
                                    <div className="news-item-image">
                                        <img src='/upload/images/banner_1.jpg'/>
                                    </div>
                                </Col>
                                <Col span={18}>
                                    <div className="news-item-content" >
                                        <p className="news-content-heading">
                                            <a href="/"> Product Name </a>
                                        </p>
                                        <p className="news-content-body">1234567890</p>
                                        <p className="news-content-footer">
                                            <span className="news-content-time">2017-06-06</span>
                                            <span className="news-content-author">author</span>
                                            <span className="news-content-viewcount">9999</span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="news-item">
                            <Row type="flex" justify="left">
                                <Col span={6}>
                                    <div className="news-item-image">
                                        <img src='/upload/images/banner_1.jpg'/>
                                    </div>
                                </Col>
                                <Col span={18}>
                                    <div className="news-item-content" >
                                        <p className="news-content-heading">
                                            <a href="/"> Product Name </a>
                                        </p>
                                        <p className="news-content-body">1234567890</p>
                                        <p className="news-content-footer">
                                            <span className="news-content-time">2017-06-06</span>
                                            <span className="news-content-author">author</span>
                                            <span className="news-content-viewcount">9999</span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="news-item">
                            <Row type="flex" justify="left">
                                <Col span={6}>
                                    <div className="news-item-image">
                                        <img src='/upload/images/banner_1.jpg'/>
                                    </div>
                                </Col>
                                <Col span={18}>
                                    <div className="news-item-content" >
                                        <p className="news-content-heading">
                                            <a href="/"> Product Name </a>
                                        </p>
                                        <p className="news-content-body">1234567890</p>
                                        <p className="news-content-footer">
                                            <span className="news-content-time">2017-06-06</span>
                                            <span className="news-content-author">author</span>
                                            <span className="news-content-viewcount">9999</span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="news-item">
                            <Row type="flex" justify="left">
                                <Col span={6}>
                                    <div className="news-item-image">
                                        <img src='/upload/images/banner_1.jpg'/>
                                    </div>
                                </Col>
                                <Col span={18}>
                                    <div className="news-item-content" >
                                        <p className="news-content-heading">
                                            <a href="/"> Product Name </a>
                                        </p>
                                        <p className="news-content-body">1234567890</p>
                                        <p className="news-content-footer">
                                            <span className="news-content-time">2017-06-06</span>
                                            <span className="news-content-author">author</span>
                                            <span className="news-content-viewcount">9999</span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default class News extends Component {
    render() {
        return (
            <div className="container news row-body">
                <header >
                    博客资讯
                </header>
                <p className="describe">
                    分享最新科技资讯，关注智能硬件
                </p>
                <NewsList />
            </div>
            
        )
    }
}