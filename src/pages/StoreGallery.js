import { View, Text, ScrollView } from 'react-native'
import {  GalleryPageTop  } from '../components/organisms/StorePageTop'
import { HorizontalScroll } from '../components/organisms/HorizontalScroll'
import React from 'react'

const StoreGallery = () => {
  return (
    <View
        style={{ 
            flex: 1,
            backgroundColor: "#292929"
             }}>

      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            
          }}>
        <GalleryPageTop/>
        </View>
        <View
          style={{
            height: 470,
            width: "100%"
            }}>
        <HorizontalScroll/>
        </View>
        <View
          style={{
            height: 470,
            width: "100%"
            }}>
      <HorizontalScroll/>
      </View>
        <View
          style={{
            height: 470,
            width: "100%"
            }}>
      <HorizontalScroll/>
      </View>
        <View
          style={{
            height: 470,
            width: "100%"
            }}>
      <HorizontalScroll/>
      </View>
        <View
          style={{
            height: 470,
            width: "100%"
            }}>
      <HorizontalScroll/>
      </View>
        <View
          style={{
            height: 470,
            width: "100%"
            }}>
      <HorizontalScroll/>
      </View>
      </ScrollView>
    </View>
  )
}

export {  StoreGallery  }