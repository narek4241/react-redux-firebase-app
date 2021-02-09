const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null,
      };
    case 'LOGIN_ERROR':
      console.log('login failed');
      return {
        ...state,
        authError: `Login failed: ${action.payload.error}`,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;
    default:
      return state;
  }
};

export default authReducer;
