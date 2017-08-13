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
            // backgroundImage:`url(${img.img_src})`
        };
        const photoDate = this.convertDate(img.earth_date);
        const startDate = this.convertDate(img.rover.landing_date);
        // data-id={this.props.id} ??
        return <article>
            <div className='container'>
                <div className='image' style={style}><a href={img.img_src} target='_blank'><img src={img.img_src}/></a></div>
                <p>
                    {photoDate} <br/>
                    {img.rover.name} {img.camera.full_name} <br/>
                    Landing date: {startDate} <br/>
                    Mission status: {img.rover.status}
                </p>
            </div>
        </article>
    }
}
