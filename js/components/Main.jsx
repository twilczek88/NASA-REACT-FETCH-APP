import React, { Component } from 'react';
import Menu from './Main/Menu.jsx';
import Gallery from './Main/Gallery.jsx';
import api from '../utilities/api.js';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pending: true,
            links: [],
            rover: 'curiosity'
        }
    }

    changeRover = rover => {
        if(rover != this.state.rover){
            this.setState({
                rover: rover,
                pending: true
            });
            api.getLinks(rover)
            .then( r => {
                this.setState({
                    links: r,
                    pending: false
                });
            });
        }
    }

    componentWillMount(){
        api.getLinks(this.state.rover)
        .then( r => {
            this.setState({
                links: r,
                pending: false
            });
        });
    }

    render() {
        return <main>
            <Menu changeRover = {this.changeRover}/>
            <Gallery links = {this.state.links} pending = {this.state.pending}/>
        </main>
    }
}
