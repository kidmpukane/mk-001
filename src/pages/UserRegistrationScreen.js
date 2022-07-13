import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
} from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';

const signUpValidationSchema = Yup.object().shape({

user_name: Yup.string()
  .min(3, 'User Name must between 5 to 25 characters')
  .max(25, 'User Name must between 5 to 25 characters')
  .required('Required'),
first_name: Yup.string()
  .min(1, 'First Name Must be 3 to 35 characters')
  .max(35, 'First Name Must be 3 to 35 characters')
  .required('Required'),
last_name: Yup.string()
  .min(1, 'First Name Must be 3 to 35 characters')
  .max(35, 'First Name Must be 3 to 35 characters')
  .required('Required'),
email: Yup.string()
  .email('Invalid email address')
  .required('Required'),
password: Yup.string()
  .min(8, 'Password must be between 8 to 25 characters')
  .max(25, 'Password must be between 8 to 25 characters')
  .required('Required')
  .matches(/[a-z]+/, "One lowercase character")
  .matches(/[A-Z]+/, "One uppercase character")
  .matches(/\d+/, "One number"), 
password2: Yup.string()
  .max(25, 'Must be 25 characters or less')
  .required('Required')
  .oneOf([Yup.ref('password'), null], 'Passwords must match'), 
  
})

export const UserRegistration = props => (
  <Formik
    validationSchema={signUpValidationSchema}

    initialValues={{ 

      email: '',
      user_name: '',
      first_name: '',
      last_name: '',
      password: '',
      password2: '',

   }}
    onSubmit={values => {
      fetch('http://4bf6-102-66-102-171.eu.ngrok.io/api/user/registration/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
  }}
  >
    {({

      handleChange, 
      handleBlur, 
      handleSubmit, 
      values, 
      isValid,
      errors,
      touched,
    
    }) => (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B2631',
      }}>

        <Text style={{
          fontSize: 26, 
          fontWeight: 'bold',
          color: 'white',
        }}>User Registration Screen</Text>
         
        <TextInput
          style={styles.input}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder='E-mail'
          placeholderTextColor='white'
          onChangeText={handleChange('email')}
        />

        {errors.email && touched.email && (
        <Text style={styles.errorText}>{errors.email}</Text>)}

        <TextInput
          style={styles.input}
          onBlur={handleBlur('user_name')}
          value={values.user_name}
          placeholder='User Name'
          placeholderTextColor='white'
          onChangeText={handleChange('user_name')}
        />

        {errors.user_name && touched.user_name && (
        <Text style={styles.errorText}>{errors.user_name}</Text>)}

        <TextInput
          style={styles.input}
          onBlur={handleBlur('first_name')}
          value={values.first_name}
          placeholder='First Name'
          placeholderTextColor='white'
          onChangeText={handleChange('first_name')}
        />

        {errors.first_name && touched.first_name && (
        <Text style={styles.errorText}>{errors.first_name}</Text>)}

        <TextInput
          style={styles.input}
          onBlur={handleBlur('last_name')}
          value={values.last_name}
          placeholder='Last Name'
          placeholderTextColor='white'
          onChangeText={handleChange('last_name')}
        />

        {errors.last_name && touched.last_name && (
        <Text style={styles.errorText}>{errors.last_name}</Text>)}

        <TextInput
          style={styles.input}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={handleChange('password')}
        />

        {errors.password && touched.password && (
        <Text style={styles.errorText}>{errors.password}</Text>)}

        <TextInput
          style={styles.input}
          onBlur={handleBlur('password2')}
          value={values.password2}
          placeholder='Confirm Password'
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={handleChange('password2')}
        />

        {errors.password2 && touched.password2 && (
        <Text style={styles.errorText}>{errors.password2}</Text>)}
          
        <Button 
          onPress={handleSubmit} 
          title="Submit"
          disabled={!isValid || values.email === ''} />
      </View>
    )}
  </Formik>
);


const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#1B2631',
    borderColor: 'grey',
    borderRadius: 50,
    borderWidth: 1,
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    justifyContent: 'space-between'
  },
    errorText: {
    fontSize: 12.5,
    color: 'orange',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B2631',
  }
})
