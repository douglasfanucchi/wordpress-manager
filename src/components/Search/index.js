import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'
import { Ionicons } from '@expo/vector-icons'

export default function Search() {
  return(
    <>
      <TextInput style={styles.input} />
      <Ionicons name="md-search" size={20} style={styles.inputIcon} />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    flex: 1,
    padding: 7,
    paddingHorizontal: 20,
    paddingRight: 35,
    borderRadius: 5,
    borderColor: colors.greyBorder,
    color: colors.greyBorder
  },
  inputIcon: {
    position: "absolute",
    right: 30,
    color: colors.greyBorder
  }
})
