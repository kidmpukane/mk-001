import * as React from 'react';
import { Text, View, ScrollView, ImageBackground, Button , StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Components
import CreatePost from './CreatePost';

//Atoms
import { ProductImages } from '../components/atoms/Images';
import { CustomButton2 } from '../components/atoms/buttons';
import { Texts } from '../components/atoms/headings';

//Organisms
import { UserInfoOrganism } from '../components/organisms/UserInfoOrganism.jsx'
import {  OurStory  } from '../components/organisms/OurStory'
import {  SocialMediaLinkBar  } from '../components/organisms/SocialMediaLinks'
import {  ReviewCard  } from '../components/organisms/ReviewCard'


const Stack = createNativeStackNavigator();



function ProfileScreen({ navigation }) {
  

  return(

    <ScrollView>
       <View style={{        
            width: '100%',
            height: 400,
            paddingBottom: 20,
            
            
                    }}>
          <ImageBackground
              source={{ 
                uri: 'https://images.squarespace-cdn.com/content/v1/576626ceff7c501fa9f4e07b/1472719262152-CDDH3WIM43X6DY1KGT8F/Robert+August+Surf-8' }}
              style={{ 
                height: "100%",
                width: "100%",
                borderRadius: 20,
                backgroundColor: "#292929",
                
                
                    }}>
      <View
        style={{
          width: "100%",
          height: 900,
          position: "absolute",
          paddingTop: 20
          
        }}>
        <UserInfoOrganism />
      </View>        
      </ImageBackground>
      </View>
        
        <View
          style={{
            width: "100%",
            paddingTop: 200
          }}>
        <CustomButton2
          style={{
            backgroundColor: "#000000",
            borderWidth: 2,
            borderColor: "#FBD240"
          }}
          title="Continue to Store"
          onPress={()=> {console.log("Yes!!!");}}/>
        </View>

        <View 
          style={{
            paddingTop: 20
          }}>
        <OurStory/>
        </View>
      
      
      <View 
        style={{
          paddingTop: 20,
          paddingBottom: 20,
        }}>
      <Text>Social Media Links</Text>
      <SocialMediaLinkBar/>
      </View>

      <ScrollView 
        horizontal={true}>
        
        <View><ReviewCard/></View>
        <View><ReviewCard/></View>
        <View><ReviewCard/></View>
        <View><ReviewCard/></View>
        <View><ReviewCard/></View>

      </ScrollView>

      <View>
      <Text>t&c's</Text>
      <Texts
      style={{
        color: "#D9D9D9",
        fontSize: 12,
        fontWeight: "bold",
        padding: 40,

      }}
      texts=" When you delete a file, Figma will remove the file from the project for all collaborators. You will now only be able to access the file from your deleted files folder.

      View, restore, and permanently delete files in the Deleted tab of your Drafts. Figma stores deleted files indefinitely, until you or another collaborator deletes them forever.
      
      When you delete a file, Figma will remove the file from the project for all collaborators. You will now only be able to access the file from your deleted files folder.
      
      View, restore, and permanently delete files in the Deleted tab of your Drafts. Figma stores deleted files indefinitely, until you or another collaborator deletes them forever."/>
      </View>
      
      <View>

      <Texts
      style={{
        color: "#D9D9D9",
        fontSize: 12,
        fontWeight: "bold",
        padding: 40,

      }}
      texts="testOO1.c l o t h i n g."/>
      </View>

      <View>
      <Texts
      style={{
        color: "#D9D9D9",
        fontSize: 12,
        fontWeight: "bold",
        padding: 40,

      }}
      texts="Copyright © 2022 All Rights Reserved"/>
      </View>

    

    </ScrollView>

  )
};

{/*
    <Button
      title="Upload Product"
      component={CreatePost}
      onPress={() => navigation.navigate("CreatePost")}/>
*/}


export default ProfileScreen