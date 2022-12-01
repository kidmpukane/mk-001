import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Texts } from '../atoms/headings'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import reviewData from '../../assets/data/reviewData';



const StarsCounter = () => {
  return (
    <View       
      style={styles.container}>
    <View>
      {reviewData.map((counter)  =>
        <Texts 

          key={counter.id}
          texts={counter.rating} 
          style={styles.textStyles}/>
      )}
    </View>    
    
    <View 
      style={styles.subContainer}>
  
      <MaterialCommunityIcons name="star" style={{color: "#D9D9D9"}}/>
      <MaterialCommunityIcons name="star" style={{color: "#D9D9D9"}}/>
      <MaterialCommunityIcons name="star" style={{color: "#D9D9D9"}}/>
      <MaterialCommunityIcons name="star" style={{color: "#D9D9D9"}}/>
      <MaterialCommunityIcons name="star" style={{color: "#D9D9D9"}}/>
  
</View>
</View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 0.5,
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: "center"
  },
  textStyles:{
    color: "#D9D9D9", 
    fontWeight: "bold"
  },
  subContainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center', 
  },
});

export {StarsCounter}