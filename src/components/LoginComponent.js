import React from 'react';
import WordnikService from '../services/WordnikService';
import {Link} from 'react-router-dom';

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      username: '',
      password: ''
    }

    this.login = this.login.bind(this);
    this.handleApiKeyChange = this.handleApiKeyChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  login(event) {
    WordnikService.authenticate(this.state);
  }

  handleApiKeyChange(event) {
    this.setState({apiKey: event.target.value});
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  render() {
    // FIXME Remove this shit
    const containerStyles = {
      background: '#FFFFFF',
      borderRadius: '4px',
      padding: '20px'
    };

    return (
      <div style={containerStyles}>
        <form onSubmit={this.login}>
          <div className="form-group">
            <label htmlFor="apiKeyInput">API key</label>
            <input className="form-control" type="text" id="apiKeyInput" value={this.state.apiKey} onChange={this.handleApiKeyChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="usernameInput">Username</label>
            <input className="form-control" type="text" id="usernameInput" value={this.state.username} onChange={this.handleUsernameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input className="form-control" type="password" id="passwordInput" value={this.state.password} onChange={this.handlePasswordChange}/>
          </div>
          <Link to="/play" className="btn btn-success">Play</Link>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
