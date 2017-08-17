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
        const rovers = ['Curiosity', 'Opportunity', 'Spirit']
        .map((rover, i) => {
            if(this.props.rover == rover.toLowerCase()){
                return <li className='active' key ={ i }><p>{rover}</p></li>
            } else {
                return <li onClick={ e => this.handleRoverChange(rover.toLowerCase()) } key = { i }><p>{rover}</p></li>
            }
        });

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
                { rovers }
            </ul>
        </div>
    }
}
