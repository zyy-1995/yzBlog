import React, { Component } from 'react';
import HotItem from '../Item/HotItem';
import './List.css';

class HotList extends Component{
    render(){
        let {hotArticlesTitle} = this.props;
        return(
            <ul className="hotArticleList">
                {
                    hotArticlesTitle.map((item,index) => {
                        return(
                            <HotItem key={index} hotArticlesTitle={item}/>
                        )
                    })
                }
            </ul>
        )
    }
}

export default HotList;