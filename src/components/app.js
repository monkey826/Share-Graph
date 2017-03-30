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
  _openLeftMenu(){
    alert("Open left menu");
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
          passProps: {nav : this.refs.nav},
          leftButtonTitle: 'Menu',
          onLeftButtonPress: () => this._openLeftMenu(),
          rightButtonTitle: 'Share',
          onRightButtonPress: () => this._share(),
        }}
        
        style={{flex: 1}}
        barTintColor='#ffffcc'
      />
    );
  }
}

export default App;