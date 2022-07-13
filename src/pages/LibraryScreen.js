import * as React from 'react';
import { Text, View  } from 'react-native';


function LibraryScreen() {
  
  return(
    <View 
        style={{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center' }}>
    <Text
        
        style={{ 
            fontSize: 26, 
            fontWeight: 'bold' }}>
            Library
            </Text>
    </View>
  )
};

export default LibraryScreen