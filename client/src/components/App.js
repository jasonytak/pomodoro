import React from 'react';

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

  render() {
    return <div>Hello</div>;
  }
}

export default App;
