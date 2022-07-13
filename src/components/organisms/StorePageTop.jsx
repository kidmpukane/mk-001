import { StyleSheet, Text, View } from 'react-native'
import { ProductImages } from '../atoms/Images'
import { Headings, Texts } from '../atoms/headings'
import React from 'react'

const StorePageTop = () => {
  return (
    <View   
      style={{
        flex: 1,
    }}>
      <View 
      style={{   
        padding: 20,
        width: '100%',
        height: 350,
    }}>
    <ProductImages
      source={{ 
        uri: 'https://i.pinimg.com/originals/fb/6a/50/fb6a50980a2cf36516e848d0fa14c36f.png' }}
      style={{ 
        height: "100%",
        width: "100%",
        borderRadius: 20,
        backgroundColor: "#292929"
           }}
    />
    </View>

    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      }}>
    <Headings 
      texts="Art Studio Store"
      style={{
        fontSize: 40,
        width: "100%"
      }}/>
    <Texts 
      texts="Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot Hier uw tekst, hier uw tekst wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar lorem ipsum ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres (ingevoegde humor en dergelijke)."
      style={{
        color: "#D9D9D9",
        fontSize: 12,
        fontWeight: "bold",

      }}/>
    </View>
    </View>
  )
}

const GalleryPageTop = () => {
  return (
    <View   
      style={{
        flex: 1,
    }}>
      <View 
      style={{   
        padding: 20,
        width: '100%',
        height: 350,
    }}>
    <ProductImages
      source={{ 
        uri: 'https://www.kolpaper.com/wp-content/uploads/2020/12/Rolex-Wallpaper-iPhone.jpg' }}
      style={{ 
        height: "100%",
        width: "100%",
        borderRadius: 20,
        backgroundColor: "#292929"
           }}
    />
    </View>

    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      }}>
    <Headings 
      texts="Rolex Official Store"
      style={{
        fontSize: 40,
        width: "100%"
      }}/>
    <Texts 
      texts="Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een pagina, afgeleid wordt door de tekstuele inhoud. Het belangrijke punt van het gebruik van Lorem Ipsum is dat het uit een min of meer normale verdeling van letters bestaat, in tegenstelling tot Hier uw tekst, hier uw tekst wat het tot min of meer leesbaar nederlands maakt. Veel desktop publishing pakketten en web pagina editors gebruiken tegenwoordig Lorem Ipsum als hun standaard model tekst, en een zoekopdracht naar lorem ipsum ontsluit veel websites die nog in aanbouw zijn. Verscheidene versies hebben zich ontwikkeld in de loop van de jaren, soms per ongeluk soms expres (ingevoegde humor en dergelijke)."
      style={{
        color: "#D9D9D9",
        fontSize: 12,
        fontWeight: "bold",

      }}/>
    </View>
    </View>
  )
}

export {  StorePageTop, GalleryPageTop  }

const styles = StyleSheet.create({})