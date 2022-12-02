import React from 'react'
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { ProductImages } from '../components/atoms/Images'
import { CategoryCard } from '../components/molecules/categoryCard'
import {  ProductPageTop  } from '../components/molecules/productPageTop'

const ProductPage = ({ item, navigation }) => {
  return (
    <View 
    style={styles.container}>
      <View 
      style={styles.subContainer}>

    <ProductImages
      source={{ 
        uri: 'https://www.kolpaper.com/wp-content/uploads/2020/12/Rolex-Wallpaper-iPhone.jpg' }}
      style={styles.productImages}
    />

    </View>
    
    
    <ScrollView>
      <View
        style={styles.subScrollViewContainer}>
      <View
        style={styles.productPageContainer}>
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

const styles = StyleSheet.create({
  container:{   
    backGroundColor: '#292929',

},
  subContainer:{   
    backGroundColor: '#292929',
    width: '100%',
    height: 350,
    position: "absolute"
},
  productImages:{ 
    height: "100%",
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#292929",
    
       },

  subScrollViewContainer:{
    paddingTop: 300

    },

  productPageContainer:{
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#292929",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    height:"100%"
  },
})

export {  ProductPage  }

