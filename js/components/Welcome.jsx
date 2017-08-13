import React, { Component } from 'react';

export default class Welcome extends Component {
    constructor(props){
        super(props);
    }

    handleStartClick = () => {
        if(typeof this.props.onStart == 'function'){
            this.props.onStart();
        } else {
            console.error('no function parsed');
        }
    }

    drawTagline = () => {
        const tagline = [
            "It's still red!",
            "Even more dirt!",
            "Curiosity killed a cat!",
            "More water than in California!",
            "ACK ACK ACK ACK ACK!",
        ];
        const randomNum = Math.floor(Math.random() * tagline.length);
        return tagline[randomNum];
    }

    render() {
        return <div>
            <h1>Today on Mars</h1>
            <h2>Breaking News!</h2>
            <h3>{ this.drawTagline() }</h3>
            <div className='start-button' onClick={this.handleStartClick}>Start</div>
        </div>
    }
}
