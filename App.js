import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import Todo from './src/todo';

/*
  a single store in a Redux application.
  
  The Store is the object that brings them together. The store has the following responsibilities:

    Holds application state;
    Allows access to state via getState();
    Allows state to be updated via dispatch(action);
    Registers listeners via subscribe(listener);
    Handles unregistering of listeners via the function returned by subscribe(listener).
 */
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
