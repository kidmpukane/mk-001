import React from 'react'
import { View, StyleSheet } from 'react-native'
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
        style={styles.container}>
        <Images 
          source={{uri: username.image}}
          style={styles.imageStyles}/>
  
    <Texts
      texts={username.user}
      style={styles.textStyles}/>
    <StarsCounter/>
    </View>)}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center',  
  },
  imageStyles: {
    height: 70,
    width: 70,
    borderRadius: 100
  },
  textStyles: {
    fontWeight:"bold",
    fontSize: 12,
    color: "#D9D9D9",
    padding: 5
  },
});

export {  ReviewCardTop  }