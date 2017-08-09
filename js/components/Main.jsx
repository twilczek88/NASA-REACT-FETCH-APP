import React, { Component } from 'react';
import Menu from './Main/Menu.jsx';
import Gallery from './Main/Gallery.jsx';
import api from '../utilities/api.js';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [],
            rover: 'curiosity'
        }
    }

    changeRover = rover => {
        this.setState({rover: rover});
        api.getLinks(rover)
        .then( r => {
            this.setState({ links: r })
        });
    }

    componentWillMount(){
        api.getLinks(this.state.rover)
        .then( r => {
            this.setState({ links: r })
        });
    }

    render() {
        return <main>
            <Menu changeRover = {this.changeRover}/>
            <Gallery links = {this.state.links}/>
        </main>
    }
}
