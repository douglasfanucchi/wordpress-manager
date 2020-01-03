import React from "react";
import {Text, View, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";
import { connect } from "react-redux";

import Card from '../../components/Card'
import { ScrollView } from "react-native-gesture-handler";

function Posts({ logged, jwt, logar }) {
  return (
    <ScrollView contentContainerStyle={{minHeight: "100%"}}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Card />
        </View>
      </View>
      <View style={styles.row} >
        <View style={styles.column}>
          <Card />
        </View>
        <View style={styles.column}>
          <Card />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginHorizontal: -10,
    marginTop: 30
  },
  column: {
    flex: 1,
    marginHorizontal: 10
  }
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
