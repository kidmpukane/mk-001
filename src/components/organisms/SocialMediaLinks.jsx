import { View, Text } from 'react-native'
import React from 'react'
import { SocialMediaLinks } from '../molecules/socialMediaLinks'

const SocialMediaLinkBar = () => {
  return (
    <View>
    <View
    style={{

      flexDirection: "row",
      backgroundColor:"#3D3D3D",
      borderRadius: 50,
    }}>
    <SocialMediaLinks/>
    </View>
    </View>
  )
}

export {SocialMediaLinkBar}