/**
 * Create By Piny
 * 2017.07.04
 */
import React, { Component } from 'react';

import {Layout, Breadcrumb, Icon} from 'antd/dist/antd';

export default class extends Component {
    render() {
        var routes = this.props.routes;
        return (
            <div>
                <header className='container-header'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>
                            当前位置： 
                            <Icon type="home" /> 主页
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Icon type="user" />
                            <span>{routes[routes.length - 2].path}</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Icon type="user" />
                            <span>{routes[routes.length - 1].path}</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </header>
                <section className="container-body" style={{background: '#fff'}}>
                    { this.props.children }
                </section>
            </div>
        )
    }
}