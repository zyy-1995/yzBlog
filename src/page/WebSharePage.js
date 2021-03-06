import React, { Component } from 'react';
import App from '../components/content/webShare/views/App/App';
import Article from '../components/content/webShare/views/side/Article/Article';

class WebSharePage extends Component{
    constructor(props) {
        super(props);
        //初始化数据
        this.state = {
            articles:[
                {
                    id:1,
                    imgUrl:require('./2018-06-10_111243.gif'),
                    title:"从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)",
                    content:"在浏览器地址栏输入URL浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤如果资源未缓存，发起新请求,如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证检验新鲜通常有两个HTTP头进行控制Expires和Cache-Control",
                },
                {
                    id:2,
                    imgUrl:require('./2018-06-10_170158.gif'),
                    title:"什么是web语义化,有什么好处",
                    content:"web语义化是指通过HTML标记表示页面包含的信息，包含了HTML标签的语义化和css命名的语义化。HTML标签的语义化是指：通过使用包含语义的标签（如h1-h6）恰当地表示文档结构 css命名的语义化是指：为html标签添加有意义的class"
                },
                {
                    id:3,
                    imgUrl:require('./2018-07-01_220018.gif'),
                    title:"一个前端的自我修养",
                    content:"今天给大家分享的主题是前端的自我成长，这是一个关于成长的话题。很多人都有这样的感觉：听了很多技术圈子的分享，有的有深度，有的循循善诱，深入浅出，但是呢，几年下来，到底哪些用上了，哪些对自己真的有帮助了?反而有些模糊。"
                },
                {
                    id:4,
                    imgUrl:require('./2018-07-01_220743.gif'),
                    title:"Web安全，了解一下?",
                    content:"如同标题所写的，今天要聊的是WEB安全机制，但这“前端”二字倒是说的狭义了些，安全的问题大部分还是更依赖于后端的过滤和拦截措施.先不说上面的“通过脚本把信息发送给服务器”是什么情况，我们先来聊一聊WEB基本攻击有哪些"
                }
            ],
            hotArticlesTitle:[
                {title:"什么是web语义化,有什么好处"},
                {title:"什么是web语义化,有什么好处"},
                {title:"什么是web语义化,有什么好处"},
                {title:"什么是web语义化,有什么好处"},
                {title:"什么是web语义化,有什么好处"},
                {title:"什么是web语义化,有什么好处"},
                {title:"什么是web语义化,有什么好处"},
                {title:"什么是web语义化,有什么好处"}
            ],
            lastestArticlesTitle:[
                {title:"web前端个人技术博客"},
                {title:"web前端个人技术博客"},
                {title:"web前端个人技术博客"},
                {title:"web前端个人技术博客"},
                {title:"web前端个人技术博客"},
                {title:"web前端个人技术博客"},
                {title:"web前端个人技术博客"},
                {title:"web前端个人技术博客"}
            ]
        }
    }
    render() {
        let {articles,hotArticlesTitle,lastestArticlesTitle} = this.state;

        return(
            <div>
                <App articles={articles}/>
                <Article lastestArticlesTitle={lastestArticlesTitle} hotArticlesTitle={hotArticlesTitle}/>
            </div>
        );
    }
}

export default WebSharePage;