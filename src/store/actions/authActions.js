export const signIn = ({ email, password }) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', payload: { error } });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      });
  };
};

export const signUp = ({ email, password, firstname, lastname }) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    // #task shorten opt
    const fnameInitial = firstname ? firstname[0] : '';
    const lnameInitial = lastname ? lastname[0] : '';
    const initials = fnameInitial + lnameInitial;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firestore.collection('users').doc(res.user.uid).set({
          firstname,
          lastname,
          initials,
        });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch((error) => {
        dispatch({ type: 'SIGNUP_ERROR', payload: { error } });
      });
  };
};
