import React from 'react';
import Menu from './Main/Menu.jsx';
import Gallery from './Main/Gallery.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <main>
            <Menu/>
            <Gallery links = {this.props.links}/>
        </main>
    }
}
