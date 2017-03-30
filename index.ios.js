/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './src/reducers';
import App from './src/components/app';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
export default class ShareGraph extends Component {
  // _handleNavigationRequest() {
  //   this.refs.nav.push({
  //     component: App,
  //     title: 'Genius',
  //     passProps: { myProp: 'genius' },
  //   });
  // }
  /*render() {
    return (
      <NavigatorIOS
        ref='nav' 
        initialRoute={{
          component: App,
          title: 'Uponor',
          passProps: {nav : this.refs.nav},
          leftButtonTitle: 'Menu',
          onLeftButtonPress: () => this._handleNavigationRequest(),
          rightButtonTitle: 'Add',
          onRightButtonPress: () => this._handleNavigationRequest(),
        }}
        
        style={{flex: 1}}
        barTintColor='#ffffcc'
      />
    );
  }*/
  render(){
    return(
      <Provider store = {createStoreWithMiddleware(reducers)} >
        <App />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ShareGraph', () => ShareGraph);
