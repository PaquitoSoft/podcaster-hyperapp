import config from '../config/routing-config';

const appActions = {
	navigate: url => (state, actions) => {
		const routeConfig = config.find(configItem =>
			configItem.pattern.test(url)
		);

		if (routeConfig) {
			// Extract params from the URL
			// We want the route configuration to return an object with the right attributes
			const urlParams = routeConfig.paramsResolver
				? routeConfig.paramsResolver(url.match(routeConfig.pattern))
				: {};

			routeConfig.component
				.dataLoader(urlParams)
				.then(data => {
					window.history.pushState(null, '', url);
					actions.updateRouterState({
						url,
						currentComponent: routeConfig.component,
						data,
						params: urlParams
					});
					window.scrollTo(0, 0);
				})
				.catch(error => {
					console.error(`Error trying to navigate: ${error}`);
					console.error(error.stack);
				});
			return { ...state, isLoading: true };
		} else {
			console.error(`No route config for URL: ${url}`);
			return { ...state, isLoading: false };
		}
	},

	updateLoading: value => state => {
		return {
			...state,
			isLoading: value
		};
	},

	updateRouterState: routerState => state => {
		return {
			...state,
			router: routerState,
			isLoading: false
		};
	},

	filterPodcasts: ({ filter = '', podcasts = [] }) => state => {
		const regExp = new RegExp(filter, 'i');
		const filteredPodcasts = podcasts.filter(podcast =>
			regExp.test(podcast.name + podcast.author)
		);
		return {
			...state,
			filter,
			filteredPodcasts
		};
	}
};

export default appActions;
