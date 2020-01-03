import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { colors } from '../../constants/colors'

export default function Card() {
  return(
    <View style={styles.card}>
      <Image 
        style={styles.cardThumb} 
        transform={[ {scaleY: 1.1}, {translateY: -10}]} 
        source={{uri: 'https://i.picsum.photos/id/20/300/300.jpg'}} 
      />
      <View style={styles.cardInfo}>
        <Text style={styles.cardContent}>Hardly Anything Takes More Courage</Text>
        <TouchableOpacity style={styles.cardReadMore}><Text>Leia mais</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.clear,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
    flex: 1,
    flexWrap: "wrap",
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardThumb: {
    height: 130,
    width: 170,
    maxWidth: "100%",
    borderRadius: 5,
    marginRight: 40,
    borderWidth: 1
  },
  cardInfo: {
    flex: 1,
    justifyContent: "space-between"
  },
  cardContent: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 25
  },
  cardReadMore: {
    borderWidth: 1,
    alignSelf: "flex-end",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 2,
    position: "relative",
    top: -3
  }
})
