/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// import ReduxPromise from 'redux-promise';
// import reducers from './src/reducers';
import irApp from './src/reducers';
import App from './src/components/app';

const store = createStore(irApp);
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default class ShareGraph extends Component {
  render(){
    return(
      <Provider store = {store}>
        <App />
      </Provider>
    )
  }
}


AppRegistry.registerComponent('ShareGraph', () => ShareGraph);
