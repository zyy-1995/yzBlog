import React, { Component } from 'react';
import LastestItem from '../Item/LastestItem';
import './List.css';

class LastestList extends Component{
    render(){
        let {lastestArticlesTitle} = this.props;

        return(
            <ul className="lastestArticleList">
                {
                    lastestArticlesTitle.map((item,index) => {
                        return(
                            <LastestItem key={index} lastestArticlesTitle={item}/>
                        )
                    })
                }
            </ul>
        )
    }
}

export default LastestList;