import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer xH9Rxv6_G-9YChAe1MVr6cyXkUCQBEMGXp3BPk1bPpXHzISbQczyHCsvuKXETLfaFrAf21hyKHJZvXxNH8Cw2FhX1WDroAjRjVgw2SuRPLiwnQh_P6uTkDyh-ammYXYx",
	},
});
