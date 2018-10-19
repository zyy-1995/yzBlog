import React, { Component } from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import './body.css';


const App = ({children}) => {
    return (
        <div>
            <Nav/>

            <div>{children}</div>

            <Footer/>
        </div>
    )
};
export default App;
