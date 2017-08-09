import React, {Component} from 'react';
import Image from './Image.jsx';

export default class Gallery extends Component {

    handleLeftClick = () => {
        console.log('left clicked');
    }

    handleRightClick = () => {
        console.log('right clicked');
    }

    render() {
        let images = this.props.links.slice()
        .map(image => <Image img={image} key={image.id}/>);

        if(this.props.pending) {
            return <div>...PENDING...</div>
        } else {
            return <div>
                <div className='left-arrow' onClick={ this.handleLeftClick }/>
                {images}
                <div className='right-arrow' onClick={ this.handleRightClick }/>
            </div>
        }
    }
}
