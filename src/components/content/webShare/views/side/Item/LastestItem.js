import React, { Component } from 'react';
import './Item.css';

class LastestItem extends Component{
    render(){
        let {lastestArticlesTitle} = this.props;

        return(
            <li>
                <p><a>{lastestArticlesTitle.title}</a></p>
            </li>

        )
    }
}

export default LastestItem;