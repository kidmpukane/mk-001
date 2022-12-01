import React from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity,
    StyleSheet, 
    Pressable
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { atomicStyles } from './atomicStyles';

const CustomButton = (props) => {

  return (

    <View
        style={[atomicStyles.buttonContainer, props.style]}>
    <TouchableOpacity 
        onPress={() => {console.log("Following");}} 
        style={styles.customButtonContainer} 
       >
    <Text 
        style={styles.customButtonText}>
        {props.title}
    </Text>
    </TouchableOpacity>
    </View>
  );
}

const CustomButton2 = (props) => {

  return (

    <View
        style={atomicStyles.buttonContainer}>
    <TouchableOpacity 
 
        onPress={props.onPress} 
        style={props.style} 
       >
    <Text 
        style={styles.customButtonText2}>
        {props.title}
    </Text>
    </TouchableOpacity>
    </View>
  );
};


const CustomButton3 = (props) => {

  return (

    <View
        style={atomicStyles.buttonContainer}>
    <TouchableOpacity 
 
        onPress={props.onPress} 
        style={styles.customButtonContainer3} 
       >
    <Text 
        style={styles.customButtonText3}>
        {props.title}
    </Text>
    </TouchableOpacity>
    </View>
  );
}


const MessagingButton = (props) => {

  return (

    <View
        style={atomicStyles.buttonContainer}>
    <TouchableOpacity 
        onPress={() => {console.log("Messaging");}} 
        style={styles.messagingButtonContainer3}>
    <Icon 
        name='paper-plane'
        style={[atomicStyles.ButtonIconStyling, props.style]}/>
    </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({

  customButtonContainer:{
    padding: 10,
    alignItems: "center",
    backgroundColor: "#3D3D3D",
    borderWidth: 3,
    borderColor:"#777575",
    borderRadius: 20,

  },
  customButtonText:{
    fontSize: 12,
    fontWeight: 'bold',
    justifyContent: "center",
    color: '#D9D9D9',

  },
  customButtonContainer2:{
      flex: 0,
      justifyContent: 'center',
      marginHorizontal: 0,

  },
  customButtonText2:{
    fontSize: 12,
    fontWeight: 'bold',
    justifyContent: "center",
    color: '#3D3D3D',
  },
  customButtonContainer3:{
    padding: 10,
    alignItems: "center",
    backgroundColor: "#292929",
    borderWidth: 3,
    borderColor:"#777575",
    borderRadius: 30,
    marginHorizontal: 4,
    paddingHorizontal: 4,

  },
  customButtonText3:{
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    justifyContent: "center",
    color: '#D9D9D9',
  },
  messagingButtonContainer3:{
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderWidth:1,
    borderColor:"#D9D9D9",
    padding: 10,
    borderRadius: 18,
  },
})



export {  

  CustomButton, 
  MessagingButton, 
  CustomButton2,  
  CustomButton3,  

}
