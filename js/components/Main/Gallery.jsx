import React, { Component } from 'react';
import Image from './Image.jsx';

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeImage: 0,
            isMenuShown: true
        }
    }

    refreshGallery = (refreshedImage = this.state.activeImage) => {
        const gallery = document.querySelector('.gallery');
        let step;
        if(this.state.isMenuShown){
            step = window.innerWidth*0.85;
        } else {
            step = window.innerWidth;
        }

        if (gallery != null){
            gallery.style.left = `${0-(step * refreshedImage)}px`;
            this.setState({activeImage : refreshedImage});
            console.log(gallery.style.left, step);
        }
    }

    toggleMenu = () => {
        const condition = !this.state.isMenuShown;
        this.setState({ isMenuShown : condition });

        const carousel = document.querySelector('.carousel');
        const gallery = document.querySelector('.gallery');
        const articles = [...document.querySelectorAll('article')];
        const menu = document.querySelector('.menu');

        if(condition) {
            articles.forEach(article => {
                article.style.width = '85vw';
            });
            carousel.style.width = '85vw';
            carousel.style.left = '0';
            menu.style.left = '0';
            gallery.style.left = `${0-(window.innerWidth * 0.85 * this.state.activeImage)}px`;
        } else {
            articles.forEach(article => {
                article.style.width = '100vw';
            });
            carousel.style.width = '100vw';
            carousel.style.left = '-15vw';
            menu.style.left = '-15vw';
            gallery.style.left = `${0-(window.innerWidth * this.state.activeImage)}px`;
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
        const currentImage = this.state.activeImage+1;
        const allImages = this.props.links.length;
        let toggle;

        if(this.state.isMenuShown){
            toggle = <div
                className='toggle'
                onClick = { this.toggleMenu }>
                &#9664;
            </div>
        } else {
            toggle = <div
                className='toggle'
                onClick = { this.toggleMenu }>
                    <svg width="1rem" height="1rem" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" fill="#fff"/></svg>
            </div>
        }

        if(this.props.pending) {
            return <section className='carousel-spinner'>{spinner}</section>
        } else {
            return <section className='carousel'>
                { toggle }
                <div className='count'>{currentImage}/{allImages}</div>
                <div className='inner'>
                    <div className='arrow' onClick={ e => this.handleArrowClick('previous') }> 	&#9664; </div>
                    <section className='gallery'>{ images }</section>
                    <div className='arrow' onClick={ e => this.handleArrowClick('next') }> 	&#9654; </div>
                </div>
                <div className='bubbles'>{ bubbles }</div>
            </section>
        }
    }
}
