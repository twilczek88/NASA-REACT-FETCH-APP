import React, { Component } from 'react';

export default class Menu extends Component {

    convertDate = date => {
        date = date.split('-');
        return new Date(
            Number(date[0]),
            Number(date[1]-1),
            Number(date[2]))
        .toDateString();
    }

    handleRoverChange = rover => {
        if(typeof this.props.changeRover == 'function') {
            this.props.changeRover(rover);
        } else {
            console.error('no function parsed in <Menu/>');
        }
    }

    render() {
        let date,
            rover,
            status,
            toggle;

        if (this.props.pending) {
            date = '';
            rover = '';
            status = '';
        } else {
            date = this.convertDate(this.props.info.date);
            rover = this.props.info.rover;
            status = this.props.info.status;
        }

        return<div className='menu'>
            <div className='info'>
                Rover: {rover}<br/>
                Landing Date: {date}<br/>
                Mission status: {status}<br/>
            </div>
            <ul>
                <p>Change rover</p>
                <li onClick={ e => this.handleRoverChange('curiosity') }><p>Curiosity</p></li>
                <li onClick={ e => this.handleRoverChange('opportunity') }><p>Opportunity</p></li>
                <li onClick={ e => this.handleRoverChange('spirit') }><p>Spirit</p></li>
            </ul>
        </div>
    }
}
