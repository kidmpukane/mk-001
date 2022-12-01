import { View, StyleSheet } from 'react-native'
import { ProductImages } from '../atoms/Images'
import { Headings, Texts } from '../atoms/headings'
import React from 'react'

const CategoryCard = (props) => {
  return (
    <View   
      style={styles.container}>
      <View 
      style={styles.subContainer}>
    <ProductImages
      source={{ 
        uri: 'https://cdn.shopify.com/s/files/1/0662/2047/products/ceramic-rolex-daytona-olive-rubber-strap_800x.jpg?v=1599520445' }}
      style={styles.productImage}
    />
    </View>

    <View
      style={styles.textSubContainer}>
    <Headings 
      texts="Rolex OysterFlex Daytona"
      style={[styles.heading, props.style]}/>
    <Headings 
      texts="Rose Gold/Green Band"
      style={[styles.heading2, props.style]}/>
    <Texts 
      texts="$4750.90"
      style={[styles.textStyles,props.style]}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "column",
    margin: 20,
  },
  subContainer:{
    width: '100%',
    height: 270,
  },
  productImage:{
    height: "100%",
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#292929"
  },
  textSubContainer:{
    width: "100%",
    padding: 10
  },
  heading:{
    fontSize: 20,
    width: "100%"
  },
  heading2:{
    fontSize: 15,
    width: "100%"
  },
  textStyles:{
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },
})

export {  CategoryCard  }