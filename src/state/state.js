const state = {
	router: {
		currentComponent: null,
		url: '/',
		data: null,
		params: {}
	},
	isLoading: false,

	filter: null,
	filteredPodcasts: null,
	currentPodcast: null
};

export default state;
