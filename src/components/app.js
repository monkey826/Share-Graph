import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Share,
  Dimensions
} from 'react-native';
// import { Container, Tab, Tabs, Header } from 'native-base';
import Home from '../containers/home/home';

const styles = StyleSheet.create({
  openLeftMenu: {
    transform: [
      { translateX: Dimensions.get('window').width * 0.7 },
      { scale: 0.7 },
    ],


  },
})
class App extends React.Component {
  // _handleNavigationRequest() {
  //   this.refs.nav.push({
  //     component: Menu,
  //     title: 'Genius',
  //     passProps: { myProp: 'genius' },
  //   });
  // }
  constructor() {
    super();
    this.state = ({
      isMenuOpened: false
    })
  }
  _controlLeftMenu(event) {
    // alert("Open left menu");
    event.preventDefault();
    this.setState(prevState => ({
      isMenuOpened: !prevState.isMenuOpened 
    }));
    // this.props.handleMenu(this.state.isMenuOpened);
  }
  _share() {
    Share.share({
      message: 'A framework for building native apps using React',
      url: 'http://facebook.github.io/react-native/',
      title: 'React Native'
    }, {
        dialogTitle: 'Share React Native website',
        excludedActivityTypes: [
          // 'com.apple.UIKit.activity.PostToTwitter'
        ],
        tintColor: 'green'
      })
      .then(this._showResult)
      .catch((error) => this.setState({ result: 'error: ' + error.message }));
  }
  openHome(){
    // this.state.isMenuOpened = false
  }
  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: Home,
          title: 'Uponor',
          passProps: { nav: this.refs.nav, isMenuOpened: this.state.isMenuOpened },
          leftButtonTitle: 'Menu',
          onLeftButtonPress: (event) => this._controlLeftMenu(event),
          rightButtonTitle: 'Share',
          onRightButtonPress: () => this._share(),
        }}
        onClick = {() => this.openHome()}
        style={[{ flex: 1 }, this.state.isMenuOpened && styles.openLeftMenu]}
        barTintColor='#ffffcc'
      />
    );
  }
}

export default App;