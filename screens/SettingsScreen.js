import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons name="md-options" size={25} color={tintColor} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings coming soon.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
});

export default SettingsScreen;
