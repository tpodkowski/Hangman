import React from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import LoginComponent from './LoginComponent';
import HangmanComponent from './HangmanComponent';

class AppComponent extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Redirect exact to="/play" />
          <Route path="/login" component={LoginComponent}/>
          <Route path="/play" component={HangmanComponent}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppComponent;
