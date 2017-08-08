import React from 'react';
import api from '../utilities/api.js';
import Menu from './Main/Menu.jsx';
import Gallery from './Main/Gallery.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rover: [
                'curiosity',
                'opportunity',
                'spirit'
            ],
            links: []
        };
    }


    render() {
        return <main>
            <Menu/>
            <Gallery/>
        </main>
    }
}
