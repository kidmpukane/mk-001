import { View, Text, ScrollView } from 'react-native'
import {  CollectionLink  } from '../components/organisms/CollectionLink'

import React from 'react'

const StorePage = () => {
  return (
    <ScrollView nestedScrollEnabled = {true}>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>

    </ScrollView>
  )
}

const MenPage = () => {
  return (
    <ScrollView nestedScrollEnabled = {true}>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>


    </ScrollView>
  )
}

const WomenPage = () => {
  return (
    <ScrollView nestedScrollEnabled = {true}>

        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>
        </View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <CollectionLink/>

        </View>

    </ScrollView>
  )
}

export {  StorePage,  WomenPage, MenPage } 