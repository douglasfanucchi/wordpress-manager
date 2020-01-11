import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { colors } from "../../constants/colors";

export default PublishButton = props => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText} onPress={() => {}}>
      Publicar
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
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
  }
});

// const mapDispatchToProps = dispatch => ({
//   openModal: function() {
//     dispatch({ type: "openModal" });
//   }
// });

// export default connect(null, mapDispatchToProps)(PublishButton);
