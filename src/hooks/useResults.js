import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		searchAPI("restaurant");
	}, []);

	const searchAPI = async (searchTerm) => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "nanaimo",
				},
			});

			setResults(response.data.businesses);
		} catch (e) {
			setErrorMessage("Something went wrong!");
		}
	};

	return [searchAPI, results, errorMessage];
};
