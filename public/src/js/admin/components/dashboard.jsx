import React from 'react';

import { Link } from 'react-router';
import { Breadcrumb, Icon } from 'antd';

export default class Dashboard extends React.Component {
    constructor() {
        super()
    }

    render() {

        return (
            <Breadcrumb separator=">">
                <Breadcrumb.Item href="">
                    <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <Icon type="user" />
                    <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  Application
                </Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}