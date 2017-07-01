/*
    Create By Piny
    2017.06.06
 */

import React, { Component } from 'react';

import { Carousel } from 'antd';

export default class Banner extends Component {
    constructor() {
        super();
    }

    beforeChange(from, to) {
        // console.log('before', from, to)
    }

    afterChange(data) {
        // console.log('after', data)
    }

    render() {
        return (
            <div className='banner' style={{
                margin: '0'
            }}>
                <Carousel autoplay autoplaySpeed='2000' beforeChange={this.beforeChange} afterChange={this.afterChange}>
                    <div>
                        <img src="/images/banners/banner_1.jpg" />
                    </div>
                    <div>
                        <img src="/images/banners/banner_2.jpg" />
                    </div>
                    <div>
                        <img src="/images/banners/banner_3.jpg" />
                    </div>
                </Carousel>
            </div>
        )
    }
}