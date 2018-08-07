import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact component={NotFound} />
            </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
