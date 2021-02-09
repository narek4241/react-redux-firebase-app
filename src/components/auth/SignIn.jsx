import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSumbit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSumbit} className="white" autoComplete="off">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign In</button>
            <div className="red-text text-darken-3 center">
              {authError ? authError : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (creds) => {
    dispatch(signIn(creds));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
