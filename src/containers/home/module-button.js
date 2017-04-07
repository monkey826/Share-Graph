import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const widthDimension = Dimensions.get('window').width;

const styles = StyleSheet.create({
  moduleButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    width: widthDimension * 0.31,
    height: widthDimension * 0.31,
    marginBottom: 10,
    justifyContent: 'center',
    paddingHorizontal: 2,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  btnModuleText: {
    color: '#0B6AFF',
  }
})
class ModuleButton extends React.Component {
  constructor(props){
    super(props);
    this._openModule = this._openModule.bind(this);
  }
  _openModule(){
    console.log(this.props)
    // this.props.navigation.push({
    //   component : ShareGraph
    // })
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.moduleButton}
        onPress={this._openModule}
      >
        <Text style={styles.btnModuleText}>
          {this.props.name}
        </Text>
      </TouchableOpacity>
    )
  }
}



export default ModuleButton;