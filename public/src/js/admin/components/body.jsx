import React from 'react';

import { Router, Route, browserHistory, Link } from 'react-router';

export default class Body extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/admin" component={ example1 }>
                    <Route path='user' component={ example2 } />
                </Route>
            </Router>
        )
    }
}

class example1 extends React.Component {
    render() {
        return (
            <div>
                <Link to='admin/user'>lalallala </Link>
                { this.props.children }
            </div>
        )
    }
}

class example2 extends React.Component {
    render() {
        return (
            <div><br /><br /><br />ssssssssssssssssssssssssssssssssssssssssssssslalallalaghhhhhhhhhhhhhhhhhhhhhhhhhhhh <br /> </div>
        )
    }
}