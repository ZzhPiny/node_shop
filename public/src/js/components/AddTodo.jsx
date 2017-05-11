import React, {Component, PropTypes} from 'react';
import ReactDOM, {findDOMNode} from 'react-dom'
export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input'/>
                <a className='btn btn-default' onClick={e => this.handleClick(e)}>添加</a>
            </div>
        );
    }

    handleClick(e) {
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        if (!text) return;
        this.props.onAddClick(text);
        node.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}
