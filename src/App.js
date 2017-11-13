import React, { Component } from 'react';
import './App.css';

import Contacts from './Contacts';

class App extends Component {

    render() {
        return (
            <div className="App">
                <nav className="uk-navbar-container tm-navbar-container">
                    <div className="uk-navbar">
                        <div className="uk-navbar-left">
                            <a className="uk-navbar-item uk-logo">Contacts</a>
                            <div className="uk-navbar-item">...</div>
                        </div>
                        <div className="uk-navbar-right">
                            <div className="uk-navbar-item">
                                <span>Daniel</span>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="uk-container uk-margin">
                    <Contacts />
                </main>
            </div>
        );
    }
}

export default App;