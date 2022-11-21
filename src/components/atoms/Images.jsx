import React from 'react'
import { 
    Text, 
    View,
    Image,
    StyleSheet  } from 'react-native'

const Images = (props) => {

    return (
      <View>
        <Image 
            style={[styles.profilePicLogo, props.style]}
            source={props.source}/>
      </View>
    )
  }

  const ProductImages = (props) => {  

    return (
      <View>
        <Image 
            style={props.style}
            source={props.source}/>
      </View>
    )
  }


  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    profilePicLogo: {
      width: 134,
      height: 122,
      borderRadius: 20,
    },
    reviewLogo: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
    tinyLogo: {
      width: 100,
      height: 100,
      borderRadius: 20,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
  
export {  Images, ProductImages }