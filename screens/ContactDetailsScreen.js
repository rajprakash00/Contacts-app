import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class ContactDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return { headerTitle: navigation.getParam("name") };
  };

  render() {
    return (
      <View>
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>
          {this.props.navigation.getParam("phone")}
        </Text>
        <Button
          title="Got to random contact"
          onPress={this.goToRandomContact}
        />
      </View>
    );
  }

  goToRandomContact = () => {
    const { contacts } = this.props.screenProps;
    const phone = this.props.navigation.getParam("phone");
    let randomContact;
    while (!randomContact) {
      const randomIndex = Math.floor(Math.random() * contacts.length);
      if (contacts[randomIndex].phone !== phone) {
        randomContact = contacts[randomIndex];
      }
    }

    this.props.navigation.push("ContactDetails", {
      ...randomContact,
    });
  };
}

export default ContactDetailsScreen;
