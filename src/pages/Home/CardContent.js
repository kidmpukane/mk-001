import React from "react";
import { 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  View, 
  Text } from "react-native";
import avatarPosts from "../../assets/data/avatarPosts";
import theme from "../../assets/themes/theme";


const CardContent = (props) => {
  return (
    <>
          
        <TouchableOpacity style={styles.contentContainer}>
          <Image 
          source={{uri: props.image}} 
          style={styles.contentImg} 
          />
          <Text style={styles.contentText}>{props.title}</Text>
          <Text style={styles.contentText} numberOfLines={3}>{props.description}</Text> 
          <Text style={styles.contentText}>{props.price}</Text>
        </TouchableOpacity>
        
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    textAlign: "center",
    opacity: 0.6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginTop: theme.spacing.s,
    marginBottom: theme.spacing.xs,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    backgroundColor: "#000",
  },
  contentImg: {
    opacity: 0.6,
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  contentText: {
    color: "#FFF",
    fontWeight: "bold",
  },
})

export default CardContent;
