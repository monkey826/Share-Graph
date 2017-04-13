import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Share,
  Dimensions,
  TouchableOpacity
} from 'react-native';
// import { Container, Tab, Tabs, Header } from 'native-base';
import Home from '../containers/home/home';
import Menu from '../containers/menu';
import { connect } from 'react-redux';
import { toggleMenu } from '../actions';

const styles = StyleSheet.create({
  leftMenu: {
    position: 'absolute',
    // left: Dimensions.get('window').width * 0.45,
    // right: 0,
    left: Dimensions.get('window').width * 0.45,
    // right: 0,
    // top: 0 ,
    // bottom: 0 ,
    // flex: 0.3,
    // top: Dimensions.get('window').height * 0.15,
    // bottom: Dimensions.get('window').height * 0.15,
    transform: [
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

  
  /*render() {
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
  }*/
  render() {
    let isMenuOpened = this.props.isMenuOpened;
    if (isMenuOpened) return (
      <View style = {{flex: 1, position: 'relative'}}>
          <View style = {{ flex: 1}}> 
            <Menu  />
          </View>
          <TouchableOpacity 
            onPress={ () => this.props.dispatch(toggleMenu(isMenuOpened))} 
            activeOpacity = {0.7}
            style = {styles.leftMenu}
          >
            <Home />
          </TouchableOpacity>
      </View>
    )
    else return (
      <Navigator
        ref='nav'
        initialRoute={{
        }}
        renderScene={(route, navigator) => (
            <Home />
        )}
        style={[{ flex: 1 }, isMenuOpened && styles.openLeftMenu]}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                { return (<LeftButton {...this.props}/>); },
              RightButton: (route, navigator, index, navState) =>
                { return (<Text>Done</Text>); },
              Title: (route, navigator, index, navState) =>
                { return (<Text>Hello, I'm Monkey</Text>); },
            }}
            style={{backgroundColor: 'gray'}}
          />
        }
      />
    )
  }
}
const LeftButton = (props) => {
  function _controlLeftMenu(event) {
    event.preventDefault();
    props.dispatch(toggleMenu(props.isMenuOpened));
  }
  return (
   <TouchableOpacity 
      onPress={(event) => _controlLeftMenu(event)} 
      style={{backgroundColor: '#ffffcc', }} 
    >
      <Text style={{ marginTop: 20 }}>Menu</Text>
    </TouchableOpacity>
  )
}

const mapStateToProps = ({home}) => {
  return {isMenuOpened : home.isMenuOpened};
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onToggleMenu: () => {
//       dispatch(toggleMenu(props.isMenuOpened))
//     }
//   }
// }
export default connect(mapStateToProps)(App);