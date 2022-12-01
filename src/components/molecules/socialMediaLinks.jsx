import { View, StyleSheet } from 'react-native'
import React from 'react'
import { PrimaryLinkButton, SecondaryLinkButton } from '../atoms/links'

const SocialMediaLinks = () => {

    return (
      <View style={styles.container}>
        <View><SecondaryLinkButton label="facebook"/></View>
        <View><SecondaryLinkButton label="instagram"/></View>
        <View><SecondaryLinkButton label="web"/></View>
        <View><PrimaryLinkButton label="twitter"/></View>
    </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 10, 
    },
  });


export {  SocialMediaLinks  }