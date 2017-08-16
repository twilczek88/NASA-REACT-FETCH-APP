import React, { Component } from 'react';

import api from '../utilities/api.js';
import Welcome from './Welcome.jsx';
import Main from './Main.jsx'

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start: false,
        }
    }

    onStart = () => {
        this.setState({ start: true });
    }

    render() {
        if (this.state.start) {
            return <div className='wrapper'>
                <Main/>
            </div>
        } else {
            return <Welcome onStart = {this.onStart}/>
        }
    }
}
