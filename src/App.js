import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import PersonList from './components/personList';
import Count from './components/count';
import Duplicate from './components/duplicate';
require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/personList" component={PersonList} />
          <Route path="/count" component={Count} />
          <Route path="/duplicate" component={Duplicate} />
        </Switch>
      </div>
    );
  }
}

export default App;
