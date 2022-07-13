import { View, Text } from 'react-native'
import React from 'react'
import { CustomButton, MessagingButton, CustomButton2 } from '../atoms/buttons'
import { atomicStyles } from '../atoms/atomicStyles';

const UserCardButtons = () => {
  return (
    <View style={{
        flex: 0.5,
        justifyContent: "space-evenly",
        flexDirection: "row",
        paddingLeft: 5,
    }}>

      <View>
        <CustomButton 
          style={{
            width: 120,
//--------------------Buttons aren't even in size!!!------------------------
        }}/>
      </View>

      <View>
        <CustomButton2 
          title="similar stores"
          style={{
            width: 150,

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