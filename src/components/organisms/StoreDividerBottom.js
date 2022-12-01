import { View, StyleSheet } from 'react-native'
import React from 'react'
import { MyTabs } from '../../navigation/PageTopTabNavigator'

const StoreDividerBottom = () => {
  return (
    <View
      style={styles.container}>
    
    <MyTabs/>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingBottom: 20

  },
})

export { StoreDividerBottom }