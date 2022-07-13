import { View, Text } from 'react-native'
import React from 'react'
import { Texts } from '../atoms/headings'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const StarsCounter = () => {
  return (
    <View       
    style={{
    flex: 0.5,
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: "center"
      }}>

    <View><Texts texts="5.0" style={{color: "#D9D9D9", fontWeight: "bold"}}/></View>    
    
    <View style={{
       
      flexDirection: "row",
      justifyContent: "center",
      alignItems: 'center', 
    
  }}>
  
      <MaterialCommunityIcons name="star" style={{color: "#D9D9D9"}}/>
      <MaterialCommunityIcons name="star" style={{color: "#D9D9D9"}}/>
      <MaterialCommunityIcons name="star" style={{color: "#D9D9D9"}}/>
      <MaterialCommunityIcons name="star" style={{color: "#D9D9D9"}}/>
      <MaterialCommunityIcons name="star" style={{color: "#D9D9D9"}}/>
  
</View>
</View>
  )
}

export {StarsCounter}