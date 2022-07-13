import { View, Text } from 'react-native'
import { CategoryCard } from '../molecules/categoryCard'
import React from 'react'

const ProductCardContainer = () => {
  return (
    <View
        style={{
            flex: 1,
            paddingTop: 20, 
            alignItems: 'center', 
            justifyContent: 'center',
    }}>
    <View
        style={{
            padding: 20,
            backgroundColor: "#292929",
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            width: "100%",
            height:"100%"
        }}>
    

    <View
            style={{
                width: "40%",
                height: 100,
              
              
                }}>
    <CategoryCard
            style={{fontSize: 10}}/>
    </View>
    <View
            style={{
                width: "40%",
                height: 100,
              
              
                }}>
    <CategoryCard
            style={{fontSize: 10}}/>
    </View>

    </View>
    </View>
  )
}

export { ProductCardContainer }