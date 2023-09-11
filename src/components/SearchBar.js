import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, changeTerm, onTermFinish }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} size={30} />
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => changeTerm(text)}
        onEndEditing={onTermFinish}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
  },
  icon: {
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default SearchBar;
