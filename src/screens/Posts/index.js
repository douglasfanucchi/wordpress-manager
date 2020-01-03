import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants/colors";
import { connect } from "react-redux";

function Posts({ logged, jwt, logar }) {
  return (
    <>
      <View style={styles.cover}>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cover: {
    flex: 1
  },
});

const mapStateToProps = state => ({
  logged: state.login.logged,
  jwt: state.login.jwt
});

const mapDispatchToProps = dispatch => ({
  logar: function(jwt) {
    dispatch({ type: "logar", jwt });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
