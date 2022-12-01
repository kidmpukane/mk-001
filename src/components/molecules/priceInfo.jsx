import { View}  from 'react-native';
import { StyleSheet } from 'react-native-web';
import React from 'react';
import { Texts } from '../atoms/headings';

const PriceInfo = () => {
  return (
    <View       
    style={styles.container}>

    <View>
    <Texts 
      texts="South African Collage Painting" 
      style={styles.textStyles}/>
    </View>    

    <View>
    <Texts 
      texts="$120.30" 
      style={styles.textStyles2}/>
  
</View>
</View>
  )
};

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  textStyles:{
    color: "#D9D9D9", 
    fontWeight: "bold", 
    fontSize: 20
  },
  textStyles2:{

    color: "#D9D9D9", 
    fontWeight: "normal", 
    fontSize: 15
  }
})

export {  PriceInfo  } 