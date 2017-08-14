import React, { Component } from 'react';

export default class Image extends Component {
    constructor(props){
        super(props);
        this.state = {
            pending: true
        }
    }

    convertDate = date => {
        date = date.split('-');
        return new Date(
            Number(date[0]),
            Number(date[1]-1),
            Number(date[2]))
        .toDateString();
    }

    render(){
        const img = this.props.img;
        const style = {
        };
        const photoDate = this.convertDate(img.earth_date);
        const startDate = this.convertDate(img.rover.landing_date);
        return <article>
            <div className='container'>
                <div className='image' style={style}><a href={img.img_src} target='_blank'><img src={img.img_src}/></a></div>
                <p>
                    {photoDate} <br/>
                    {img.camera.full_name}
                </p>
            </div>
        </article>
    }
}
