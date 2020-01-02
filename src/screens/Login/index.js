import React from "react";
import { Text, StatusBar, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants/colors";

export default function Login() {
  return (
    <>
      <StatusBar hidden={true}></StatusBar>

      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.cover}
      >
        <View style={styles.panel}></View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  cover: {
    flex: 1
  },
  panel: {
    backgroundColor: colors.primary,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: '#444',
    shadowOpacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300
  }
});
