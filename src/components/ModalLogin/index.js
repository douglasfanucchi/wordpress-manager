import React, { Component } from "react";
import { View, TextInput, Text, Button, Modal, StyleSheet } from "react-native";
import { colors } from '../../constants/colors'
import { connect } from "react-redux";

class ModalLogin extends Component {
  render() {
    return (
      <Modal
        transparent
        animationType={"fade"}
        visible={this.props.open}
        onRequestClose={() => this.props.closeModal()}
      >
        <View style={styles.modalStyles}>
          <View style={styles.containerStyles}>
            <View style={styles.panel}>
              <Text style={styles.label}>Usuário</Text>
              <TextInput style={styles.input} />
              <Text style={styles.label}>Senha</Text>
              <TextInput secureTextEntry={true} style={styles.input} />
            </View>
            <Button icon={'close'} title={'Entrar'} onPress={() => this.props.closeModal()}></Button>
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
  },
  containerStyles: {
    flex: 1,
    marginVertical: 300,
    marginHorizontal: 40,
    padding: 20,
    backgroundColor: 'rgb(255, 255, 255)',
    justifyContent: 'space-between'
  },
  input: {
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingRight: 35,
    borderRadius: 5,
    borderColor: colors.greyBorder,
    color: '#000',
    marginBottom: 20,
    fontSize: 14
  },
  panel: {

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
