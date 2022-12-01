import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { CategoryCard } from '../molecules/categoryCard'
import { Headings } from '../atoms/headings'

const HorizontalScroll = () => {
  return (
    <View
      style={styles.container}>
      <View
        style={styles.subContainer}>
      <Headings
        texts="Watches"
        style={styles.heading}/>
      <Headings
        texts="See All"/>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
 
          <View
            style={styles.categoryCardSubContainer}>
          <CategoryCard/>
          </View>
 
          <View
            style={styles.categoryCardSubContainer}>
          <CategoryCard/>
          </View>
 
          <View
            style={styles.categoryCardSubContainer}>
          <CategoryCard/>
          </View>
 
          <View
            style={styles.categoryCardSubContainer}>
          <CategoryCard/>
          </View>
 
          <View
            style={styles.categoryCardSubContainer}>
          <CategoryCard/>
          </View>
 
          <View
            style={styles.categoryCardSubContainer}>
          <CategoryCard/>
          </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  subContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,

  },
  categoryCardSubContainer: {
    width: "10%",
    flex: 1,
    height: 250
  },

});


export {  HorizontalScroll  }