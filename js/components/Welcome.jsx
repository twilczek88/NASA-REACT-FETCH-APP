import React, {Component} from 'react';

export default class Welcome extends Component {

    handleStartClick() {
        
    }

    render() {
        return <div>
            <h1>This week on Mars</h1>
            <div className='marspic'></div>
            <div className='start-button' onClick={this.handleStartClick}>Start</div>
        </div>
    }
}
