import { View, TouchableHighlight, Text } from 'react-native'
import { ProductImages } from '../atoms/Images'
import { CategoryInfo } from '../molecules/categoryInfo'
import React from 'react'
import { StyleSheet } from 'react-native'


const CollectionLink = (props) => {
  return (
    <View       
    style={styles.container}>
    <View style={styles.section}>
  <TouchableHighlight onPress={props.onPress}>
    <ProductImages
      source={props.source}
      style={styles.productImage}
    />
  
  </TouchableHighlight>
  <View style={styles.categoryInfoContainer}>
  <CategoryInfo
    headingTexts={props.headingTexts}
    subTexts={props.subTexts}/>
  </View>
</View>
</View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: "center",
  },
  section:{
    width: '100%',
    height: 350,
  },
  productImage:{
    height: "100%",
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#292929"
  },
  categoryInfoContainer:{
    position: "absolute", 
    paddingTop: 250
  },
});


export {  CollectionLink  }