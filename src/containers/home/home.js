import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ListView, PanResponder, TouchableOpacity, Dimensions } from 'react-native';
import { connect, ActionCreator } from 'react-redux'
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

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(IR_MODULES),
    };
    this._panResponder = {};
  }


  onModuleClick(event, name) {
    toggleMenu(true);
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

  render() {
    console.log(this.props)
    // if (this.props.isMenuOpened) return <Menu />
    // else 
    return (

      <View style={styles.footer} >
        <TouchableOpacity onPress={() => this._navigate()} style={{ backgroundColor: '#0077C0' }}>
          <Text style={{ marginTop: 20 }}>Menu</Text>
        </TouchableOpacity>
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
                  name={module.name}
                  onModuleClick={event => this.onModuleClick(event, module.name)}
                />
              )
            }
          </View>
          <Text style={styles.irappFooter}>
            {appFooter}
          </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ isMenuOpened }) => {
  return { isMenuOpened };
}
const mapDispatchToProps = (dispatch) => {
  bindActionCreators({
    changedState: toggleMenu
  }, dispatch)
}

Home.propTypes = {
  changedState: PropTypes.func
}

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);