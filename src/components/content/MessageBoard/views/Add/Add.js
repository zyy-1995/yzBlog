import React, { Component } from 'react';
import './Add.css';

class Add extends Component{
    constructor(props){
        super(props);
    }

    addComment = () => {
        //获取用户数据
        let username = this.refs.name.value;
        let email = this.refs.email.value;
        let message = this.refs. message.value;
        let imgUrl = this.refs. imgUrl.url;

        //数据验证
        if(username.trim() === '' || message.trim() === '' || email.trim() === ''){
            alert('既然来了，就说两句吧 ^-^！');
            return;
        }else{
            this.refs.name.value = "";
            this.refs. message.value = "";
            this.refs.email.value = "";
        }

        //整合数据
        let comments = {username,email,message,imgUrl};
        this.props.addComment(comments);
    };

    render() {
        return(
                <div>
                    <div id="userInfo">
                        <label className="label">昵称</label>
                        <input type="text" name="username" placeholder="请输入您的昵称" ref="name"/>
                        <label className="label">邮箱</label>
                        <input type="email" name="email" placeholder="请输入您的邮箱" ref="email"/>
                    </div>
                    <textarea style={{cols:"10",rows:"5"}}  placeholder="还没有评论，快来抢沙发......" ref="message"></textarea>
                    <div className="imgBox"><img src={require("./笑脸.png")}/>&nbsp;&nbsp;&nbsp;<img src={require("./photo.png")} title="给您选个头像吧" ref="imgUrl"/>
                        <button id="sendBtn" onClick={this.addComment}>发 布 留 言</button>
                    </div>
                    <div className="container">
                        <span id="plTitle">评 论</span><span id="visitInfo"><strong>3838</strong>条评论,<strong>4888</strong>人参与</span>
                        <div id="borderTop"></div>
                    </div>
                </div>

        )
    }
}

export default Add;

