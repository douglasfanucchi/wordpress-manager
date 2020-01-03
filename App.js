import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StyleSheet, ScrollView, View, Text, Image } from "react-native";

import Reducers from "./src/reducers";

import Posts from "./src/screens/Posts";

import SafeAreaView from "react-native-safe-area-view";
import { DrawerItems } from "react-navigation-drawer";
import { colors } from "./src/constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const store = createStore(Reducers);

export default function App() {
  const AppNavigator = createDrawerNavigator(
    {
      Posts: {
        screen: Posts
      }
    },
    {
      statusBarAnimation: true,
      hideStatusBar: true,
      contentComponent: CustomDrawerContentComponent
    }
  );

  const Container = createAppContainer(AppNavigator);

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}>
      <LinearGradient
        style={styles.header}
        colors={[colors.primary, colors.secondary]}>
          <View style={styles.userinfo}>
            <Text style={styles.username}>Felipe Fanucchi</Text>
            <Text style={styles.useremail}>flfanucchi@gmail.com</Text>
          </View>
        <View style={styles.avatar}>
          <Image source={require('./assets/avatar-not-logged.png')} style={styles.avatarImage}></Image>
        </View>

      </LinearGradient>

      <View style={styles.drawerItems}>
        <DrawerItems {...props}/>
      </View>
    </SafeAreaView>
  </ScrollView>
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
    left: 105
  },
  drawerItems: {
    marginTop: 30
  },
  avatarImage: {
    resizeMode: 'cover',
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  userinfo: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
    marginBottom: 20
  },
  username: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  useremail: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: '100',
  }
});
