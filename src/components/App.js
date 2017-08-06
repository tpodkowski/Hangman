import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import LoginComponent from './MenuComponent';
import HangmanComponent from './GameComponent';

class AppComponent extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Route exact path="/" component={LoginComponent}/>
                    <Route path="/play" component={HangmanComponent}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppComponent;
