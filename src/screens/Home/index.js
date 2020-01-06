import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../../constants/colors";
import { connect } from "react-redux";

import Card from "../../components/Card";
import { ScrollView } from "react-native-gesture-handler";

function Posts({ logged, jwt, logar }) {
  return (
    <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Card />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Card />
        </View>
        <View style={styles.column}>
          <Card />
        </View>
      </View>

      <ScrollView>
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text style={{ fontWeight: "900", fontSize: 20 }}>Categorias</Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
          
          <View style={{ flex: 1, width: 100, height: 100, marginLeft: 20 }}>
            <Image
              source={require("../../../assets/avatar-not-logged.png")}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover"
              }}
            ></Image>
            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryText}>Olá Mundo!</Text>
            </View>
          </View>
          
          <View style={{ flex: 1, width: 100, height: 100, marginLeft: 20 }}>
            <Image
              source={require("../../../assets/avatar-not-logged.png")}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover"
              }}
            ></Image>
            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryText}>Olá Mundo!</Text>
            </View>
          </View>
          
          <View style={{ flex: 1, width: 100, height: 100, marginLeft: 20 }}>
            <Image
              source={require("../../../assets/avatar-not-logged.png")}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover"
              }}
            ></Image>
            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryText}>Olá Mundo!</Text>
            </View>
          </View>
          
          <View style={{ flex: 1, width: 100, height: 100, marginLeft: 20 }}>
            <Image
              source={require("../../../assets/avatar-not-logged.png")}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover"
              }}
            ></Image>
            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryText}>Olá Mundo!</Text>
            </View>
          </View>
          
          <View style={{ flex: 1, width: 100, height: 100, marginLeft: 20 }}>
            <Image
              source={require("../../../assets/avatar-not-logged.png")}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover"
              }}
            ></Image>
            <View style={styles.categoryOverlay}>
              <Text style={styles.categoryText}>Olá Mundo!</Text>
            </View>
          </View>

        </ScrollView>
      </ScrollView>
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
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  categoryText: {
    fontWeight: "900",
    color: "#FFF",
    fontSize: 14,
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
