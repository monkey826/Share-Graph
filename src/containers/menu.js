import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView, Image, TouchableOpacity,Dimensions } from 'react-native'
import {connect} from 'react-redux';
// const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#0077C0',
    paddingLeft: 30
    
  },
  logo: {
    width: 50,
    height: 50
  },
  login: {
    position: 'absolute',
    right: 0,
    top: 30
  },
  settings:{
    position: 'absolute',
    right: 0,
    bottom: 30,
    height: '4%',
    backgroundColor: 'transparent',

  },
  settingsLogo: {
    
    width: 27,
    height: 27
  },
  detailModules: {
    paddingBottom: 10,
    flex: 1
  },
  listModules: {
    marginRight: '25%',
  },
  text: {
    color: '#fff',
    alignSelf: 'stretch',
    paddingVertical: 5,
  }
})
// const LISTNAME_MODULES = [
//   "Share Graph",
//   "Share Information",
//   "Historical Price",
//   "Investment Calculator",
//   "Key Financials "
// ]


class Menu extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(LIST_MODULES),
    };
  }
  _onPressButton(event) {
    // event.preventDefault();
    alert("hightlight");
  }
  _renderRow(rowData) {
    return (
      <TouchableOpacity 
        style={styles.detailModules}
        onPress = {this._onPressButton}
      >
        <Text style={styles.text} numberOfLines ={1} >
          {rowData.name}
        </Text>
      </TouchableOpacity>
    )

  }
  render() {
    return (
      <View style={styles.menu} >
        <Image
          style={styles.logo}
          source={require('../../company/logo/logo3x.png')}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>  this._renderRow(rowData) }
          style = {styles.listModules}
        />
        <TouchableOpacity 
          onPress={this._onPressButton}
          style = {styles.login}
        >
          <Text style = {styles.text}>
            Login
          </Text>
        </TouchableOpacity>
        <Text>{"\n"}</Text>
        <TouchableOpacity 
          onPress={this._onPressButton}
          style = {styles.settings}
        >
          <Image 
            style = {styles.settingsLogo}
            source={require('../../company/Settings-27.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }

}
export default Menu;

const LIST_MODULES = [
  {
    name: "Share Graph",
    index: 1
  },
  {
    name: "Share Information",
    index: 2
  },
  {
    name: "Historical Price",
    index: 3
  },
  {
    name: "Investment Calculator",
    index: 4
  },
  {
    name: "Key Financials ",
    index: 5
  }, 
  {
    name: "Press Realeases",
    index: 6
  }, 
  {
    name: "Financial Calendar",
    index: 7
  }
]

// function mapStateToProps({ isMenuOpen }) {
//     return { isMenuOpen: isMenuOpen };
// }

// export default connect(mapStateToProps)(Menu);