import React from 'react'
import {  
    View,
    StyleSheet  } from 'react-native';
import { UserCardInfo } from '../molecules/userCardInfo';
import {UserCardButtons} from '../molecules/userCardButtons';
import theme from '../../assets/themes/theme';

const UserInfoOrganism = (props) => {

    return (
      <View
        style={{
          flex: 1,
        }}>

      <View
        style={{
          textAlign: "center",
          paddingTop: 15,
          paddingBottom: 15,
          marginTop: 280,
          marginHorizontal: 4,
          paddingHorizontal: 4,
          borderRadius: 35,
          backgroundColor:"#3D3D3D",

       }}>

      <View 
        style={{ 
          justifyContent: "center", 
          }}>
        <UserCardInfo/>
      </View>

      <View 
        style={{ 

          paddingTop: 15,
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


      <View 
        style={{
          flex: 0.25,
          paddingTop: 0.5,
          paddingBottom: 20,
          justifyContent:"space-evenly",
          backgroundColor:"#3D3D3D",
          borderRadius: 30,
       }}>

      <View style={{ justifyContent: "center", }}><UserCardInfo/></View>

      <View style={{ paddingTop: 20, }}><UserCardButtons/></View>

      </View>


}*/


export { UserInfoOrganism }