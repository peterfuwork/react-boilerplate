import React, { Component } from 'react';
import image from '../assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello World!<br/>
        <span class="fa fa-star"></span>
        <span class="fa fa-star-o"></span>
        <span class="fa fa-star-half-o"></span>
        <img className="App-logo" src={image} />
      </div>
    );
  }
}

export default App;
