import React, { Component } from 'react';
import {Link} from 'react-router';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className="navBack">
                <div className="navBox">
                    <span>叶 子 个 人 博 客</span>
                    <div className="navbar">
                        <ul className="navList">
                            <li className="navItem"><Link to="/">博客首页</Link></li>
                            <li className="navItem"><Link to="/web">前端分享</Link></li>
                            <li className="navItem"><Link to="/learnNoLimit">学无止境</Link></li>
                            <li className="navItem"><Link to="/journeyRecord">旅行点滴</Link></li>
                            <li className="navItem"><Link to="/messageBoard">留言板</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;