import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let containerId = "notify-container";

export default class extends React.Component {
    constructor() {
        super();
        this.style = {
            position: "fixed",
            right: 0,
            top: "100px",
            zIndex: 1000
        }
    }
    render() {
        var style = Object.assign(this.style, this.props.style);

        return (
            <div id={containerId} style={style}></div>
        );
    }
}

let timeOutCount = 0;
const DELAYTIME = 3000; //ms

class Toast extends Component {

    constructor() {
        super();
        this.displayName = "Notify";
        this.key = 0;
        
        this.style = {
            width: "100px",
            height: "50px",
            border: "1px solid red",
            margin: "5px",
            backgroundColor: "green",
            color: "#000",
        }
    }

    onMouseOver() {

    }

    onMouseOut() {

    }

    render() {
        var data = this.props.data;
        var type = data.type;
        var text = data.text;
        console.log(this)
        return (
            <div>
                <div className="toast-notification" style={this.style} onMouseOut={this.onMouseOut} onMouseOver={this.onMouseOver}>
                    <span className={type} >{text}</span>
                </div>
            </div>
        )
    }
}

function show(type, title, text, timeout) {
    var data = {
        type: type,
        title: title,
        text: text
    };

    ReactDOM.render(
        <Toast data={data} />,
        document.getElementById(containerId)
    );

    _setTimeout(timeout);
}
function hideNotify() {

}

function _setTimeout(time = DELAYTIME) {
    timeOutCount = setTimeout(function(){
        // hideNotify();
    }, time)
}

function _clearTimeout() {
    clearTimeout(timeOutCount);
}

export let notify = {
    show: show
}
