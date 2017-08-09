import React, {Component} from 'react';

export default class Menu extends Component {

    handleRoverChange = rover => {
        if(typeof this.props.changeRover == 'function') {
            this.props.changeRover(rover);
        } else {
            console.error('no function parsed in <Menu/>');
        }
    }

    render() {
        return <ul>
            Change rover:
            <li onClick={ e => this.handleRoverChange('curiosity') }>Curiosity</li>
            <li onClick={ e => this.handleRoverChange('opportunity') }>Opportunity</li>
            <li onClick={ e => this.handleRoverChange('spirit') }>Spirit</li>
        </ul>
    }
}
