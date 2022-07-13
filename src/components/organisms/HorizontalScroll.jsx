import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { CategoryCard } from '../molecules/categoryCard'
import { Headings } from '../atoms/headings'

const HorizontalScroll = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%"
      }}>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          
        }}>
      <Headings
        texts="Watches"
        style={{
          fontSize: 20
        }}/>
      <Headings
        texts="See All"/>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
          
          <View
            style={{
              width: "10%",
              flex: 1,
              height: 250
              
            }}>
          <CategoryCard/>
          </View>

          <View
            style={{
              width: "10%",
              flex: 1,
              height: 250
              
            }}>
          <CategoryCard/>
          </View>

          <View
            style={{
              width: "10%",
              flex: 1,
              height: 250
              
            }}>
          <CategoryCard/>
          </View>

          <View
            style={{
              width: "10%",
              flex: 1,
              height: 250
              
            }}>
          <CategoryCard/>
          </View>
          
          <View
            style={{
              width: "10%",
              flex: 1,
              height: 250
              
            }}>
          <CategoryCard/>
          </View>

          <View
            style={{
              width: "10%",
              flex: 1,
              height: 250
              
            }}>
          <CategoryCard/>
          </View>

          <View
            style={{
              width: "10%",
              flex: 1,
              height: 250
              
            }}>
          <CategoryCard/>
          </View>

          <View
            style={{
              width: "10%",
              flex: 1,
              height: 250
              
            }}>
          <CategoryCard/>
          </View>


      </ScrollView>

    </View>
  )
}

//

export {  HorizontalScroll  }