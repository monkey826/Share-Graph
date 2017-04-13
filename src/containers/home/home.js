import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ListView, PanResponder, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { toggleMenu } from '../../actions';
import ModuleButton from './module-button';
import Menu from '../menu';
import { bindActionCreators } from 'redux';

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
const IR_MODULES = [
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
const WINDOW_WIDTH = Dimensions.get("window").width;
class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(IR_MODULES),
    };
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: (e,gestureState) => this._handlePanResponderMove(e,gestureState),
      onPanResponderRelease: (e,gestureState) => this._handlePanResponderEnd(e,gestureState),
      onPanResponderTerminate: this._handlePanResponderEnd,
    })
    this._handlePanResponderEnd = this._handlePanResponderEnd.bind(this);
    this._handlePanResponderMove = this._handlePanResponderMove.bind(this);
  }
  // componentWillMount() {
  //   console.log(this.props);
    
  // }
  _handleStartShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the circle?
    return true;
  }

  _handleMoveShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the circle?

    return true;
  }
  // _handlePanResponderGrant(e: Object, gestureState: Object) {
  //   // console.log("PanResponderGrant ", gestureState)
  // }
  _handlePanResponderMove(e: Object, gestureState: Object) {
    console.log("PanRespondermove ", gestureState);

    let x0 = gestureState.x0;
    let moveX = gestureState.moveX;
    let y0 = gestureState.y0;
    let moveY = gestureState.moveY;
    if (!this.props.isMenuOpened){
      // Open left menu
      if (gestureState.x0 < 100 && moveX-x0 > 30) 
        this.props.dispatch(toggleMenu(this.props.isMenuOpened));
    }else {
      // close left menu
      if (x0 < WINDOW_WIDTH*0.75 && x0 - moveX > 30 && moveY - y0 <= 30) 
        this.props.dispatch(toggleMenu(this.props.isMenuOpened));
    }
  }
  _handlePanResponderEnd(e: Object, gestureState: Object) {
    console.log("PanResponderEnd ", gestureState);
      
  }

  onModuleClick(event, name) {
    // this.props.changedState(true);
    setTimeout(()=>{
      console.log("return");
      console.log(this.props.isMenuOpened);
    },1000);
    //event.preventDefault();
    // console.log(name)
    // alert(name)
    // bindA
  }
  _navigate() {
    this.props.navigator.push({
      name: 'Home', // Matches route.name
    })
  }
   _controlLeftMenu(event) {
    event.preventDefault();
    this.props.dispatch(toggleMenu(this.props.isMenuOpened));
  }
  render() {
    console.log(this.props)
    return (
      <View style={styles.footer} {...this._panResponder.panHandlers}>
        {this.props.isMenuOpened && 
          <TouchableOpacity 
            onPress={(event) =>this._controlLeftMenu(event)} 
            style={{backgroundColor: '#ffffcc', }} 
          >
            <Text style={{ marginTop: 20 }}>Menu</Text>
          </TouchableOpacity>
        }
        <View>
          <Text style={styles.menuNote}>
            Tap on the modules for more information. {"\n"}
            Use the menu to see all modules.
        </Text>
          <View style={styles.cardListModule}>
            {
              IR_MODULES.map(module =>
                <ModuleButton
                  key={module.index}
                  index={module.index}
                  name={module.name}
                  onModuleClick={event => this.onModuleClick(event, module.name)}
                />
              )
            }
          </View>
          {/*<View style={styles.cardListModule}>
            {
              IR_MODULES.map(module =>
                <ModuleButton
                  key={module.index}
                  name={module.name}
                  onModuleClick={event => this.onModuleClick(event, module.name)}
                />
              )
            }
          </View>
          <View style={styles.cardListModule}>
            {
              IR_MODULES.map(module =>
                <ModuleButton
                  key={module.index}
                  name={module.name}
                  onModuleClick={event => this.onModuleClick(event, module.name)}
                />
              )
            }
          </View>*/}
          <Text style={styles.irappFooter}>
            {appFooter}
          </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { isMenuOpened: state.home.isMenuOpened };
}

// const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     changedState: toggleMenu
//   }, dispatch)
// );

Home.propTypes = {
  changedState: PropTypes.func
}

// export default Home;
export default connect(mapStateToProps)(Home);