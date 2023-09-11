import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ResultDetails from "./ResultDetails";
const Results = ({ title, results }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResultDetails result={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
});
export default Results;
