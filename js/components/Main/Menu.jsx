import React, { Component } from 'react';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            isMenuShown : false
        }
    }

    toggleMenu = () => {
        this.setState({ isMenuShown : !this.state.isMenuShown });
    }

    handleRoverChange = rover => {
        if(typeof this.props.changeRover == 'function') {
            this.props.changeRover(rover);
        } else {
            console.error('no function parsed in <Menu/>');
        }
    }

    render() {
        if(this.state.isMenuShown){
            return <ul className='menu' onClick={ this.toggleMenu }>
                Change rover
                <li onClick={ e => this.handleRoverChange('curiosity') }>Curiosity</li>
                <li onClick={ e => this.handleRoverChange('opportunity') }>Opportunity</li>
                <li onClick={ e => this.handleRoverChange('spirit') }>Spirit</li>
            </ul>
        } else {
            return <ul className='menu' onClick={ this.toggleMenu }>
                Change rover
            </ul>
        }
    }
}
