import { View, TouchableHighlight, Text } from 'react-native'
import { ProductImages } from '../atoms/Images'
import { CategoryInfo } from '../molecules/categoryInfo'
import React from 'react'


const CollectionLink = () => {
  return (
    <View       
    style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: "center",
    
      }}>
    <View style={{        
            width: '100%',
            height: 350,
}}>
  <TouchableHighlight onPress={() => console.log('pressed')}>
    <ProductImages
      source={{ 
          uri: 'http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg' }}
      style={{ 
        height: "100%",
        width: "100%",
        borderRadius: 20,
        backgroundColor: "#292929"
           }}
    />
  
  </TouchableHighlight>
  <View style={{
          position: "absolute", 
          paddingTop: 250
          
          }}>
  <CategoryInfo/>
  </View>
</View>
</View>
  )
}

export {  CollectionLink  }