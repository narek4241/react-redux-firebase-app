import React, { Component } from 'react';

class SignUp extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSumbit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSumbit} className="white" autoComplete="off">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstname">Firstname:</label>
            <input type="text" id="firstname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Lastname:</label>
            <input type="text" id="lastname" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
