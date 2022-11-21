import React from 'react'
import { 
    Text, 
    View,
    StyleSheet } from 'react-native'

const Headings = (props) => {
  
    return (
      <View>
        <Text
        numberOfLines={props.numberOfLines}
        style={[styles.text,props.style]}>{props.texts}</Text>
      </View>
    )
  }


const Texts = (props) => {

      return (
        <View>
          <Text 
          numberOfLines={props.numberOfLines}
          style={props.style}>{props.texts}</Text>
        </View>
      )
    }
const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#D9D9D9',
      },
    text2: {
        fontSize: 15,
        lineHeight: 30,
        color: '#808B96',
      }
})
export {Headings, Texts}