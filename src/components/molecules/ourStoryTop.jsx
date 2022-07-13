import React from 'react'
import {CustomButton} from '../atoms/buttons'
import { 
  View, 
  Text,
  StyleSheet } from 'react-native'
import { Texts, Headings } from '../atoms/headings'


const OurStoryTop = (props) => {
  return (
    <View 
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 30,
      }}>
      <View>
      <Headings
        texts="Our Story..."
        style={{
            fontSize: 40,
            width: "70%"
          }}/>
      </View>

      <View>
          <CustomButton
            title="more info"
            style={{
              width: "100%",
              height: 40,
              paddingVertical: 12,
              alignItems: 'center',
              borderRadius: 50,
              padding: 6
            
              }}/>
      </View>

    </View>


  )
}

/*{




}*/

export {  OurStoryTop  }