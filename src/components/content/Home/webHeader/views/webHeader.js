import React, { Component } from 'react';
import './webHeader.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {clickWebBtn,clickReviewBtnAsync,clickReviewBtn} from '../reudx/action';
import WebShare from "../../webShare/webShare";

class WebHeader extends Component {
    //输入信息的声明
    // static propTypes = {
    //     webMsg: PropTypes.array.isRqequired,
    //     reviewMsg: PropTypes.array.isRqequired,
    //     filter: PropTypes.string.isRqequired,
    //     clickReviewBtn: PropTypes.func.isRqequired,
    //     clickWebBtn: PropTypes.func.isRqequired
    // };

    render() {
        const {webMsg,reviewMsg,filter,clickReviewBtnAsync,clickWebBtn,clickReviewBtn} = this.props;
        return (
            <div className="content">
                <div className="titleBox2">
                    <h2>前 端 分 享</h2>
                    <div id="title2">
                        <button className="active" onClick={clickWebBtn} >前 端 技 术</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={clickReviewBtnAsync}>面 试 笔 试</button>
                    </div>
                </div>
                <WebShare webMsg={webMsg} reviewMsg={reviewMsg} filter={filter}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        webMsg: state.homePageReducer.webMsg,
        reviewMsg: state.homePageReducer.reviewMsg,
        filter: state.homePageReducer.filter
    }
};

export default connect(mapStateToProps,{clickWebBtn,clickReviewBtnAsync})(WebHeader);
