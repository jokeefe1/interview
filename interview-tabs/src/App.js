import React, { Component } from 'react';
import './App.css';
import MenuItems from './components/MenuItems/MenuItems';
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <MenuItems />
            </>
        );
    }
}

export default App;
