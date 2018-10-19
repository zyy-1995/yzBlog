import React, { Component } from 'react';
import List from '../List/List';
import './App';

class App extends Component{

    render(){
        let {articles} = this.props;

        return(
            <div className="content">
                <List articles={articles}/>
            </div>

        )
    }
}

export default App;