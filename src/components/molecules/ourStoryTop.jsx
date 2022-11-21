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


              alignItems: 'center',
              borderRadius: 25,

            
              }}/>
      </View>

    </View>


  )
}

/*{




}*/

export {  OurStoryTop  }