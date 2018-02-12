import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import AppWithNavigationState from './App';
import { middleware } from './src/utils/redux';

const store = createStore(
  AppReducer,
  applyMiddleware(middleware),
);

class KeyakiReact extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('KeyakiReact', () => KeyakiReact);
