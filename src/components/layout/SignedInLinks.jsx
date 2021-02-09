import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">Create Project</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={props.signOut}>
          Logout
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

// #note recommended using mapDispatchToProps as {}, (dispatches behind the scenes) doc opt
export default connect(null, { signOut })(SignedInLinks);
