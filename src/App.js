import React, { Component } from 'react';
import './App.css';
import Form from './form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Emailer</h1>
        </header>
        <Form ></Form>
      </div>
    );
  }
}

export default App;
