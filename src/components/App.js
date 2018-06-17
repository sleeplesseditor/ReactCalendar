import React, { Component } from 'react';
import './App.css';

import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="header-title">React Calendar</h1>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
