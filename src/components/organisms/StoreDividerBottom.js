import { View, Text } from 'react-native'
import React from 'react'
import { MyTabs } from '../../navigation/PageTopTabNavigator'

const StoreDividerBottom = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 20

      }}>
    
    <MyTabs/>
    </View>
  )
}

export { StoreDividerBottom }