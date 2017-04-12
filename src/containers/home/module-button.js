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
const ModuleButton = ({name,onModuleClick}) => {
  return (
    <TouchableOpacity
      style={styles.moduleButton}
      onPress={onModuleClick}
    >
      <Text style={styles.btnModuleText}>
        {name}
      </Text>
    </TouchableOpacity>
  )
}

export default ModuleButton;