import React, { Component } from 'react';
import './Item.css';

class HotItem extends Component{
    render(){
        let {hotArticlesTitle} = this.props;
        return(
                <li>
                    <p>  <a>{hotArticlesTitle.title}</a></p>
                </li>
        )
    }
}

export default HotItem;