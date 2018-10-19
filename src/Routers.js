import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import WebSharePage from "./page/WebSharePage";
import JourneyPage from "./page/JourneyPage";
import MessageBoard from "./page/MessageBoard";
import App from "./components/App/App";
import HomePage from "./page/HomePage";
import LearnNoLimitPage from "./page/LearnNoLimitPage";


const Routers = () => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomePage}></IndexRoute>
            <Route path="/web" components={WebSharePage}/>
            <Route path="/learnNoLimit" components={LearnNoLimitPage}/>
            <Route path="/journeyRecord" components={JourneyPage}/>
            <Route path="/messageBoard" components={MessageBoard}/>
        </Route>
    </Router>
);

export default Routers;
