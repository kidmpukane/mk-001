import React from 'react';
import { 
    Text, 
    View, 
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
    <Pressable 
        onPress={() => {console.log("Following");}} 
        style={({ pressed }) => [{backgroundColor: pressed? 
        '#5499C7': '#68C9FF'},atomicStyles.buttonWrapperCustom, props.style]} 
       >
    <Text 
        style={[atomicStyles.buttonText, ]}>
        {title}
    </Text>
    </Pressable>
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
    <Pressable 
        onPress={() => {console.log("Messaging");}} 
        style={({ pressed }) => [{backgroundColor: pressed?
        '#777575': '#D9D9D9'},atomicStyles.buttonWrapperCustom2]} 
       >
    <Icon 
        name='paper-plane'
        style={[atomicStyles.ButtonIconStyling, props.style]}/>
    </Pressable>
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
    <Pressable 
        onPress={onPress} 
        style={({ pressed }) => [{backgroundColor: pressed? 
        '#777575': '#D9D9D9'},atomicStyles.buttonWrapperCustom, props.style]} 
       >
    <Text 
        style={[atomicStyles.buttonText, props.btnStyle]}>
        {title}
    </Text>
    </Pressable>
    </View>
  );
}



export {  CustomButton, MessagingButton, CustomButton2  }
