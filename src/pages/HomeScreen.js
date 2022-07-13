import * as React from 'react';
import { Text, View, SafeAreaView  } from 'react-native';


function HomeScreen () {
  
  return(
    <SafeAreaView>
    <View 
        style={{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center' }}>
    <Text
        
        style={{ 
            fontSize: 26, 
            fontWeight: 'bold' }}>
            Home
            </Text>
    </View>
    </SafeAreaView>
  )
};

export default HomeScreen