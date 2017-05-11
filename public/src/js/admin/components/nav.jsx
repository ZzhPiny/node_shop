import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class extends React.Component {
    custructor() {

    }

    render() {
        return (
            <div className="sidebar-left-content nano-content">
                <UserInfo />
                <Navigetor />
            </div>
        )
    }
}

class UserInfo extends React.Component {

    render() {
        var userMenu = '用户菜单';
        var userName = 'Piny';
        var logout = '退出';

        return (
            <header className="sidebar-header">
                <div className="sidebar-widget author-widget">
                    <div className="media">
                        <a className="media-left" href="#">
                            <img src="/upload/userImg/user.png" className="img-responsive" />
                        </a>
                        <div className="media-body">
                            <div className="media-links">
                                <a className="sidebar-menu-toggle">{userMenu}</a> - <a onClick={e => this.Link("/admin/login")}>{logout}</a>
                            </div>
                            <div className="media-author">{userName}</div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-widget menu-widget">
                    <div className="row text-center mbn">
                        <div className="col-xs-4">
                            <a href="/admin" className="text-primary" data-toggle="tooltip" data-placement="top" title="Dashboard">
                                <span className="glyphicon glyphicon-home"></span>
                            </a>
                        </div>
                        <div className="col-xs-4">
                            <a href="/admin/pages_messages.html" className="text-info" data-toggle="tooltip" data-placement="top" title="Messages">
                                <span className="glyphicon glyphicon-inbox"></span>
                            </a>
                        </div>
                        <div className="col-xs-4">
                            <a href="/admin/pages_profile.html" className="text-alert" data-toggle="tooltip" data-placement="top" title="Tasks">
                                <span className="glyphicon glyphicon-bell"></span>
                            </a>
                        </div>
                        <div className="col-xs-4">
                            <a href="/admin/pages_timeline.html" className="text-system" data-toggle="tooltip" data-placement="top" title="Activity">
                                <span className="fa fa-desktop"></span>
                            </a>
                        </div>
                        <div className="col-xs-4">
                            <a href="/admin/pages_profile.html" className="text-danger" data-toggle="tooltip" data-placement="top" title="Settings">
                                <span className="fa fa-gears"></span>
                            </a>
                        </div>
                        <div className="col-xs-4">
                            <a href="/admin/pages_gallery.html" className="text-warning" data-toggle="tooltip" data-placement="top" title="Cron Jobs">
                                <span className="fa fa-flask"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="sidebar-widget search-widget hidden">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className="fa fa-search"></i>
                        </span>
                        <input type="text" id="sidebar-search" className="form-control" placeholder="Search..." />
                    </div>
                </div>
            </header>
        )
        
    }
}

class Navigetor extends React.Component {
    // <li className="sidebar-label pt20">{vip.title}</li>
    // <li>
    //     <Link to="/admin/member/v1">
    //         <span className="fa fa-calendar"></span>
    //         <span className="sidebar-title">{vip.v1}</span>
    //         <span className="caret"></span>
    //         <span className="sidebar-title-tray">
    //             <span className="label label-xs bg-primary">New</span>
    //         </span>
    //     </Link>
    //     <Link to="/admin/member/v2">
    //         <span className="fa fa-calendar"></span>
    //         <span className="sidebar-title">{vip.v2}</span>
    //         <span className="caret"></span>
    //         <span className="sidebar-title-tray">
    //             <span className="label label-xs bg-primary">New</span>
    //         </span>
    //     </Link>
    //     <Link to="/admin/member/v3">
    //         <span className="fa fa-calendar"></span>
    //         <span className="sidebar-title">{vip.v3}</span>
    //         <span className="caret"></span>
    //         <span className="sidebar-title-tray">
    //             <span className="label label-xs bg-primary">New</span>
    //         </span>
    //     </Link>
    //     <Link to="/admin/member/v4">
    //         <span className="fa fa-calendar"></span>
    //         <span className="sidebar-title">{vip.v4}</span>
    //         <span className="caret"></span>
    //         <span className="sidebar-title-tray">
    //             <span className="label label-xs bg-primary">New</span>
    //         </span>
    //     </Link>
    //     <Link to="/admin/member/v5">
    //         <span className="fa fa-calendar"></span>
    //         <span className="sidebar-title">{vip.v5}</span>
    //         <span className="caret"></span>
    //         <span className="sidebar-title-tray">
    //             <span className="label label-xs bg-primary">New</span>
    //         </span>
    //     </Link>
    // </li>
    render() {
        var vip = {
            title: '会员管理',
            v1: '普通会员',
            v2: '黄金会员',
            v3: '铂金会员',
            v4: '钻石会员',
            v5: '至尊会员',
        }
        return (
            <ul className="nav sidebar-menu">
                <li className="sidebar-label pt15">商品管理</li>
                <li>
                    <Link to="/admin/product/classify">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">商品分类</span>
                        <span className="caret"></span>
                    </Link>
                    <Link to="/admin/product/list">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">商品列表</span>
                        <span className="caret"></span>
                    </Link>
                    <Link to="/admin/product/attr">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">属性管理</span>
                        <span className="caret"></span>
                    </Link>
                    <Link to="/admin/product/tuijian">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">推荐管理</span>
                        <span className="caret"></span>
                    </Link>
                </li>
                <li className="sidebar-label pt15">活动管理</li>
                <li>
                    <Link to="/admin/">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">茶歇套餐</span>
                        <span className="caret"></span>
                    </Link>
                    <Link to="/admin/">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">商品分类</span>
                        <span className="caret"></span>
                    </Link>
                    <Link to="/admin/">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">商品分类</span>
                        <span className="caret"></span>
                    </Link>
                </li>
                <li className="sidebar-label pt15">订单管理</li>
                <li>
                    <Link to="/admin/">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">未支付订单</span>
                        <span className="caret"></span>
                    </Link>
                    <Link to="/admin/">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">已支付订单</span>
                        <span className="caret"></span>
                    </Link>
                    <Link to="/admin/">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">已处理订单</span>
                        <span className="caret"></span>
                    </Link>
                    <Link to="/admin/">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">退款订单</span>
                        <span className="caret"></span>
                    </Link>
                </li>
                <li className="sidebar-label pt15">资金管理</li>
                <li>
                    <Link to="/admin/">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">收益分析</span>
                        <span className="caret"></span>
                    </Link>
                </li>
                <li className="sidebar-label pt15">管理员管理</li>
                <li>
                    <Link to="/admin/">
                        <span className="fa fa-columns"></span>
                        <span className="sidebar-title">权限分配</span>
                        <span className="caret"></span>
                    </Link>
                </li>
            </ul>
        )
    }
}