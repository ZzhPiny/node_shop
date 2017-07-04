import React from 'react';

import { Link } from 'react-router';
import { Row, Col, Breadcrumb, Icon } from 'antd';



export default class Dashboard extends React.Component {
    constructor() {
        super()
    }

    render() {

        return (
            <div style={{background: '#fff'}}>网站设置主页</div>
        )
    }
}

// <Breadcrumb separator=">">
//     <Breadcrumb.Item href="">
//         <Icon type="home" />
//     </Breadcrumb.Item>
//     <Breadcrumb.Item href="">
//         <Icon type="user" />
//         <span>Application List</span>
//     </Breadcrumb.Item>
//     <Breadcrumb.Item>
//       Application
//     </Breadcrumb.Item>
// </Breadcrumb>