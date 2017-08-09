import React, {Component} from 'react';
import api from '../../utilities/api.js';
import Image from './Image.jsx';

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            links: []
        }
    }

    componentWillMount(){
        api.getLinks()
        .then( r => {
            this.setState({ links: r })
        })
    }

    render() {
        let images = this.state.links.slice()
        .map(image=> <Image img={image} key={image.id}/>);
        console.log(this.state.links[0]);

        return <div>
            <div className='left-arrow'></div>
            {images}
            <div className='right-arrow'></div>
        </div>
    }
}
