import { View, Text } from 'react-native'
import React from 'react'
import { CustomButton, MessagingButton, CustomButton2 } from '../atoms/buttons'
import { atomicStyles } from '../atoms/atomicStyles';

const UserCardButtons = () => {
  return (
    <View style={{

        justifyContent: "space-evenly",
        flexDirection: "row",

    }}>

      <View>
        <CustomButton 
          style={{
            height: 40,
            width: 120,
            
//--------------------Buttons aren't even in size!!!------------------------
        }}/>
      </View>

      <View>
        <CustomButton2 
          title="other stores"
          style={{
            height: 40,
            width: 150,
            padding: 12,
            width: 150,
            alignItems: "center",
            backgroundColor: "#D9D9D9",
            borderRadius: 20,

        }}
/>
      </View>

      <View>
        <MessagingButton/>
      </View>
     
    </View>
  )
}

export { UserCardButtons}