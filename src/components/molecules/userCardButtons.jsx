import { View, StyleSheet } from 'react-native'
import React from 'react'
import { CustomButton, MessagingButton, CustomButton2 } from '../atoms/buttons'
import { atomicStyles } from '../atoms/atomicStyles';

const UserCardButtons = (props) => {
  return (
    <View 
      style={styles.container}>

      <View>
        <CustomButton 
          onPress={() => {console.log("Following");}} 
          title="follow"
          style={styles.customButton}/>
      </View>   

      <View>
        <CustomButton2 
          title="other stores"
          style={styles.customButton2}/>
      </View>

      <View>
        <MessagingButton/>
      </View>
     
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  customButton:{
    height: 40,
    width: 120, 
  },
  customButton2:{
    height: 40,
    width: 150,
    padding: 12,
    width: 150,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
  },


});

export { UserCardButtons}