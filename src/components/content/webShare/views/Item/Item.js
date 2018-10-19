import React, { Component } from 'react';
import './Item.css';

class Item extends Component{
    //点击按钮跳转到新的页面
    handleClick = () => {
        const w=window.open('about:blank');
        w.location.href='/#/originArticle.html?id='+`${this.props.articles.id}`;
    };

    render(){
        let {articles} = this.props;

        return(
            <div>
                <li><p><span></span><a>{articles.title}</a></p>
                    <img src={articles. imgUrl}/><p>
                        {articles.content}
                        <button className="readBtn" onClick={this.handleClick}>阅 读 原 文</button>
                    </p>
                </li>
            </div>
        )
    }
}

export default Item;