import React, { Component } from 'react';
import './webShare.css';
import Item from "../Item/Item";

class WebShare extends Component {
    render() {
       const {webMsg,reviewMsg,filter} = this.props;

        if(filter === "webMsg"){
            // 渲染前端分享组件
            return (
                <ul className="webShare">
                    {
                        webMsg.map((item,index) => {
                            return <Item key={item.id}  msg={item}/>
                        })
                    }
                </ul>
            )
        }else if(filter === "reviewMsg"){
            // 渲染面试组件
            return (
                <ul className="webShare">
                    {
                        reviewMsg.map((item,index) => {
                            return <Item key={item.id} msg={item}/>
                        })
                    }
                </ul>
            )
        }
    }
}

export default WebShare;