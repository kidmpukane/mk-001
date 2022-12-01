import React from 'react'
import {CustomButton} from '../atoms/buttons'
import { 
  View, 
  Text,
  StyleSheet } from 'react-native'
import { Headings } from '../atoms/headings'


const OurStoryTop = (props) => {
  return (
    <View 
      style={styles.container}>
      <View>
      <Headings
        texts="Our Story..."
        style={styles.heading}/>
      </View>

      <View>
          <CustomButton
            title="more info"
            style={props.customButton}/>
      </View>

    </View>


  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
  },
  heading:{
    fontSize: 40,
    width: "70%"
  },
  customButton:{
    alignItems: 'center',
    borderRadius: 25,
  }
})


export {  OurStoryTop  }