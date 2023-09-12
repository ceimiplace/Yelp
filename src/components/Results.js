import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";
const Results = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("SingleProduct")}
          >
            <ResultDetails result={item} />
          </TouchableOpacity>
        )}
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
export default withNavigation(Results);
