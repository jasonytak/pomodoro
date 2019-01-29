import React from 'react';
import LoginPage from './LoginPage';
import axios from 'axios';

class App extends React.Component {
  state = { users: [] };
  // componentDidMount() {
  //   this.callExpress();
  // }

  // callExpress = async () => {
  //   const response = await fetch('/server');
  //   const body = await response.json();
  //   console.log(body);
  //   return body;
  // };

  onSubmit = user => {
    axios.post('/user', { user }).then(res =>
      this.setState(state => {
        const users = this.state.users.concat(res.data.user);
        return { users };
      })
    );
  };

  render() {
    return (
      <div>
        <LoginPage onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
