import React,{Component} from 'react';
import  PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment} from '../../redux/action';
import Add from '../Add/Add'
import List from '../List/List'
import './App.css';

class App extends Component{
    //输入信息的定义
    static propTypes = {
        comments:PropTypes.array.isRequired,
        addComment:PropTypes.func.isRequired,
    };

    render(){
        let {comments,addComment} = this.props;
        return(
            <div className="content">
                <div id="messageBoard">
                    <Add comments={comments} addComment={addComment}/>
                    <List comments={comments}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({comments:state.messageBoardReducer}),
    {addComment}
)(App);