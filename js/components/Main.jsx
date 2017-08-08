import React from 'react';
import Menu from './Main/Menu.jsx';
import Gallery from './Main/Gallery.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rover: [
                'curiosity',
                'opportunity',
                'spirit'
            ]
        };
    }

    // getToday = () => {
    //     const day = new Date();
    //     const curDay = 'dupa';
    //     const month = 'dupa';
    //     if (day.getMonth()<10) {
    //         return `${day.getFullYear()}-0${day.getMonth()+1}-${day.getDate()-2}`;
    //     } else {
    //         return `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()-2}`;
    //     }
    // };
    //
    // getLink = () => {
    //     const today = this.getToday();
    //     const key = 'y6ZUglHCMowWyfCZnZjTnUbFozGToNjOWX28dhVY';
    //     let rover = this.state.rover[0];
    //
    //     return `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${today}&api_key=${key}`;
    // }



    componentDidMount() {
        // const today = this.getToday();
        // const apiKey = 'y6ZUglHCMowWyfCZnZjTnUbFozGToNjOWX28dhVY';
        // const rover = this.state.rover[0];
        // const link = this.getLink();
        // fetch(link)
        //     .then(d => d.json())
        //     .then(d => { console.log(d) });
    }

    render() {
        let tekst1 = 'gosia samosia';
        return <main>
            <Menu/>
            <Gallery/>
        </main>
    }
}
