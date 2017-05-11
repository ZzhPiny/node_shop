import React from 'react';

import Radio, { Group } from 'antd/lib/radio'
// import 'antd/radio/style'

// const RadioGroup = Radio.RadioGroup;

import { Link } from 'react-router';


class List extends React.Component {
    constructor() {
        super();
    }
    state = {
        value: '1'
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    }
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
            color: 'red',
        };
        return (
            <Group key='radioGroup' onChange={this.onChange} value={this.state.value}>
                <Radio style={radioStyle} value={'1'}>列表一</Radio>
                <Radio style={radioStyle} value={'2'}>列表二</Radio>
                <Radio style={radioStyle} value={'3'}>列表三</Radio>
                <Radio style={radioStyle} value={'4'}>列表四</Radio>
                <Radio style={radioStyle} value={'5'}>列表五</Radio>
            </Group>
        )
    }
}
export default List