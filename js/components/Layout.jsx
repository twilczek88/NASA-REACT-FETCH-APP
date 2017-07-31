import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx'

export default class Layout extends React.Component {
    render() {
        return <div className='wrapper-layout'>
            <Header></Header>
            <Main>
                {/* props children? */}
            </Main>
            <Footer></Footer>
        </div>;
    }
}
