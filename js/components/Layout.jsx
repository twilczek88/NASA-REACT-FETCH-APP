import React from 'react';

import Header from './Layout/Header.jsx';
import Footer from './Layout/Footer.jsx';
import Main from './Main.jsx'

export default class Layout extends React.Component {
    render() {
        return <div className='wrapper'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    }
}
