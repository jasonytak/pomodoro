import React from 'react';
import LoginPage from './LoginPage';
import axios from 'axios';

class App extends React.Component {


  componentDidMount() {
    this.callExpress();
  }

  callExpress = async () => {
    const response = await fetch('/server');
    const body = await response.json();
    console.log(body);
    return body;
  }

  onSubmit = (user) => {
    axios.post('/user', { user });
  }

  render() {
    return <div><LoginPage onSubmit={this.onSubmit} /></div>;
  }
}

export default App;
