import React, {Component} from 'react';

export default class Image extends Component {

    convertDate = () => {
        const date = this.props.img.earth_date.split('-');
        let yyyy = Number(date[0]),
            mm = Number(date[1]-1),
            dd = Number(date[2]);

        return (new Date(yyyy,mm,dd).toDateString());
    }

    render(){
        const img = this.props.img;
        const date = this.convertDate();

        return <div>
            <img src={img.img_src}/>
            <div>
                <p>
                    {img.rover.name} {date} <br/>
                    {img.camera.full_name}
                </p>
            </div>
        </div>
    }
}
