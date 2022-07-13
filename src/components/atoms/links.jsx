import React from 'react'
import { 
    Text, 
    View,
    Pressable,   
     } from 'react-native'
import { atomicStyles } from '../atoms/atomicStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const PrimaryLinkButton = (props) => {
    return (
      <View>
        <Pressable
          onPress={() => {console.log("Instagram");}} 
          style={({ pressed }) => 
          [{backgroundColor: pressed? 
          '#707B7C': '#D0D3D4'},
          atomicStyles.linkWrapperCustom, props.BtnStyle]}>
          <Icon 
            name={props.label}
            style={atomicStyles.iconStyling} 
          />
        </Pressable>
      </View>
    )
}

const SecondaryLinkButton = (props) => {
    return (
      <View>
        <Pressable
          onPress={() => {console.log("Personal Website");}} 
          style={({ pressed }) => 
          [{backgroundColor: pressed? 
          '#707B7C': '#D0D3D4'},
          atomicStyles.linkWrapperCustom]}>
          <MaterialCommunityIcons 
            name={props.label} 
            style={atomicStyles.iconStyling}  />
        </Pressable>
      </View>
    )
}


export {  SecondaryLinkButton, PrimaryLinkButton  }