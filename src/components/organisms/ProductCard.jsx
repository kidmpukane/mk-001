import { View, TouchableHighlight, Text } from 'react-native'
import { ProductImages } from '../atoms/Images'
import React from 'react'
import { PriceInfo } from '../molecules/priceInfo'

//MAke the whole card touchable

const ProductCard = () => {
  return (

          <View       
    style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: "center",
    
      }}>
          <View style={{
        padding: 10,
        width: "80%",
        justifyContent:"space-evenly",
        backgroundColor:"#292929",
        borderRadius: 25,
      }}>
    <View style={{        
            width: '100%',
            height: 200,
}}>
  <TouchableHighlight onPress={() => console.log('pressed')}>
    <ProductImages
      source={{ 
          uri: 'https://cdn.shopify.com/s/files/1/0510/2580/5503/products/South_20African_20Collage_1167ef1e-a539-46d8-913f-916cd8dae08c_480x480@2x.jpg?v=1642088388' }}
      style={{ 
        height: "100%",
        width: "100%",
        borderRadius: 20,
        backgroundColor: "#292929"
           }}
    />
    
</TouchableHighlight>

</View>
<View
    style={{
        paddingTop: 10
    }}>
<PriceInfo/>
</View>
</View>
</View>

  )
}

export {  ProductCard  }