import React from 'react';

import { Link } from 'react-router';

class OperateChildren extends React.Component {

    render() {
        var type = this.props.type;
        console.log(this.props)
        return (
            <div className="topbar-right hidden-xs hidden-sm">
                <a href="javascript:;" id="addClassify" className="btn btn-default btn-sm fw600 ml10">
                    <span className="fa fa-plus pr5"></span>添加分类
                </a>
                <a href="javascript:;" id="delClassify" className="btn btn-default btn-sm fw600 ml10">
                    <span className="fa fa-minus pr5"></span>删除分类
                </a>
                <a href="javascript:;" id="editClassify" className="btn btn-default btn-sm fw600 ml10">
                    <span className="fa fa-edit pr5"></span>编辑分类
                </a>
            </div>
        )
    }
}

export default class Product extends React.Component {
    constructor() {
        super();
    }

    state = {
        tabType: [{
            type: 'classify',
            name: '商品分类',
            href: '/admin/product/classify'
        }, {
            type: 'list',
            name: '商品列表',
            href: '/admin/product/list'
        }, {
            type: 'attr',
            name: '属性管理',
            href: '/admin/product/attr'
        }, {
            type: 'recommen',
            name: '商品推荐',
            href: '/admin/product/recommen'
        }],
        tabShowType: 'classify' 
    };

    handleClick(e) {
        console.log(e.target.dataset)
        this.setState({tabShowType: e.target.dataset.type})
    }

    render() {
        var tabShowType = this.state.tabShowType;
        var listNav = this.state.tabType.map((item, index) => {
            return (
                <li className={ tabShowType == item.type ? 'active' : ''} key={item.type} onClick={e => this.handleClick(e)}>
                    <Link to={ item.href } data-type={item.type} >{ item.name }</Link>
                </li>
            )
        })

        return(
            <div>
                <header id="topbar" className="ph10">
                    <div className="topbar-left">
                        <ul className="nav nav-list nav-list-topbar pull-left">
                            { listNav }
                        </ul>
                    </div>
                    <OperateChildren type={tabShowType} />
                </header>
                <section>
                    { this.props.children }
                </section>
            </div>
        )
    }
}
