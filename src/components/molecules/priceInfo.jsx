import { View, Text } from 'react-native'
import React from 'react'
import { Texts } from '../atoms/headings'

const PriceInfo = () => {
  return (
    <View       
    style={{
    
    justifyContent: 'center',
    marginHorizontal: 16,
      }}>

    <View>
    <Texts 
      texts="South African Collage Painting" 
      style={{
        color: "#D9D9D9", 
        fontWeight: "bold", 
        fontSize: 20}}/>
    </View>    

    <View style={{ }}>
    <Texts 
      texts="$120.30" 
      style={{
        color: "#D9D9D9", 
        fontWeight: "normal", 
        fontSize: 15}}/>
  
</View>
</View>
  )
}

export {  PriceInfo  } 