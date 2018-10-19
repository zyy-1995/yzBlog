import React from 'react';
import {ADDCOMMENT} from './actionType';

export const addComment = (comments) => {
    return ({
        type:ADDCOMMENT,
        data:comments
    })
};
