import { View, Text } from 'react-native'
import { Headings, Texts } from '../atoms/headings'
import { TertiaryLinkButton, PrimaryLinkButton } from '../atoms/links'
import React from 'react'
import { CustomButton, CustomButton2 } from '../atoms/buttons'

const ProductViewTop = () => {
  return (
    <View>
   <View
      style={{
      
        justifyContent: "space-between",
        flexDirection: "row"

      }}>
    <View>
    <Headings
      texts="Terra boots"
      style={{
        fontSize: 30
      }}/>
    <Headings
      texts="leather with 4G buckle"
      style={{
        fontSize: 18
      }}/>
    </View>
    <View>
    <Headings
      texts="$1499.90"
      style={{
        fontSize: 20,
        paddingTop: 8,
        color: "#FBD240"
      }}/>
    </View>
    </View>
    </View>
  )
}

const ProductViewScroll = () =>{
    return(
        <View 
            style={{
            flex: 1,
            padding: 20
             }}>


        <View>
        <Texts
        texts="Givenchy items are delivered everywhere in France and internationally, with the exception of overseas departments, Corsica and the Principality of Monaco.
        Givenchy does not deliver orders to business addresses, P.O. boxes, hotels or university campuses. Orders to any of these destinations will not be processed. Delivery of items will take place upon full payment of the items ordered. Orders made from the website of a country different to that of the delivery address will not be processed.
        Delivery from Monday through Friday for any order placed online or by Email.
        This service is not available on holidays.
        The expected delivery time is 5-8 business days after placing the order.
        This delivery service is offered free of charge by GIVENCHY.
        Givenchy will inform you by email of the progress of your order. You can also track the progress of your order in the “My Orders” section of your online Customer Account on Givenchy.com or by contacting our Customer Service during the opening hours indicated in the Contact section of the Site."
        style={{
          fontSize: 10,
          paddingTop: 8,
          color: "#D9D9D9"
        }}/>
        </View>
        <View 
            style={{
                paddingBottom: 10
            }}>
        <SizeSelectButton/>
        </View>
        <View
            style={{

                paddingTop: 10,
                justifyContent: "space-evenly",
                flexDirection: "row"
            
                  }}>
        <CustomButton
          style={{
            width: "100%",
            borderRadius: 25,
            backgroundColor: "#FBD240"
          }}
          title="Buy Now"/>

        </View>
        </View>
    )
}

const SizeSelectButton = () => {
    return(
        <View>
        <View
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}>
        <Headings
            texts="Select Sizes"
            style={{
                fontSize: 25
            }}/>
        </View>
            <View 
            style={{
                paddingTop:10,
                justifyContent: "space-between",
                flexDirection: "row"
            }}>
        
        <View><TertiaryLinkButton label="XS"/></View>
        <View><TertiaryLinkButton label="S"/></View>
        <View><TertiaryLinkButton label="M"/></View>
        <View><TertiaryLinkButton label="L"/></View>
        <View><TertiaryLinkButton label="XL"/></View>
        </View>
        </View>
    )
}


export {  ProductViewTop, ProductViewScroll  } 