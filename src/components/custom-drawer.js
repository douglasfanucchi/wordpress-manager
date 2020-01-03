import React from "react";
import { StyleSheet, ScrollView, View, Text, Image, Button } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { DrawerItems } from "react-navigation-drawer";
import { colors } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const buttonTitle = 'Publicar';

export default CustomDrawerContentComponent = props => (
  <View style={ { flex: 1 } }>
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.header}
        colors={[colors.primary, colors.secondary]}
      >
        <View style={styles.userinfo}>
          <Text style={styles.username}>Felipe Fanucchi</Text>
          <Text style={styles.useremail}>flfanucchi@gmail.com</Text>
        </View>

        <View style={styles.avatar}>
          <Image
            source={require("../../assets/avatar-not-logged.png")}
            style={styles.avatarImage}
          ></Image>
        </View>
      </LinearGradient>

      <ScrollView style={styles.drawerItems}>
        <DrawerItems {...props} 
          getLabel={route => (props.getLabel(route))}
        />
      </ScrollView>

      <View style={styles.userActionsDivider}>
        <View style={styles.userActions}>
          <Button title={buttonTitle}></Button>
        </View>
      </View>

    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 100,
    backgroundColor: colors.primary
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#FFF",
    position: "absolute",
    bottom: -25,
    left: 110
  },
  drawerItems: {
    marginTop: 30,
    flex: 1
  },
  avatarImage: {
    resizeMode: "cover",
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff"
  },
  userinfo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 20
  },
  username: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5
  },
  useremail: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "100"
  },
  userActionsDivider: {
    borderTopWidth: 1,
    borderColor: '#999',
  },
  userActions: {
    margin: 20
  }
});
