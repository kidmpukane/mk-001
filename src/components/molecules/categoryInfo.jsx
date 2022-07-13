import { View, Text } from 'react-native'
import React from 'react'
import { Texts } from '../atoms/headings'
//Fiz the counter in items

const CategoryInfo = (props) => {
  return (
    <View       
    style={{
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
      }}>

    <View>
    <Texts 
      texts="Furniture" 
      style={{
        color: "#000000", 
        fontWeight: "bold", 
        fontSize: 30}}/>
    </View>    

    <View style={{ }}>
    <Texts 
      texts="666 items" 
      style={{
        color: "#000000", 
        fontWeight: "bold", 
        fontSize: 15}}/>
  
</View>
</View>
  )
}

export {  CategoryInfo  }