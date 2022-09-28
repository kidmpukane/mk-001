import React from 'react'
import { View, Text, ScrollView, ImageBackground } from 'react-native'
import { ProductImages } from '../components/atoms/Images'
import { CategoryCard } from '../components/molecules/categoryCard'
import {  ProductPageTop  } from '../components/molecules/productPageTop'

const ProductPage = ({ item, navigation }) => {
  return (
    <View>
      <View 
      style={{   

        width: '100%',
        height: 350,
        position: "absolute"
    }}>

    <ProductImages
      source={{ 
        uri: 'https://www.kolpaper.com/wp-content/uploads/2020/12/Rolex-Wallpaper-iPhone.jpg' }}
      style={{ 
        height: "100%",
        width: "100%",
        borderRadius: 20,
        backgroundColor: "#292929",
        
           }}
    />

    </View>
    
    
    <ScrollView>
      <View
        style={{
          paddingTop: 300
          }}>
      <View
        style={{
          flex: 1,
          padding: 20,
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#292929",
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          width: "100%",
          height:"100%"
        }}>
    <View><ProductPageTop/></View>
    <View><CategoryCard/></View>
    <View><CategoryCard/></View>
    <View><CategoryCard/></View>
    <View><CategoryCard/></View>
    <View><CategoryCard/></View>
    <View><CategoryCard/></View>
        

    </View>
    </View>
    </ScrollView>
    </View>
  )
}

export {  ProductPage  }

