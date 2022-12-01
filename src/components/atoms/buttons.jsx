import React from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity,
    StyleSheet, 
    Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { atomicStyles } from './atomicStyles';

const CustomButton = (props) => {
  const { 
        onPress, 
        title = 'follow' } = props;

  return (

    <View
        style={[atomicStyles.buttonContainer, props.style]}>
    <TouchableOpacity 
        onPress={() => {console.log("Following");}} 
        style={{
          padding: 10,
          alignItems: "center",
          backgroundColor: "#3D3D3D",
          borderWidth: 3,
          borderColor:"#777575",
          borderRadius: 20,
 
        }} 
       >
    <Text 
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          justifyContent: "center",
          color: '#D9D9D9',

        }}>
        {title}
    </Text>
    </TouchableOpacity>
    </View>
  );
}


const MessagingButton = (props) => {
  const { 
        onPress, 
        title = 'follow' } = props;

  return (

    <View
        style={atomicStyles.buttonContainer}>
    <TouchableOpacity 
        onPress={() => {console.log("Messaging");}} 
        style={{
          alignItems: "center",
          backgroundColor: "#D9D9D9",
          borderWidth:1,
          borderColor:"#D9D9D9",
          padding: 10,
          borderRadius: 18,
        }}>
    <Icon 
        name='paper-plane'
        style={[atomicStyles.ButtonIconStyling, props.style]}/>
    </TouchableOpacity>
    </View>
  );
}


const CustomButton2 = (props) => {
  const { 
        onPress = props.onPress, 
        title = 'follow' } = props;

  return (

    <View
        style={atomicStyles.buttonContainer}>
    <TouchableOpacity 
 
        onPress={props.onPress} 
        style={props.style} 
       >
    <Text 
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          justifyContent: "center",
          color: '#3D3D3D',
        }}>
        {title}
    </Text>
    </TouchableOpacity>
    </View>
  );
}

const CustomButton3 = (props) => {
  const { 
        onPress = props.onPress, 
        title = 'follow' } = props;

  return (

    <View
        style={atomicStyles.buttonContainer}>
    <TouchableOpacity 
 
        onPress={props.onPress} 
        style={{
          padding: 10,
          alignItems: "center",
          backgroundColor: "#292929",
          borderWidth: 3,
          borderColor:"#777575",
          borderRadius: 30,

          marginHorizontal: 4,
          paddingHorizontal: 4,

        }} 
       >
    <Text 
        style={{
          fontSize: 15,
          padding: 5,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          justifyContent: "center",
          color: '#D9D9D9',
        }}>
        {title}
    </Text>
    </TouchableOpacity>
    </View>
  );
}



export {  

  CustomButton, 
  MessagingButton, 
  CustomButton2,  
  CustomButton3,  

}
