import React, { Component } from 'react';
import HotList from '../List/HotList';
import LastestList from '../List/LastestList';
import './Article.css';

class Article extends Component{
    render(){
        let {hotArticlesTitle,lastestArticlesTitle} = this.props;
        return(
            <div className="content">
                <div className="sideBox">
                    <div id="searchBox">
                        <p><span className="title">站 内 搜 索</span></p>
                        <p><input type="search" placeholder="输入关键字搜索相关文章"/><button id="searchBtn">搜 索</button></p>
                    </div>
                    <div id="hotArticle">
                        <p><span className="title">热 门 文 章</span></p>
                        <HotList hotArticlesTitle={hotArticlesTitle}/>
                    </div>
                    <div id="lastestArticle">
                        <p><span className="title">最 新 文 章</span></p>
                        <LastestList lastestArticlesTitle={lastestArticlesTitle}/>
                    </div>
                    <div id="connectMe">
                        <p><span className="title">关注我 么么哒</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article;