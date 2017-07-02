import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

var WordnikService = (function() {
  const basePath = 'http://api.wordnik.com/v4/';
  let isAuthenticated = false;

  function authenticate(credentials) {
    if (isAuthenticated) {
      return;
    }

    let url = `${basePath}account.json/authenticate/${credentials.username}`;

    var request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({password: credentials.password})
    });

    fetch(request).then((response) => {
      isAuthenticated = true;
    }).catch((error) => {
      throw new Error(error);
    });

    return (<Redirect to="/play"/>);
  };

  function getWord() {
    // fetch(`${basePath}/word.json`)
  };

  return {
    authenticate: (credentials) => {
      if (!credentials.username || !credentials.username.length) {
        throw new Error("Username must be set!");
      }

      if (!credentials.password || !credentials.password.length) {
        throw new Error("Password must be set!");
      }

      authenticate(credentials);
    },
    getWord: () => getWord()
  }
})();

export default WordnikService;
