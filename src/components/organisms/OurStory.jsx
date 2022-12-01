import { View, StyleSheet } from 'react-native'
import React from 'react'
import { OurStoryTop } from '../molecules/ourStoryTop'
import { Texts } from '../atoms/headings'
//Fake API
import userProfileData from '../../assets/data/userProfileData'

const OurStory = () => {
  return (
    <View 
      style={styles.container}>
    {userProfileData.map((ourstoryinfo) =>
    
    <View
      key={ourstoryinfo.id}
      style={styles.subContainer}>
      <OurStoryTop/>
      <Texts
        numberOfLines={6} 
        style={styles.textStyles}
        texts={ourstoryinfo.content.description}/>
    </View>
    )}
   
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  subContainer:{
    flex: 1,
    marginHorizontal: 4,
    paddingHorizontal: 4,
    padding: 20,
    width: "100%",
    justifyContent:"space-evenly",
    backgroundColor:"#3D3D3D",
    borderRadius: 25,
  },
  textStyles:{
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
    padding: 40
  },
});

export { OurStory }