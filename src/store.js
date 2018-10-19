import React from 'react';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import homePageReducer from "./components/content/Home/webHeader/reudx/reducer";
import messageBoardReducer from "./components/content/MessageBoard/redux/reducer";

//合并多个reducer
const reducer = combineReducers({
    homePageReducer:homePageReducer,
    messageBoardReducer:messageBoardReducer
});

//全局唯一的store
const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;