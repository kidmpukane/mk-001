import { View, Text } from 'react-native'
import React from 'react'
import { OurStoryTop } from '../molecules/ourStoryTop'
import { Texts } from '../atoms/headings'

const OurStory = () => {
  return (
    <View style={{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      
      
    }}>
    <View
      style={{
        flex: 1,
        paddingBottom: 30,
        paddingTop: 30,
        width: "100%",
        justifyContent:"space-evenly",
        backgroundColor:"#3D3D3D",
        borderRadius: 25,
      }}>
    <OurStoryTop/>
    <Texts
      style={{
        color: "#D9D9D9",
        fontSize: 12,
        fontWeight: "bold",
        padding: 40,

      }}
      texts=" Lorem ipsum dolor sit amet. Sed veniam voluptas 33 sequi voluptatem est distinctio magni! 
              Ut asperiores quia eum amet aliquid ut ullam amet. 
              Est omnis maxime sed enim velit est voluptas assumenda ut voluptate molestiae!"/>
    </View>
    </View>
  )
}

export { OurStory }