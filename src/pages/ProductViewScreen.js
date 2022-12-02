import React from 'react'
import { ScrollView, StyleSheet, View } from "react-native";

//Atoms
import { ProductImages } from '../components/atoms/Images'
import { ProductViewTop, ProductViewScroll } from '../components/molecules/productViewTop'


const ProductViewScreen = (props) => {
    return (
      <View
        style={styles.container}>
        <ScrollView>
          <View
            style={styles.subContainer}
          >
            <ProductImages
              source={{
                uri: "https://assets.givenchy.com/m/64034cb69cd4654a/High_Resolution_JPG-BH603FH14A001-03-04.jpg?imwidth=1024",
              }}
              style={styles.productImage}
            />
            <View
              style={styles.productViewTopStyles}
            >
              <ProductViewTop />
            </View>
          </View>
          <View
            style={styles.productViewScrollStyles}
          >
            <ProductViewScroll />
          </View>
        </ScrollView>
      </View>
    );
  };

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: "#292929",
      },
    subContainer:{
        flex: 1,
        width: "100%",
        height: 500,
      },
    productImage:{
        height: "100%",
        width: "100%",
        borderRadius: 20,
        backgroundColor: "#292929",
      },
    productViewTopStyles:{
        paddingTop: 10,
      },
    productViewScrollStyles:{
        paddingTop: 80,
      },
})  

export  { ProductViewScreen }