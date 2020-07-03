import React, { Component } from "react";
import AddContactForm from "../components/AddContactForm";
import { connect } from "react-redux";

import { addContact } from "../redux/actions";

class AddContactScreen extends Component {
  static navigationOptions = {
    headerTitle: "New Contact",
  };

  handleSubmit = (formState) => {
    this.props.addContact({ name: formState.name, phone: formState.phone });
    this.props.navigation.navigate("ContactList");
  };

  render() {
    return <AddContactForm onSubmit={this.handleSubmit} />;
  }
}

export default connect(null, { addContact: addContact })(AddContactScreen);
