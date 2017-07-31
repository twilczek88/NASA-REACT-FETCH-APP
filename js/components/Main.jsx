import React from 'react';

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

    getToday = () => {
        const day = new Date();
        if (day.getMonth()<10) {
            return `${day.getFullYear()}-0${day.getMonth()+1}-${day.getDate()-2}`;
        } else {
            return `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()-2}`;
        }
    }

    componentDidMount() {
        const foto = document.querySelectorAll('.foto div');
        const today = this.getToday();
        const apiKey = 'y6ZUglHCMowWyfCZnZjTnUbFozGToNjOWX28dhVY';
        const rover = this.state.rover[0];
        const link = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${today}&api_key=${apiKey}`;
        console.log(today);
        fetch(link)
            .then(d => d.json())
            .then(d => { console.log(d) });
    }

    render() {
        return <main>
            <h1>czy main jest tagiem html5?</h1>
            <div className='menu'>menu</div>
            <div className='foto'>foto</div>
            <div className='description'>opis</div>
        </main>
    }
}
