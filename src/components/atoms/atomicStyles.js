import { StyleSheet } from 'react-native'

const atomicStyles = StyleSheet.create({

    linkContainer: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
        },
    buttonContainer: {
        flex: 0,
        justifyContent: 'center',
        marginHorizontal: 0,
              },
    linkWrapperCustom: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
    },
    buttonWrapperCustom: {
        width: "100%",
        height: 45,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 20,
        padding: 6
      },
    buttonWrapperCustom2: {
        width: "100%",
        height:45,
        paddingVertical: 12,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 20,
        padding: 6
      },
    linkText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#566573',
    
    },
    buttonText: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        justifyContent: "center",
        color: '#3D3D3D',
      },
    buttonText2: {
        fontSize: 12,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        justifyContent: "center",
        color: 'white',
      },
    iconStyling: {
      fontSize: 30, 
      color: "#1C2833"
  
    },
    ButtonIconStyling: {
      fontSize: 20, 
      color: "#1C2833",
      justifyContent: "center"
  
    }
  });

export {  atomicStyles  } 