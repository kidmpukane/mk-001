import { View, StyleSheet } from 'react-native'
import React from 'react'
import { SocialMediaLinks } from '../molecules/socialMediaLinks'

const SocialMediaLinkBar = () => {
  return (
    <View>
    <View
    style={styles.container}>
    <SocialMediaLinks/>
    </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    backgroundColor:"#3D3D3D",
    borderRadius: 50,
  },
});

export {SocialMediaLinkBar}