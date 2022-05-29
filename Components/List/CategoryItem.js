import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/colors'
import { Dimensions, useWindowDimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoryItem = ({category}) => {

  const {width, height} = useWindowDimensions();


  return (
    <View style={{...styles.container, 
      maxWidth: 0.43 * width,
      maxHeight: 0.43 * width,
      margin: width < 330 ? 10: 15,
    }}>
      <Text style={styles.text}>{category.category}</Text>
    </View>
  )
}

export default CategoryItem

const styles = {
  container: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: colors.regularBlue,
    borderRadius: 0,
  },
  text: {
    fontSize: 18,
    fontFamily: 'LatoRegular',
    color: 'white',
    fontWeight: 'bold',
  }
}