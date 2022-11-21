import { 
    View, 
    Text,
    StyleSheet } from 'react-native'
import React from 'react'
import { Texts, Headings } from '../atoms/headings'
import { Images } from '../atoms/Images'
import Icon from 'react-native-vector-icons/FontAwesome';
import userProfileData from '../../assets/data/userProfileData';

const UserCardInfo = () => {
  return (
    
<View>
  {userProfileData.map((userInfo) =>
        <View
          key={userInfo.id}
          style={
            cardStyles.cardImage}>
          <Images
            source={{uri: userInfo.content.imageProfilePicture}}/>
      
            <View 
              style={
                cardStyles.cardText}>
          
            <Headings
              texts={userInfo.content.userName}
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#D9D9D9"
              }}/>
  
            <Texts 
              texts={userInfo.content.userNameId}
              style={{
                paddingTop: 5,
                fontSize: 15,
                color: "#D9D9D9"
             }}/>
  
      </View>
      </View>)}
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