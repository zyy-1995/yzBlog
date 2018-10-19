import React, { Component } from 'react';
import Item from "../Item/Item";
import './List.css';

class List extends Component{
    render(){
        let {comments} = this.props;
        return (
                <div>
                    <ul id="messageBox">
                        <h3>最新评论</h3>
                        {
                            comments.map((item,index) => {
                                return (
                                    <Item comments={item}  key={index} index={index} />
                                )
                            })
                        }

                    </ul>
                </div>

         )
    }
}
export default List;


