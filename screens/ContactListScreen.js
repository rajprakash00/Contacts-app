import React, { Component } from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";

import SectionListContacts from "../components/SectionListContacts";

class ContactListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Contacts",
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("AddContact")}>
        <View style={styles.buttonContainer}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Add</Text>
        </View>
      </TouchableOpacity>
    ),
  });

  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  handleSelectContact = (contact) => {
    this.props.navigation.push("ContactDetails", contact);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          color="#00ADB5"
          title="toggle contacts"
          onPress={this.toggleContacts}
        />

        {this.state.showContacts && (
          <SectionListContacts
            contacts={this.props.contacts}
            onSelectContact={this.handleSelectContact}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  buttonContainer: {
    borderRadius: 20,
    backgroundColor: "#a41034",
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginRight: 10,
  },
});

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(ContactListScreen);
