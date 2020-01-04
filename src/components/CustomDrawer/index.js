import React from "react";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { DrawerItems } from "react-navigation-drawer";
import { colors } from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import {
  TouchableOpacity,
  TouchableHighlight
} from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const buttonTitle = "Publicar";

// const currentRoute = props => props.activeItemKey === 'currentNavigation';

export default CustomDrawerContentComponent = props => (
  <View style={{ flex: 1 }}>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
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
            source={require("../../../assets/avatar-not-logged.png")}
            style={styles.avatarImage}
          ></Image>
        </View>
      </LinearGradient>

      <ScrollView style={styles.drawerItems}>
        <DrawerItems
          {...props}
          activeBackgroundColor="transparent"
          getLabel={scene => (
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>{props.getLabel(scene)}</Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.categoryLabel}>
          <FontAwesome name="list" size={16} />
          <View style={styles.menuItem}>
            <Text style={[styles.menuItemText, { marginLeft: 20 }]}>
              Categorias
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.userActionsDivider}>
        <View style={styles.userActions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
          </TouchableOpacity>
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
    borderColor: "#999"
  },
  userActions: {
    margin: 20
  },
  button: {
    borderWidth: 2,
    borderRadius: 3,
    borderColor: colors.gray,
    width: "100%",
    height: 40
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "900",
    textTransform: "uppercase",
    paddingTop: 10,
    textAlign: "center"
  },
  menuItem: {
    padding: 10
  },
  menuItemText: {
    fontWeight: "900"
  },
  categoryLabel: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
