import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View,  Dimensions ,Image, ImageEditor } from 'react-native'

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
  },
  settingsLogo: {
    width: 68,
    height: 68,
    overflow: 'hidden',
  },
  img: {
    position: 'relative',
    top: -471,
    left: -340
  }
})
const ModuleButton = ({index,name,onModuleClick}) => {
  console.log(index)
  return (
    <TouchableOpacity
      style={styles.moduleButton}
      onPress={onModuleClick}
    >
      {index == 6 ? 
        <View style = {styles.settingsLogo}> 
          <Image style= {styles.img}
            source={ require ('../../../company/ipad@2x.png')       }
          />
        </View>
        : <Text style = {styles.btnModuleText}>
            {name}
          </Text>
      }
    </TouchableOpacity>
  )
}

export default ModuleButton;