import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.layout}>
        <Text style={styles.title}>Sign up Screen</Text>
        <Button
          title="Continue"
          onPress={() => navigation.navigate("Main")} 
        />
      </View>
    )
  }

  const styles = StyleSheet.create({
    layout: {
      flex: 1,
      justifyContent: 'center',
      padding: 8,
    },
    title: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default SignUpScreen;