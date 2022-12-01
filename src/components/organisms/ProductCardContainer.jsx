import { View, StyleSheet } from 'react-native'
import { CategoryCard } from '../molecules/categoryCard'
import React from 'react'

const ProductCardContainer = () => {
  return (
    <View
        style={styles.container}>
    <View
        style={styles.subContainer}>
    
    <View
        style={styles.categoryCardContainer}>
    <CategoryCard
        style={styles.categoryCard}/>
    </View>
    
    <View
        style={styles.categoryCardContainer}>
    <CategoryCard
        style={styles.categoryCard}/>
    </View>

    </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  subContainer:{
    padding: 20,
    backgroundColor: "#292929",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: "100%",
    height:"100%"
  },
  categoryCardContainer:{
    width: "40%",
    height: 100,
  },
  categoryCard:{
    fontSize: 10
  },
});

export { ProductCardContainer }