import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Share
} from 'react-native';
// import { Container, Tab, Tabs, Header } from 'native-base';
import Home from '../containers/home/home';
import Menu from '../containers/menu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {handleMenu} from '../actions/app-action'
// import Chart from '../containers/chart';
// import Performance from '../containers/performance';


/*const App = (props) => {
  console.log(props);
  
  return (

    <Container>
      <Tabs >
        <Tab heading="Left Menu" >
          <Menu  />
        </Tab>
        <Tab heading="Uponor" >
          <Home nav={props.navigator} />
        </Tab>
        
      </Tabs>
    </Container>
  )
}*/

class App extends React.Component{
  // _handleNavigationRequest() {
  //   this.refs.nav.push({
  //     component: Menu,
  //     title: 'Genius',
  //     passProps: { myProp: 'genius' },
  //   });
  // }
  constructor(){
    super();
    this.state = ({
      isMenuOpened : false
    })
  }
  _controlLeftMenu(event){
    // alert("Open left menu");
    event.preventDefault();
    this.state.isOpenMenu = !this.state.isMenuOpened;
    this.props.handleMenu(this.state.isMenuOpened);
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
    .catch((error) => this.setState({result: 'error: ' + error.message}));
  }
  
  render() {
    return (
      <NavigatorIOS
        ref='nav' 
        initialRoute={{
          component: Home,
          title: 'Uponor',
          passProps: {nav : this.refs.nav },
          leftButtonTitle: 'Menu',
          onLeftButtonPress: (event) => this._controlLeftMenu(event),
          rightButtonTitle: 'Share',
          onRightButtonPress: () => this._share(),
        }}
        
        style={{flex: 1}}
        barTintColor='#ffffcc'
      />
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({handleMenu},dispatch);
}
export default connect(null,mapDispatchToProps)(App);