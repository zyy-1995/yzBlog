import React from 'react';
import {ADDCOMMENT} from "./actionType";

const initComments=[{
        username:"叶子",
        imgUrl:require("../views/Add/笑脸.png"),
        message:"博主的空间真好看！"
}];


export default function messageBoardReducer(state=initComments ,action) {
    switch(action.type) {
        case ADDCOMMENT:
            return [action.data,...state];
        default:
            return state;
    }
}

