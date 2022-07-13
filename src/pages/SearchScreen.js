import * as React from 'react';
import { Text, View  } from 'react-native';


function SearchScreen () {
  
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
            Search
            </Text>
    </View>
  )
};

export default SearchScreen