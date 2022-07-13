import * as React from 'react';
import { 
    Text, 
    View,
    Button  } from 'react-native';

function CreatePost() {
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
            Create Post
    </Text>
    {/*<Button onPress={}/>*/}
    </View>
    );
}

export default CreatePost