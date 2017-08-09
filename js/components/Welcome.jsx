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

    render() {
        return <div>
            <h1>This week on Mars</h1>
            <div className='start-button' onClick={this.handleStartClick}>Start</div>
        </div>
    }
}
