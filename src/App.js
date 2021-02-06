import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            {/* // */}
            <Route exact to="/" component={Dashboard} />
          </Switch>
          <Dashboard />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
