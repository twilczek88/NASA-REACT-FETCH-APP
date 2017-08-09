import React, {Component} from 'react';

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
        const photoDate = this.convertDate(img.earth_date);
        const startDate = this.convertDate(img.rover.landing_date);

        return <div>
            <img src={img.img_src}/>
            <div>
                <p>
                    {photoDate} <br/>
                    {img.rover.name} {img.camera.full_name} <br/>
                    Landing date: {startDate} <br/>
                    Mission status: {img.rover.status}
                </p>
            </div>
            <hr/>
        </div>
    }
}
