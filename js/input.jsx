import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout.jsx';

class App extends React.Component {
    render() {
        return <Layout/>
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );
});
