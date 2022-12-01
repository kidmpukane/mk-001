import { View, StyleSheet, ScrollView, } from 'react-native'
import { Texts } from '../atoms/headings'
import React from 'react'
import { Images } from '../atoms/Images'
import reviewData from '../../assets/data/reviewData'


const ReviewCard = () => {
  return (
    <ScrollView horizontal style={reviewData.scrollView}>

    {reviewData.map((userInfo) =>     
    <View
      key={userInfo.id}
      style={styles.container}>

      <View 
        key={userInfo.id}
        style={styles.subContainer}>
      <Images 
        source={{uri: userInfo.image}}
        style={styles.imageStyles}/>
  
    <Texts
      texts={userInfo.user}
      style={styles.textStyles}/>
    </View>

    <Texts
      numberOfLines={8}
      style={styles.textStyles2}
      texts={userInfo.comment}
        />
    </View>
    
    )}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{  
    height: "100%",
    width: 300,
    textAlign: "center",
    marginHorizontal: 4,
    borderRadius: 35,
    backgroundColor:"#3D3D3D",
    padding: 20
      
    },
  subContainer:{ 
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',  
    
    },
  imageStyles:{
    height: 70,
    width: 70,
    borderRadius: 100
      },
  textStyles:{
    fontWeight:"bold",
    fontSize: 12,
    color: "#D9D9D9",
    padding: 5
    },
  textStyles2:{
    color: "#D9D9D9",
    fontSize: 12,
    padding: 20,

    },
  scrollView: {
    padding: 20,
  },
}) 

export { ReviewCard }