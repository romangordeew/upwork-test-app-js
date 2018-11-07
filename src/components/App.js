import React from 'react';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/es/integration/react';
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import {persistStore} from 'redux-persist';

import reducer from '../reducers';

import MainScreen from '../components/MainScreen'

const store = createStore(
  reducer,
  undefined,
  compose(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainScreen/>
        </PersistGate>
      </Provider>
    );
  }
}
