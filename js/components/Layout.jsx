import React, { Component } from 'react';

import api from '../utilities/api.js';
import Header from './Layout/Header.jsx';
import Footer from './Layout/Footer.jsx';
import Welcome from './Welcome.jsx';
import Main from './Main.jsx'

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
            links: []
        }
    }

    onStart = () => {
        this.setState({ start: true });
    }

    componentWillMount(){
        api.getLinks().then( r => {
            this.setState({ links: r });
        });


    }

    render() {
        if (this.state.start) {
            return <div className='wrapper'>
                <Header/>
                <Main links = {this.state.links}/>
                <Footer/>
            </div>
        } else {
            return <Welcome onStart = {this.onStart}/>
        }
    }
}
