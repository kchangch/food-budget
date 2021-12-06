import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchAPI, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		// price === '$' || price === '$$' || === price === '$$$'
		return results.filter((results) => {
			return results.price === price;
		});
	};

	return (
		// Use empty tags to allow the screen to render all the elements
		// Otherwise, if we use View, we need to add style of flex = 1
		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchAPI(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList title="Cheap food" results={filterResultsByPrice("$")} />
				<ResultsList
					title="Regular food"
					results={filterResultsByPrice("$$")}
				/>
				<ResultsList
					title="Expensive food"
					results={filterResultsByPrice("$$$")}
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
