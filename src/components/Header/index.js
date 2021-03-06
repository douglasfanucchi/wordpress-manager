import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { colors } from "../../constants/colors";
import { connect } from "react-redux";

import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";

import Search from "../Search";
import ModalLogin from "../ModalLogin"

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <ModalLogin></ModalLogin>
        <View style={styles.row}>
          <Ionicons
            name="md-menu"
            size={20}
            style={styles.icon}
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Text style={styles.currentPage}>Home</Text>
        </View>
        <View style={[styles.row, styles.mt15]}>
          <Search />
        </View>
        <View style={[styles.row, styles.mt15]}>
          <TouchableOpacity style={styles.headerActions}>
            <FontAwesome name="list" size={16} style={styles.actionIcon} />
            <Text style={styles.actionText}>Categorias</Text>
          </TouchableOpacity>
          <View style={styles.pipe}></View>
          <TouchableOpacity
            style={styles.headerActions}
            onPress={() => {
              console.log(this);
              this.props.openModal()
            }}
          >
            <FontAwesome
              name="pencil-square-o"
              size={16}
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>Publicar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight + 15,
    paddingBottom: 15,
    backgroundColor: colors.clear,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3
  },
  currentPage: {
    fontSize: 16,
    fontWeight: "bold"
  },
  mt15: {
    marginTop: 15
  },
  icon: {
    marginRight: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15
  },
  headerActions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  pipe: {
    borderRightWidth: 1,
    borderRightColor: colors.grey,
    alignSelf: "stretch"
  },
  actionText: {
    fontSize: 16
  },
  actionIcon: {
    marginRight: 5
  }
});

const mapDispatchToProps = dispatch => ({
  openModal: function() {
    dispatch({ type: "openModal" });
  }
});

export default connect(null, mapDispatchToProps)(Header);
