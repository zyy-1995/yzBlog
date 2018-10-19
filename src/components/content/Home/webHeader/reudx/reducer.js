import React from 'react';
import {CLICKWEBBTN,CLICKREVIEWBTN} from './actionType';
import {webMsg,reviewMsg} from '../../../../../data/msg';


//初始化数据
const initState={
    webMsg:webMsg,
    reviewMsg:[],
    filter:"webMsg"
};

export default function homePageReducer(state = initState,action) {
    switch(action.type){
        case CLICKWEBBTN:
            return {
                ...state,
                webMsg:webMsg,
                filter:"webMsg"
            };
        case CLICKREVIEWBTN:
            return ({
                ...state,
                reviewMsg:reviewMsg,
                filter:"reviewMsg"
            });
        default:
            return state;
    }
}