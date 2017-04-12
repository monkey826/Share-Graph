/*import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Share,
  Dimensions
} from 'react-native';
// import { Container, Tab, Tabs, Header } from 'native-base';
import Home from '../containers/home/home';
import Menu from '../containers/menu';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions';

const styles = StyleSheet.create({
  openLeftMenu: {
    transform: [
      { translateX: Dimensions.get('window').width * 0.7 },
      { scale: 0.7 },
    ],
  },
})
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = ({
      isMenuOpened: false
    })
  }
  _controlLeftMenu(event) {
    event.preventDefault();
    this.setState(prevState => ({
      isMenuOpened: !prevState.isMenuOpened
    }));
    this.props.dispatch(toggleMenu(!this.state.isMenuOpened));
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

  renderScene(route, navigator) {
    if (route.name == 'Main') {
      return <Main navigator={navigator} />
    }
    if (route.name == 'Home') {
      return <Home navigator={navigator} />
    }
  }
  configureScene(route, routeStack) {
    return Navigator.SceneConfigs.PushFromRight
  }
  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        style={{ flex: 1 }}
        initialRoute={{ name: 'Home', title: 'Awesome Scene', index: 0 }}
        renderScene={this.renderScene}
      />
    );
  }
  /*render() {
    if (this.state.isMenuOpened) return (<Menu /> )
    else return (
      <Navigator
        ref='nav'
        initialRoute={{
          component: Home,
          title: 'Uponor',
          leftButtonTitle: 'Menu',
          onLeftButtonPress: (event) => this._controlLeftMenu(event),
          rightButtonTitle: 'Share',
          onRightButtonPress: () => this._share(),
        }}
        renderScene={(route, navigator) =>
          <Home />
        }
        style={[{ flex: 1 }, this.state.isMenuOpened && styles.openLeftMenu]}
        barTintColor="#ffffcc"
      />
    )
  }*/
}

export default connect()(App);*/