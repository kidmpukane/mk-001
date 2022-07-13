import React from 'react'
import {  
    View,
    StyleSheet  } from 'react-native'
import { UserCardInfo } from '../molecules/userCardInfo'
import {UserCardButtons} from '../molecules/userCardButtons'

const UserInfoOrganism = (props) => {

    return (
      <View
        style={{
          flex: 1, 
          justifyContent: 'center' 
        }}>
      <View style={{
        flex: 0.25,
        paddingTop: 8,
        paddingBottom: 20,
        width: "100%",
        justifyContent:"space-evenly",
        backgroundColor:"#3D3D3D",
        borderRadius: 25,
      }}>
      <View>
        <UserCardInfo/>
      </View>
      <View 
        style={{
          paddingTop: 20,
        
        }}>
      <UserCardButtons/>
      </View>
      </View>
      </View>
    )
  }

/*{

      <View
        style={{
          flex: 1, 
          justifyContent: 'center' 
        }}>
      <View style={{
        flex: 0.25,
        paddingTop: 8,
        paddingBottom: 30,
        width: "100%",
        justifyContent:"space-evenly",
        backgroundColor:"#3D3D3D",
        borderRadius: 25,
      }}>
      <View>
        <UserCardInfo/>
      </View>
      <View 
        style={{
          paddingTop: 40,
        }}>
      <UserCardButtons/>
      </View>
      </View>
      </View>

}*/


export { UserInfoOrganism }