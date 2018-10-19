import React, { Component } from 'react';
import './li.css';

class Item extends Component{

    //点击按钮跳转到新的页面
    handleClick = () => {
        const w=window.open('about:blank');
        w.location.href='/#/originArticle.html?id='+`${this.props.msg.id}`;
    };

    render(){
        var {msg} = this.props;

        return(
            <li>
                <img src={msg.imgUrl}/>
                <a>{msg.title}</a>
                <p>{msg.text}
                    <button className="readBtn" onClick={this.handleClick} >阅 读 原 文</button>
                </p>
            </li>
        )
    }
}

export default Item;