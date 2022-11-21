import React from 'react'
import { View } from 'react-native'
import {  Images  } from '../atoms/Images'
import { Texts } from '../atoms/headings'
import { StarsCounter } from './starsCounter'
import reviewData from '../../assets/data/reviewData';

const ReviewCardTop = () => {
  return (
    <View>
      {reviewData.map((username) =>  
    <View 
        key={username.id}
        style={{ 
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: 'center',  
            
            }}>
        <Images 
          source={{uri: username.image}}
          style={{
            height: 70,
            width: 70,
            borderRadius: 100
            }}/>
  
    <Texts
      texts={username.user}
      style={{
        fontWeight:"bold",
        fontSize: 12,
        color: "#D9D9D9",
        padding: 5
        }}/>
    <StarsCounter/>
    </View>)}
    </View>
  )
}

export {  ReviewCardTop  }