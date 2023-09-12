import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const ResultDetails = ({ result }) => {
  return (
    <View style={{ marginLeft: 10, gap: 5, width: 200 }}>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: result.image_url }}
      />
      <Text style={styles.title}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default ResultDetails;
