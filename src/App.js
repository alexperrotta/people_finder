import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import PersonList from './components/personList';
import Count from './components/count';
require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/personList" component={PersonList} />
          <Route path="/count" component={Count} />
        </Switch>
      </div>
    );
  }
}

export default App;
