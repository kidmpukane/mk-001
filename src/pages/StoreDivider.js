import * as React from 'react';
import { StyleSheet, View, ScrollView  } from 'react-native';
import {  StorePageTop  } from '../components/organisms/StorePageTop'
import { StoreDividerBottom } from '../components/organisms/StoreDividerBottom';



function StoreDivider () {
  
  return(
    <View style={styles.container}>
    <ScrollView 
      nestedScrollEnabled={true}
      style={styles.scrollViewContainer}>
    
    
    <View>
      <StorePageTop/>
    </View>
    <View
      style={styles.subContainer}>
      <StoreDividerBottom/>
    </View>

    </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: "#292929",
  },
  scrollViewContainer:{
    flexGrow: 1,
  },
  subContainer:{
    flex: 1,
    height: 600

  }
});

export { StoreDivider }