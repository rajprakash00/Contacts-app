import React from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";

//import { login } from "../api";

import { logInUser } from "../redux/actions";
import { connect } from "react-redux";

class LoginScreen extends React.Component {
  state = {
    username: "",
    password: "",
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.token);
    if (nextProps.token) {
      this.props.navigation.navigate("Main");
    }
  }
  /*componentDidUpdate(props) {
    if (props.token) {
      this.props.navigation.navigate("Main");
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.token != state.token) return { token: props.token };
  }*/

  _login = async () => {
    this.props.logInUser(this.state.username, this.state.password);
  };

  handleUsernameUpdate = (username) => {
    this.setState({ username });
  };

  handlePasswordUpdate = (password) => {
    this.setState({ password });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{this.props.err}</Text>

        <TextInput
          placeholder="username"
          style={styles.input}
          value={this.state.username}
          onChangeText={this.handleUsernameUpdate}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="password"
          style={styles.input}
          value={this.state.password}
          onChangeText={this.handlePasswordUpdate}
          secureTextEntry
        />
        <View
          style={{
            alignItems: "center",
            padding: 10,
          }}
        >
          <Button
            color="#a41034"
            title="Press to Log In"
            onPress={this._login}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFDDE2FF",
  },
  text: {
    textAlign: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1.5,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  error: {
    textAlign: "center",
    color: "red",
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({
  err: state.auth.loginErr,
  token: state.auth.token,
});

export default connect(mapStateToProps, { logInUser })(LoginScreen);
