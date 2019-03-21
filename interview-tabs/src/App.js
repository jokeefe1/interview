import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MenuItems from './components/MenuItems/MenuItems';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='container'>
                <MenuItems />
                </div>
            </>
        );
    }
}

export default App;
