import React from 'react';

// import Header from './header';
// import Nav from "./nav";
// import Body from './body';
// import Notify from 'module/notify/index';

import { Layout } from 'antd/dist/antd';
const { Footer, Sider, Content } = Layout;

import { connect } from 'react-redux';

import Header from './header';
import Nav from './navigation';

import { getUser } from '../actions/user';

import '../../../css/admin/admin.scss';

class App extends React.Component {
    constructor() {
        super();
        this.name = 'Piny';
        this.company = '江西艾麦达科技有限公司';
    }

    render() {
        var { dispatch } = this.props;
        // console.log(dispatch(getUser('hahaha')));
        return (
            <div>
                <Layout style={{overflow: 'hidden'}}>
                    <Header />
                    <Layout className='layout'>
                        <Sider className='sider' width='auto'>
                                <Nav />
                        </Sider>
                        <Layout className='content'>
                            <Content className='container'>
                                { this.props.children }
                                <Footer className='footer' > &copy; {this.company}  <div style={{float: 'right'}}>Power By Piny</div></Footer>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

function select(state) {
    console.log(state);
    return {
        nav: state.nav,
        user: state.user,
        product: state.product
    }
}

export default connect(select)(App);

// <div style={{height: '800px'}}>
//                                     { this.props.user.data || 'undefined'}
//                                     <div style={{cursor: 'pointer'}} onClick={e => dispatch(getUser(Math.random()))}>修改</div>
//                                 </div>