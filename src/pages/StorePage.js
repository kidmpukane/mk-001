import { View, StyleSheet, ScrollView } from 'react-native'
import {  CollectionLink  } from '../components/organisms/CollectionLink'

import React from 'react'

const StorePage = () => {

  return (
    <ScrollView 
        style={styles.container}
        nestedScrollEnabled = {true}>
        <View
            style={styles.subContainer}>
        <CollectionLink
                
            headingTexts="WOMENS"
            subTexts="CLOTHING"
            onPress={() => console.log('pressed')}
            source={{
                uri:'http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg' 
            }}
/>
        </View>
        <View
            style={styles.subContainer}>
        <CollectionLink
                
            headingTexts="MENS"
            subTexts="CLOTHING"
            onPress={() => console.log('Oh No pressed')}
            source={{
                uri:'http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg' 
            }}
/>
        </View>
        <View
            style={styles.subContainer}>
        <CollectionLink
                
            headingTexts="KIDS"
            subTexts="CLOTHING"
            onPress={() => console.log('pressed')}
            source={{
                uri:'http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg' 
            }}
/>
        </View>

    </ScrollView>
  )
}

const MenPage = () => {
  return (
    <ScrollView nestedScrollEnabled = {true}>
        <View
            style={styles.subContainer}>
        <CollectionLink/>
        </View>
        <View
            style={styles.subContainer}>
        <CollectionLink/>
        </View>
        <View
            style={styles.subContainer}>
        <CollectionLink/>
        </View>


    </ScrollView>
  )
}

const WomenPage = () => {
  return (
    <ScrollView nestedScrollEnabled = {true}>

        <View
            style={styles.subContainer}>
        <CollectionLink/>
        </View>
        <View
            style={styles.subContainer}>
        <CollectionLink/>
        </View>
        <View
            style={styles.subContainer}>
        <CollectionLink/>
        </View>
        <View
            style={styles.subContainer}>
        <CollectionLink/>
        </View>
        <View
            style={styles.subContainer}>
        <CollectionLink/>
        </View>
        <View
            style={styles.subContainer}>
        <CollectionLink/>

        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#292929",
    },
    subContainer:{
        paddingTop: 10,
        paddingBottom: 10
    },
})

export {  StorePage,  WomenPage, MenPage } 