import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  View,
} from "react-native";
import Constants from "expo-constants";

class AddContactForm extends Component {
  state = {
    name: "",
    phone: "",
    isFormValid: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.name !== prevState.name ||
      this.state.phone !== prevState.phone
    ) {
      this.validateForm();
    }
  }

  getHandler = (key) => (val) => {
    this.setState({ [key]: val });
  };

  handleNameChange = this.getHandler("name");

  handlePhoneChange = this.getHandler("phone");

  handlePhoneChange = (phone) => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({ phone });
    }
  };

  validateForm = () => {
    const names = this.state.name.split(" ");
    if (
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      names.length >= 2 &&
      names[0] &&
      names[1]
    ) {
      this.setState({ isFormValid: true });
    } else {
      this.setState({ isFormValid: false });
    }
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.getHandler("name")}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.getHandler("phone")}
          keyboardType="numeric"
          placeholder="Phone"
        />
        <View
          style={{
            alignItems: "center",
            padding: 10,
          }}
        >
          <Button
            title="Submit"
            onPress={this.handleSubmit}
            disabled={!this.state.isFormValid}
            color={!this.state.isFormValid ? null : "#a41034"}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 3,
  },
});

export default AddContactForm;
