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
            rover: 'curiosity',
            info : {
                rover : '',
                date : '',
                status : ''
            }
        }
    }

    changeRover = rover => {
        if(rover != this.state.rover){
            this.setState({
                rover: rover,
                pending: true,
            });
            api.getLinks(rover)
            .then( r => {
                this.setState({
                    links : r,
                    pending : false,
                    info : {
                        rover : r[0].rover.name,
                        date : r[0].rover.landing_date,
                        status : r[0].rover.status
                    }
                });
            });
        }
    }

    componentWillMount(){
        api.getLinks(this.state.rover)
        .then( r => {
            this.setState({
                links : r,
                pending : false,
                info : {
                    rover : r[0].rover.name,
                    date : r[0].rover.landing_date,
                    status : r[0].rover.status
                }
            });
        });
    }

    render() {
        console.log(this.state.info);
        return <main>
            <Menu changeRover = { this.changeRover } info = { this.state.info } pending = { this.state.pending }/>
            <Gallery links = { this.state.links } pending = { this.state.pending }/>
        </main>
    }
}
