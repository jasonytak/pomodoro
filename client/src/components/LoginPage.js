import React from 'react';

class LoginPage extends React.Component {
  state = { name: '' };

  render() {
    return (
      <div className="ui one column stackable center aligned page grid">
        <div className="column twelve wide">
          <form className="ui form">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
