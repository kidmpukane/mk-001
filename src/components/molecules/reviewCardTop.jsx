import React from 'react'
import { View } from 'react-native'
import {  Images  } from '../atoms/Images'
import { Texts } from '../atoms/headings'
import { StarsCounter } from './starsCounter'

const ReviewCardTop = () => {
  return (
    <View 
        style={{ 
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: 'center',  }}>
        <Images 
            style={{
                height: 70,
                width: 70,
                borderRadius: 100
            }}/>
    <Texts 
      texts="@test001clothing"
      style={{
        fontWeight:"bold",
        fontSize: 12,
        color: "#D9D9D9",
        padding: 5
        }}/>
    <StarsCounter/>
    </View>
  )
}

export {  ReviewCardTop  }