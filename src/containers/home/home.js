import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, PanResponder, TouchableOpacity, Dimensions } from 'react-native';
// import { connect } from 'react-redux'
import ModuleButton from './module-button';
import Menu from '../menu';

// const TYPE_MODULES = [{}]

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#EFEFF4',
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
    console.log(this.props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      isMenuOpened:  this.props.isMenuOpened,
      dataSource: ds.cloneWithRows(LIST_MODULES),
    };
    this._panResponder = {};
  }

  componentWillMount() {
    console.log(this.props);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    })
  }
  componentOnReceiveProps() {
    console.log(this.props)
  }
  componentDidChange() {
    console.log(this.props)
  }
  _handleStartShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the circle?
    return true;
  }

  _handleMoveShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the circle?

    return true;
  }
  _handlePanResponderGrant(e: Object, gestureState: Object) {
    // console.log("PanResponderGrant ", gestureState)
  }
  _handlePanResponderMove(e: Object, gestureState: Object) {
    console.log("PanRespondermove ", gestureState);
  }
  _handlePanResponderEnd(e: Object, gestureState: Object) {
    console.log("PanResponderEnd ", gestureState);
  }
  openMenu() {
    // this.props.route.onLeftButtonPress{() => alert("a")}
  }
  render() {
    return (
        <View style={styles.footer} {...this._panResponder.panHandlers}>
          <View>
          <Text style={styles.menuNote}>
            Tap on the modules for more information. {"\n"}
            Use the menu to see all modules.
        </Text>
          <View style={styles.cardListModule}>
            {
              LIST_MODULES.map(module => <ModuleButton key={module.index} name={module.name} />)
            }
          </View>
          <Text style={styles.irappFooter}>
            {appFooter}
          </Text>
        </View>
        {this.state.isMenuOpened && <Menu />}
        </View>
    )
  }
}
// function mapStateToProps({isMenuOpened }){
//   return {isMenuOpened};
// }
export default Home;