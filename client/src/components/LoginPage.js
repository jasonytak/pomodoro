import './LoginPage.css';
import React from 'react';

class LoginPage extends React.Component {
  state = { name: '' };

  render() {
    return (
      <div className="login-container">
        <div className="ui one column stackable center aligned page grid">
          <h1 className="ui header">PAY ATTENTION</h1>
          <div className="column twelve wide">
            <form className="ui segment form">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </div>
              <button className="ui button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
