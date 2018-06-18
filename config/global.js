export default {
	port: 8080,
	cors: {
		origin: [
			"http://localhost:3000"
		],
		methods: [
			"GET",
			"POST"
		],
		allowedHeaders: [
			"Content-Type",
			"Authorization"
		],
		optionsSuccessStatus: 204 // some legacy browsers (IE11, various SmartTVs) choke on 204
	},
	bodyLimit: "100kb",
}