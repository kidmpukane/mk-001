import { View, Text } from 'react-native'
import { ProductImages } from '../atoms/Images'
import { Headings, Texts } from '../atoms/headings'
import React from 'react'

const CategoryCard = (props) => {
  return (
    <View   
      style={{
  
        flexDirection: "column",
        margin: 20,

    }}>
      <View 
      style={{   
        width: '100%',
        height: 270,
    }}>
    <ProductImages
      source={{ 
        uri: 'https://cdn.shopify.com/s/files/1/0662/2047/products/ceramic-rolex-daytona-olive-rubber-strap_800x.jpg?v=1599520445' }}
      style={{ 
        height: "100%",
        width: "100%",
        borderRadius: 20,
        backgroundColor: "#292929"
           }}
    />
    </View>

    <View
      style={{
    
        width: "100%",
        padding: 10

      }}>
    <Headings 
      texts="Rolex OysterFlex Daytona"
      style={[{
        fontSize: 20,
        width: "100%"
      }, props.style]}/>
    <Headings 
      texts="Rose Gold/Green Band"
      style={[{
        fontSize: 15,
        width: "100%"
      }, props.style]}/>
    <Texts 
      texts="$4750.90"
      style={[{
        color: "#D9D9D9",
        fontSize: 12,
        fontWeight: "bold",

      },props.style]}/>
    </View>
    </View>
  )
}

export {  CategoryCard  }