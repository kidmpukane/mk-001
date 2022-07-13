import { Image,  View } from 'react-native';
import {  Headings, Texts  } from '../atoms/headings'
import { PrimaryLinkButton } from '../atoms/links';
import React from 'react'

const ProductPageTop = () => {
  return (
    <View       
    style={{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    alignItems: "center"
      }}>

<View>
<Headings
  texts="Watches"
  style={{
    fontSize: 40

  }}
  />
<Texts
  texts="Montres Rolex® Watches"
  style={{
    fontSize: 20,
    color: "#D9D9D9"

  }}/>
</View>
<View>
  <PrimaryLinkButton
    label="plus"/>
</View>
</View>
  )
}

export {  ProductPageTop  }