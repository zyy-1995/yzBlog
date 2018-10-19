import React, { Component } from 'react';
import './JourneyRecord.css';

class JourneyRecord extends Component {
    render() {
        return (
            <div className="content">
                <div className="titleBox4">
                    <h2>旅 行 点 滴</h2>
                    <div id="title4">
                        <p>Journey record</p>
                    </div>
                </div>
                <ul className="JourneyRecord">
                    <li><img src={require('./6.jpg')}/></li>
                    <li><img src={require('./7.jpg')}/></li>
                    <li><img src={require('./8.jpeg')}/></li>
                </ul>
            </div>
        );
    }
}
export default JourneyRecord;
