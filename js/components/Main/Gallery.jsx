import React, { Component } from 'react';
import Image from './Image.jsx';

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeImage: 0
        }
    }

    refreshGallery = (refreshedImage = this.state.activeImage) => {
        const gallery = document.querySelector('.gallery');
        const step = window.innerWidth*0.85;


        if (gallery != null){
            gallery.style.left = `${0-(step * refreshedImage)}px`;
            this.setState({activeImage : refreshedImage});
        }
    }

    handleArrowClick = (direction) => {
        const image = this.state.activeImage;
        const maxImage = this.props.links.length-1;

        switch(direction){
            case 'previous': {
                if(image != 0) {
                    this.refreshGallery(image-1);
                } else {
                    this.refreshGallery(maxImage);
                }
            } break;
            case 'next': {
                if (image != maxImage){
                    this.refreshGallery(image+1);
                } else {
                    this.refreshGallery(0);
                }
            } break;
            default: {
                console.error('wrong arrow clicked?');
            }
        }
    }

    drawBubbles = () => {
        const count = this.props.links.length-1;
        const activeImage = this.state.activeImage;
        const bubbles = [];


        for(let i=0; i<=count; i++){
            if(i != activeImage){
                bubbles.push(<div className='bubble' key={i} onClick={e => this.refreshGallery(i)}/>);
            } else {
                bubbles.push(<div className='bubble-active' key={i}/>);
            }
        }
        return bubbles;
    }

    componentDidMount() {
        window.addEventListener('resize', ()=>{
            this.refreshGallery()
        });
    }

    componentWillReceiveProps(){
        this.refreshGallery(0);

    }

    render() {
        const images = this.props.links.map((image, i) => <Image id={ i } img={ image } key={ image.id }/>);
        const spinner = <div className="spinner"/>
        const bubbles = this.drawBubbles();

        if(this.props.pending) {
            return <section className='carousel-spinner'>
                {spinner}
            </section>
        } else {
            return <section className='carousel'>
                <div className='arrow' onClick={ e => this.handleArrowClick('previous') }> 	&#9664; </div>
                <section className='gallery'>{ images }</section>
                <div className='bubbles'>{ bubbles }</div>
                <div className='arrow' onClick={ e => this.handleArrowClick('next') }> 	&#9654; </div>
            </section>
        }
    }
}
