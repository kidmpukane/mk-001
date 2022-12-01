import { View, StyleSheet } from 'react-native'
import { Headings, Texts } from '../atoms/headings'
import { TertiaryLinkButton } from '../atoms/links'
import React from 'react'
import { CustomButton } from '../atoms/buttons'

const ProductViewTop = () => {
  return (
    <View>
   <View
      style={styles.productViewTopContainer}>
    <View>
    <Headings
      texts="Terra boots"
      style={styles.productTopViewHeading}/>
    <Headings
      texts="leather with 4G buckle"
      style={styles.productTopViewHeading2}/>
    </View>
    <View>
    <Headings
      texts="$1499.90"
      style={styles.productTopViewHeading3}/>
    </View>
    </View>
    </View>
  )
}

const ProductViewScroll = () =>{
    return(
        <View 
            style={styles.ProductViewScrollContainer}>
        <View>
        <Texts
        texts="Givenchy items are delivered everywhere in France and internationally, with the exception of overseas departments, Corsica and the Principality of Monaco.
        Givenchy does not deliver orders to business addresses, P.O. boxes, hotels or university campuses. Orders to any of these destinations will not be processed. Delivery of items will take place upon full payment of the items ordered. Orders made from the website of a country different to that of the delivery address will not be processed.
        Delivery from Monday through Friday for any order placed online or by Email.
        This service is not available on holidays.
        The expected delivery time is 5-8 business days after placing the order.
        This delivery service is offered free of charge by GIVENCHY.
        Givenchy will inform you by email of the progress of your order. You can also track the progress of your order in the “My Orders” section of your online Customer Account on Givenchy.com or by contacting our Customer Service during the opening hours indicated in the Contact section of the Site."
            style={styles.ProductViewScrollText}/>
        </View>
        <View 
            style={styles.ProductViewScrollSubContainer}>
        <SizeSelectButton/>
        </View>
        <View
            style={styles.ProductViewScrollCustomButtonContainer}>
        <CustomButton
          style={styles.ProductViewScrollCustomButton}
          title="Buy Now"/>
        </View>
        </View>
    )
}

const SizeSelectButton = () => {
    return(
        <View>
        <View
            style={styles.SizeSelectionButtonContainer}>
        <Headings
            texts="Select Sizes"
            style={styles.SizeSelectionButtonHeading}/>
        </View>
            <View 
            style={styles.SizeSelectionButtonSubContainer}>
        
        <View><TertiaryLinkButton label="XS"/></View>
        <View><TertiaryLinkButton label="S"/></View>
        <View><TertiaryLinkButton label="M"/></View>
        <View><TertiaryLinkButton label="L"/></View>
        <View><TertiaryLinkButton label="XL"/></View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
  productViewTopContainer:{
    justifyContent: "space-between",
    flexDirection: "row"
  },
  productTopViewHeading:{
    fontSize: 30
  },
  productTopViewHeading2:{
    fontSize: 18
  },
  productTopViewHeading3:{
    fontSize: 20,
    paddingTop: 8,
    color: "#FBD240"
  },
  ProductViewScrollContainer:{
    flex: 1,
    padding: 20
  },
  ProductViewScrollText:{
    fontSize: 10,
    paddingTop: 8,
    color: "#D9D9D9"
  },
  ProductViewScrollSubContainer:{
    paddingBottom: 10
  },
  ProductViewScrollCustomButtonContainer:{
    paddingTop: 10,
    justifyContent: "space-evenly",
    flexDirection: "row"
  },
  ProductViewScrollCustomButton:{
    width: "100%",
    borderRadius: 25,
    backgroundColor: "#FBD240"
  },
  SizeSelectionButtonContainer:{
    paddingTop: 10,
    paddingBottom: 10
  },
  SizeSelectionButtonHeading:{
    fontSize: 25
  },
  SizeSelectionButtonSubContainer:{
    paddingTop:10,
    justifyContent: "space-between",
    flexDirection: "row"
  },
});

export {  ProductViewTop, ProductViewScroll  } 