import React from "react";
import { Text, StyleSheet, SectionList } from "react-native";
import Row from "./Row";
import PropTypes from "prop-types";

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;

const SectionListContacts = (props) => {
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map((letter) => ({
      data: contactsByLetter[letter],
      title: letter,
    }));

  return (
    <SectionList
      keyExtractor={(item) => item.phone}
      style={styles.container}
      sections={sections}
      renderItem={({ item }) => (
        <Row {...item} onSelectContact={props.onSelectContact} />
      )}
      renderSectionHeader={renderSectionHeader}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

SectionListContacts.propTypes = {
  contacts: PropTypes.array,
};

export default SectionListContacts;
