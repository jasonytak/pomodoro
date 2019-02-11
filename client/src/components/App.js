import React from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';

class App extends React.Component {
  state = { users: [] };
  componentDidMount() {
    this.callExpress();
  }

  callExpress = async () => {
    const response = await fetch('/server');
    const body = await response.json();
    console.log(body);
    return body;
  };

  onSubmit = user => {
    axios
      .post('/user', { user })
      .then(res =>
        this.setState(state => {
          const users = this.state.users.concat(res.data);
          return { users };
        })
      )
      .then(() => this.props.history.push('/home'))
      .catch(error => console.log(error.response));
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => <LoginPage {...props} onSubmit={this.onSubmit} />}
        />
        <Route
          path="/home"
          render={props => <HomePage {...props} users={this.state.users} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
