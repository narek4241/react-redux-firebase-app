import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from 'react-redux-firebase';
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from 'redux-firestore';
import firebase, { firebaseConfig, rrfConfig } from './config/fbConfig';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
);

const rrfProps = {
  firebase,
  // #note prevly used firebaseConfig opt
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

// #note taken from doc v3.0.0 opt
function AuthIsLoaded({ children }) {
  // #note #syntax useSelector - allows to extract data from store state opt
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div></div>;
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
