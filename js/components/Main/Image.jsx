import React, { Component } from 'react';

export default class Image extends Component {
    constructor(props){
        super(props);
        this.state = {
            pending: true
        }
    }

    refresh = () => {
        if(typeof this.props.refresh == 'function'){
            this.props.refresh();
        } else {
            console.error('dupa');
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

    componentDidMount(){
        this.refresh();
    }

    render(){
        const img = this.props.img;
        const source = img.img_src.replace('http', 'https');
        const spinner = <div className="spinner"/>

        const photoDate = this.convertDate(img.earth_date);

        return <article>
            <div className='container'>
                <div className='image'><a href={source} target='_blank'><img src={source}/></a></div>
                <p>
                    {photoDate} <br/>
                    {img.camera.full_name}
                </p>
            </div>
        </article>
    }
}
