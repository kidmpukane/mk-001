import React from 'react'
import { 
    Text, 
    View,
    Pressable,   
     } from 'react-native'
import { atomicStyles } from '../atoms/atomicStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Texts } from './headings';


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

const TertiaryLinkButton = (props) => {
    return (
      <View>
        <Pressable
          onPress={() => {console.log("Personal Website");}} 
          style={({ pressed }) => 
          [{backgroundColor: pressed? 
          '#707B7C': '#3D3D3D'},
          atomicStyles.linkWrapperCustom]}>
          <Texts 
            texts={props.label} 
            style={{
              color: "white",
              fontWeight: "bold"
            }}  />
        </Pressable>
      </View>
    )
}


export {  SecondaryLinkButton, PrimaryLinkButton, TertiaryLinkButton  }