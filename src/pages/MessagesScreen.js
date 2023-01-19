import * as React from 'react';
import { Text, View  } from 'react-native';

function MessagesScreen() {
  
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
            Messages
            </Text>
    </View>
  )
};

export default MessagesScreen