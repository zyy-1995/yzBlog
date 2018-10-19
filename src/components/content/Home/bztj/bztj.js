import React, { Component } from 'react';
import './bztj.css';
class Bztj extends Component {
    render() {
        return (
            <div className="content">
                <div className="titleBox1">
                    <h2>博 主 推 荐</h2>
                    <div id="title1">
                        <p>Blogger recommends</p>
                    </div>
                </div>
                <ul className="bztj">
                    <li>
                        <a style={{fontSize:"26px"}}>一个前端的自我修养</a>
                        <p>time：2018-06-06  &nbsp;  &nbsp;   author:zyy</p><p>推荐理由：提高前端修养，实现自身成长</p></li>
                    <li>
                        <a style={{fontSize:"26px"}}>深入理解JavaScript this</a>
                        <p>time：2018-06-06  &nbsp;  &nbsp;   author:zyy</p><p>推荐理由：彻底理解js中this指向,不必死记硬背</p></li>
                    <li>
                        <a style={{fontSize:"26px"}}>你只是看起来很努力</a>
                        <p>time：2018-06-06  &nbsp;  &nbsp;   author:zyy</p><p>推荐理由：你听说过“积极废人”吗?</p></li>
                    <li>
                        <a style={{fontSize:"26px"}}>论选择的重要性</a>
                        <p>time：2018-06-06  &nbsp;  &nbsp;   author:zyy</p><p>推荐理由：选择一种性格，收货一种命运</p></li>
                </ul>
            </div>
        );
    }
}

export default Bztj;
