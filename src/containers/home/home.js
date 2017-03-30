import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Dimensions, ListView } from 'react-native';
import {connect} from 'react-redux'
import ModuleButton from './module-button';

// const TYPE_MODULES = [{}]


const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#EFEFF4'
  },
  menuNote: {
    marginTop: 80,
    marginVertical: 20,
    paddingHorizontal: 8
  },
  cardListModule: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    
  },
  irappFooter: {
    // justifyContent: 'center', // Can't use ? Wrong?
    // alignItems: 'center',
  }
  
  
})
const LIST_MODULES = [
  {
    name: "Share Graph",
    index: 1
  },
  {
    name: "Historical Price",
    index: 2
  },
  {
    name: "Investment Calculator",
    index: 3
  },
  {
    name: "Press Releases",
    index: 4
  },
  {
    name: "Document Library",
    index: 5
  },
  {
    name: "Setting",
    index: 6
  }
]

const appFooter = "Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(LIST_MODULES),
    };
  }
  componentOnReceiveProps(){
    console.log(this.props)
  }
  componentDidChange(){
    console.log(this.props)
  }
  render() {
    return (
      <View style = {styles.footer}>
        <Text style={styles.menuNote}>
          Tap on the modules for more information. {"\n"}
          Use the menu to see all modules.
        </Text>
        <View style = {styles.cardListModule}>
          {
            LIST_MODULES.map((module) => <ModuleButton key = {module.index} name= {module.name} />)
          }
        </View>
        <Text style={styles.irappFooter}>
          {appFooter}
        </Text>
      </View>
      // {
      //   <Menu />
      // }
    )
  }
}
function mapStateToProps({isMenuOpened }){
  return {isMenuOpened};
}
export default connect(mapStateToProps)(Home);