import React, { Component } from 'react';
import Item from '../Item/Item';
import './List.css';
class List extends Component{
    render(){
        let {articles} = this.props;

        return(
            <ul id="webShareBox">
                {
                    articles.map((item,index) => {
                        return (
                            <Item articles={item}  key={index}/>
                        )
                    })
                }
            </ul>
        )
    }
}

export default List;