import { View, Text } from 'react-native'
import { Texts } from '../atoms/headings'
import React from 'react'
import { ReviewCardTop } from '../molecules/reviewCardTop'

const ReviewCard = () => {
  return (
    <View style={{
        flex: 1, 
        alignItems: "flex-start", 
        justifyContent: "space-between",
        marginLeft: 10,
        
        
      }}>
      <View
        style={{
     
          padding: 10,
          width: "25%",
          backgroundColor:"#3D3D3D",
          borderRadius: 25,
        }}>
      <ReviewCardTop/>
      <Texts
        style={{
          color: "#D9D9D9",
          fontSize: 12,
          fontWeight: "bold",
          padding: 20,
  
        }}
        texts=" Lorem ipsum dolor sit amet. Sed veniam voluptas 33 sequi voluptatem est distinctio magni! 
                Ut asperiores quia eum amet aliquid ut ullam amet. 
                Est omnis maxime sed enim velit est voluptas assumenda ut voluptate molestiae!"/>
      </View>
      </View>
  )
}

export { ReviewCard }