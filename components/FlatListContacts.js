import React from "react";
import { FlatList } from "react-native";
import Proptypes from "prop-types";

import Row from "./Row";

const renderItem = ({ item }) => <Row {...item} />;

const FlatListContacts = (props) => (
  <FlatList renderItem={renderItem} data={props.contacts} />
);

FlatListContacts.propTypes = {
  contacts: Proptypes.array,
};

export default FlatListContacts;
