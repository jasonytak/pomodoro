import './LoginPage.css';
import React from 'react';

class LoginPage extends React.Component {
  state = { user: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.user);
  }

  render() {
    return (
      <div className="login-container">
        <div className="ui one column stackable center aligned page grid">
          <div className="column twelve wide">
            <form onSubmit={this.onFormSubmit} className="ui segment form">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  value={this.state.user}
                  onChange={e => this.setState({ user: e.target.value })}
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
