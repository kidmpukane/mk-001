import { View, Text } from 'react-native'
import React from 'react'
import { SocialMediaLinks } from '../molecules/socialMediaLinks'

const SocialMediaLinkBar = () => {
  return (
    <View style={{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        
        
      }}>
    <View
    style={{
      padding: 10,
      flexDirection: "row",
      backgroundColor:"#3D3D3D",
      borderRadius: 25,
    }}>
    <SocialMediaLinks/>
    </View>
    </View>
  )
}

export {SocialMediaLinkBar}