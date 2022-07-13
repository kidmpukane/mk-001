import * as React from 'react';
import { Text, View, ScrollView  } from 'react-native';
import {  StorePageTop  } from '../components/organisms/StorePageTop'
import { StoreDividerBottom } from '../components/organisms/StoreDividerBottom';



function StoreDivider () {
  
  return(
    <View style={{flex: 1}}>
    <ScrollView 
      nestedScrollEnabled={true}
      style={{
        flexGrow: 1,

      }}>
    
    
    <View>
      <StorePageTop/>
    </View>
    <View
      style={{
        flex: 1,
        height: 600

      }}>
      <StoreDividerBottom/>
    </View>

    </ScrollView>
    </View>
  )
};

export { StoreDivider }