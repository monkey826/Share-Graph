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
import {createStore, applyMiddleware, combineReducers} from 'redux';
// import ReduxPromise from 'redux-promise';
// import reducers from './src/reducers';
import irApp from './src/reducers';
import App from './src/components/app';
// import thunk from 'redux-thunk';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import appReducer from './reducers/appReducer';

// const middleware = applyMiddleware(thunk);


// export  (data = {}) => {
//     const rootReducer = combineReducers({appGlobalState: appReducer});

//     return createStore(rootReducer, data, middleware);
// }
const store = createStore(irApp);
store.dispatch({type: "TOGGLE_MENU",isMenuOpened: true});
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
