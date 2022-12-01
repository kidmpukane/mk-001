import { StyleSheet,  View } from 'react-native';
import {  Headings, Texts  } from '../atoms/headings'
import { PrimaryLinkButton } from '../atoms/links';
import React from 'react'

const ProductPageTop = () => {
  return (
    <View       
    style={styles.container}>
<View>
<Headings
  texts="Watches"
  style={styles.heading}
  />
<Texts
  texts="Montres Rolex® Watches"
  style={styles.textStyle}/>
</View>
<View>
  <PrimaryLinkButton
    label="plus"/>
</View>
</View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    alignItems: "center"
  },
  heading:{
    fontSize: 40
  },
  textStyle:{
    fontSize: 20,
    color: "#D9D9D9"
  },
});

export {  ProductPageTop  }