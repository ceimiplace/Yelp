import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import Results from "../components/Results";
const SearchScreen = () => {
  const [searchTem, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  function returnResults(dollar) {
    return results.filter((element) => element.price === dollar);
  }

  return (
    <>
      <SearchBar
        term={searchTem}
        changeTerm={(elem) => {
          setSearchTerm(elem);
        }}
        onTermFinish={() => searchApi(searchTem)}
      />
      <ScrollView style={{ gap: 10 }}>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Results results={returnResults("$")} title={"Cost effective"} />
        <Results results={returnResults("$$")} title={"Afordable"} />
        <Results results={returnResults("$$$")} title={"Luxury Delight"} />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
