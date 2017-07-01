/**
 * Create By Piny 
 * 2017/06/30
 */

import React, { Component } from 'react';

import {Row, Col, Menu, Icon} from 'antd';

export class AboutContent extends Component {
    render() {
        return (
            <div>
                <section style={{marginTop: '50px', padding: '30px', background: '#fff'}}>
                    <Row type="flex" justify="left" gutter={20}>
                        <Col span={24}>
                            <div>
                                <img style={{width: '100%'}} src='/upload/images/banner_1.jpg'/>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div style={{borderBottom: '1px solid #e1e1e1', margin: '20px 0'}}>
                            </div>
                        </Col>
                        <Col span={24}>
                            <div style={{padding: '10px 0', textAlign: 'left'}}>
                                1234567890-1234567890-1234567890
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}

export default class AboutUS extends Component {
    render() {
        return (
            <div className="container about row-body">
                <header >
                    关于我们
                </header>
                <p className="describe">
                    我们致力于让科技改善人们的生活
                </p>
                <AboutContent />
            </div>
            
        )
    }
}