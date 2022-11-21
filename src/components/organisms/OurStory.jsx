import { View, Text } from 'react-native'
import React from 'react'
import { OurStoryTop } from '../molecules/ourStoryTop'
import { Texts } from '../atoms/headings'
//Fake API
import userProfileData from '../../assets/data/userProfileData'

const OurStory = () => {
  return (
    <View style={{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      
    }}>
    {userProfileData.map((ourstoryinfo) =>
    
    <View
      key={ourstoryinfo.id}
      style={{
        flex: 1,
        marginHorizontal: 4,
        paddingHorizontal: 4,
        padding: 20,
        width: "100%",
        justifyContent:"space-evenly",
        backgroundColor:"#3D3D3D",
        borderRadius: 25,
      }}>
      <OurStoryTop/>
      <Texts
        numberOfLines={6} 
        style={{
          color: "#D9D9D9",
          fontSize: 12,
          fontWeight: "bold",
          padding: 40,



      }}
        texts={ourstoryinfo.content.description}/>
    </View>
    )}
   
    </View>
  )
}

export { OurStory }