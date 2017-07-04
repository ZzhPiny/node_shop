/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb, BackTop, Row, Col } from 'antd';
const { Content } = Layout;

import '../../css/style.scss';

import Header from '../tpl/header';
import Footer from '../tpl/footer';
import Banner from '../module/banner';
import Product from '../module/productlist';
import News from '../module/news';
import AboutUS from '../module/about';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Layout style={{backgroundColor: "#fff"}}>
                <Header />
                <Content style={{marginTop: 164}}>
                    <Banner />
                    <div style={{
                        background: '#fff',
                        // padding: 24,
                        // marginTop: '20px',
                        minHeight: 380,
                        // border: '1px solid #e1e1e1'
                    }}>
                        <div className="row"></div>
                        <div className="row">
                            <Product />
                        </div>
                        <div className="row">
                            <Row type="flex" justify="center">
                                <Col span={24}>
                                    <div className="streamer" style={{
                                        textAlign: 'center',
                                        lineHeight: 0,
                                    }}>
                                        <img src='/images/streamer.jpeg' style={{width: '100%'}}/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="row"></div>
                        <div className="row">
                            <News />
                        </div>
                        <div className="row">
                            <AboutUS />
                        </div>
                    </div>
                </Content>
                <Footer />
                <div id="components-back-top-custom">
                    <BackTop />
                </div>
            </Layout>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('main'));

// <div className="ant-back-top-inner">UP</div>/
    
// <Breadcrumb style={{ margin: '12px 0' }}>
//     <Breadcrumb.Item>Home</Breadcrumb.Item>
//     <Breadcrumb.Item>List</Breadcrumb.Item>
//     <Breadcrumb.Item>App</Breadcrumb.Item>
// </Breadcrumb>
