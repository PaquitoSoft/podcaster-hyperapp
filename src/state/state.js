import { location } from '@hyperapp/router';

const state = {
	location: location.state,

	router: {
		currentComponent: null,
		url: '/',
		data: null,
		params: {}
	},
	isLoading: false,

	originalPodcasts: [],
	filter: null,
	filteredPodcasts: null,
	currentPodcast: null
};

export default state;
