import { View, Text, StyleSheet, ScrollView, } from 'react-native'
import { Texts } from '../atoms/headings'
import React from 'react'
import { Images } from '../atoms/Images'
import { ReviewCardTop } from '../molecules/reviewCardTop'
import reviewData from '../../assets/data/reviewData'


const ReviewCard = () => {
  return (
    <ScrollView horizontal style={reviewData.scrollView}>

    {reviewData.map((userInfo) =>     
    <View
      key={userInfo.id}
      style={{  
        height: "100%",
        width: 300,
        textAlign: "center",
        marginHorizontal: 4,
        borderRadius: 35,
        backgroundColor:"#3D3D3D",
        padding: 20
          
        }}>

      <View 
        key={userInfo.id}
        style={{ 
            flex: 1,
            flexDirection: "row",
            alignItems: 'center',  
            
            }}>
      <Images 
        source={{uri: userInfo.image}}
        style={{
          height: 70,
          width: 70,
          borderRadius: 100
            }}/>
  
    <Texts
      texts={userInfo.user}
      style={{
        fontWeight:"bold",
        fontSize: 12,
        color: "#D9D9D9",
        padding: 5
        }}/>
    </View>

    <Texts
      numberOfLines={8}
      style={{
        color: "#D9D9D9",
        fontSize: 12,
        padding: 20,
  
        }}

        texts={userInfo.comment}
        />
    </View>)}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
}) 

export { ReviewCard }