import React, { Component } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";
import { connect } from "react-redux";

class ModalLogin extends Component {
  render() {
    return (
      <Modal
        animationType={"slide"}
        visible={this.props.open}
        onRequestClose={() => this.props.closeModal()}
      >
        <View styles={styles.modalStyles}>
          <View styles={styles.containerSyles}>
            <Text>AAAAA</Text>
            <Button icon={'close'} title={'fechar'} onPress={() => this.props.closeModal()}></Button>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalStyles: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: '100%',
    height: 500
  },
  containerSyles: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 20,
    padding: 20
  }
});

const mapStateToProps = state => ({
  open: state.modalLogin.open
});

const mapDispatchToProps = dispatch => ({
  closeModal: function() {
    dispatch({ type: "closeModal" });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
