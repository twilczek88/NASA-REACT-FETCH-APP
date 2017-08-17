import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <div className='wrapper'><Main/></div>,
        document.querySelector('#app')
    );
});
