import { View } from 'react-native'
import React from 'react'
import { PrimaryLinkButton, SecondaryLinkButton } from '../atoms/links'

const SocialMediaLinks = () => {

    return (
      <View style={{
        flex: 1, 
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,

        
      }}>
        <View><SecondaryLinkButton label="facebook"/></View>
        <View><SecondaryLinkButton label="instagram"/></View>
        <View><SecondaryLinkButton label="web"/></View>
        <View><PrimaryLinkButton label="twitter"/></View>
      
    </View>
    )
  }


export {  SocialMediaLinks  }