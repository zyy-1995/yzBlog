import React from 'react';
import {CLICKREVIEWBTN,CLICKWEBBTN} from './actionType';

/*
同步的action都返回一个对象
异步的action都返回的是一个函数
 */

export const clickWebBtn = () => {
    return {
        type:CLICKWEBBTN
    }
}

export const clickReviewBtn = () => {
    return {
        type:CLICKREVIEWBTN
    }
}



//异步action
export const clickReviewBtnAsync = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(clickReviewBtn());
        },1000);
    };
}