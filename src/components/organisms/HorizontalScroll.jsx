import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

//Atoms
import { Headings } from '../atoms/headings'

//Molecules
import { CategoryCard } from '../molecules/categoryCard'

//Navigation
import { useNavigation } from '@react-navigation/native'

const HorizontalScroll = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>  {navigation.navigate("ProductPage")}}
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

    </TouchableOpacity>
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