import { StyleSheet, Text, View } from "react-native";
import { ProductImages } from "../atoms/Images";
import { Headings, Texts } from "../atoms/headings";
import React from "react";

const StorePageTop = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ProductImages
          source={{
            uri: props.storeDisplayImage,
          }}
          style={styles.productImages}
        />
      </View>

      <View style={styles.bottomSubContainer}>
        <Headings texts={props.storeNameHeading} style={styles.headingStyles} />
        <Texts texts={props.storeDescription} style={styles.textStyles} />
      </View>
    </View>
  );
};

const GalleryPageTop = () => {
  return (
    <View style={styles.galleryTopContainer}>
      <View style={styles.subContainer}>
        <ProductImages
          source={{
            uri: "https://www.kolpaper.com/wp-content/uploads/2020/12/Rolex-Wallpaper-iPhone.jpg",
          }}
          style={styles.productImages}
        />
      </View>

      <View style={styles.bottomSubContainer}>
        <Headings texts="Rolex Official Store" style={styles.headingStyles} />
        <Texts
          texts="Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot Hier uw tekst, hier uw tekst wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar lorem ipsum ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres (ingevoegde humor en dergelijke)."
          style={styles.textStyles}
        />
      </View>
    </View>
  );
};

export { StorePageTop, GalleryPageTop };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subContainer: {
    padding: 20,
    width: "100%",
    height: 350,
  },

  productImages: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#292929",
  },

  bottomSubContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  textStyles: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },

  headingStyles: {
    fontSize: 40,
    width: "100%",
  },

  galleryTopContainer: {
    flex: 1,
  },

  productImages: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#292929",
  },
});
