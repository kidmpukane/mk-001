import { 
    View, 
    Text,
    StyleSheet } from 'react-native'
import React from 'react'
import { Texts, Headings } from '../atoms/headings'
import { Images } from '../atoms/Images'
import Icon from 'react-native-vector-icons/FontAwesome';

const UserCardInfo = () => {
  return (
    <View
      style={cardStyles.cardImage}>
    <Images/>
    
    <View 
      style={cardStyles.cardText}>
        <Texts 
      texts="@test001clothing"
      style={{
        fontWeight:"bold",
        fontSize: 10,
        color: "#D9D9D9"
        }}/>
        <Text
      style={cardStyles.title}>
    <Icon name="map-pin"/>
    Bikini Bottom
    </Text>
    <Headings
      texts="test001.c l o t h i n g."/>

    

    </View>

    </View>
  )
}

const cardStyles = StyleSheet.create({
  cardImage: {
    flexDirection: "row",
    paddingLeft: 10
  },
  cardText:{
    paddingLeft: 50,
    justifyContent: "center"
  },
  title: {
    lineHeight: 30,
    color: "#D9D9D9"

  },
});


export { UserCardInfo }