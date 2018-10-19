import React, { Component } from 'react';
import LunBo from '../components/lunbo/LunBo';
import Bztj from '../components/content/Home/bztj/bztj';
import {WebHeader} from '../components/content/Home/webHeader/index';
import JourneyRecord from  '../components/content/Home/JourneyRecord/JourneyRecord';
class HomePage extends Component{

    render(){
        return(
            <div>
                <LunBo/>
                <Bztj/>
                <WebHeader/>
                <JourneyRecord/>
            </div>
        );
    }
}

export default HomePage;