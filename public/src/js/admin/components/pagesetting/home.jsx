/**
 * Create By Piny
 * 2017.07.04
 */
import React, { Component } from 'react';

import { Collapse } from 'antd/dist/antd';
const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  // background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
};

export default class extends Component {
    render() {
        return (
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header={<div>轮播图设置</div>} key="1" style={customPanelStyle}>
                    <div>{text}</div>
                    <p>{text}</p>
                </Panel>
                <Panel header={<span>产品展示设置</span>} key="2" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
                <Panel header={<span>横幅设置</span>} key="3" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
                <Panel header={<span>博客资讯设置</span>} key="4" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
                <Panel header={<span>关于我们设置</span>} key="5" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
                <Panel header={<span>其他设置</span>} key="6" style={customPanelStyle}>
                    <p>{text}</p>
                </Panel>
            </Collapse>
        )
    }
}