import React, { Component } from 'react';
import './Item.css';
class Item extends Component{
    render() {
        let {comments} = this.props;
        return(
                <div>
                    <li>
                        <img src={comments.imgUrl} className="userImg"/><span>{comments.username}<span className="address">陕西省西安市</span></span><span className="time">2018年6月18日 13:14</span>
                        <p>{comments.message}</p>
                        <div className="jiaohu"><span><img src={require("./消息 .png")}/> 回复</span><span><img src={require("./点赞.png")}/> 66</span><span><img src={require("./举报 .png")}/>举报</span></div>
                    </li>
                </div>

        )
    }
}

export default Item;