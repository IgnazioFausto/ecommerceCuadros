import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../Styles/colors'

const CategoryItem = ({category}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category.category}</Text>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    backgroundColor: colors.regularBlue,
    margin: 15,
    borderRadius: 10,
     shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.37,
        shadowRadius: 10,
        elevation: 5,
  },
  text: {
    fontSize: 18,
    fontFamily: 'LatoRegular',
    color: colors.white,
    
  }
})