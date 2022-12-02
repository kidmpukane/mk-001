import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

//Organisms
import { CollectionLink } from "../components/organisms/CollectionLink";

//Navigation
import { useNavigation } from "@react-navigation/native";

const StorePage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="WOMENS"
          subTexts="COLLECTION"
          onPress={() => navigation.navigate("StoreGallery")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="MENS"
          subTexts="COLLECTION"
          onPress={() => console.log("Oh No pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="KIDS"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
    </ScrollView>
  );
};

const MenPage = () => {
  return (
<ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="VINTAGE SHOE"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="VINTAGE SHOE"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="VINTAGE SHOE"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="VINTAGE SHOE"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="VINTAGE SHOE"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
    </ScrollView>
  );
};

const WomenPage = () => {
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="VINTAGE SHOE"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="VINTAGE SHOE"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="VINTAGE SHOE"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="VINTAGE SHOE"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <CollectionLink
          headingTexts="VINTAGE SHOE"
          subTexts="COLLECTION"
          onPress={() => console.log("pressed")}
          source={{
            uri: "http://cdn.home-designing.com/wp-content/uploads/2021/01/modern-flower-vase.jpg",
          }}
        />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292929",
  },
  subContainer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export { StorePage, WomenPage, MenPage };
