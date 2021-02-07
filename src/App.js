import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/project/:id" component={ProjectDetails} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
