import HomePage from '../components/home-page/home-page';
import PodcastPage from '../components/podcast-page/podcast-page';
import EpisodePage from '../components/episode-page/episode-page';

const routingConfig = [
	{
		pattern: /^\/$/,
		component: HomePage
	},
	{
		pattern: /^\/podcast\/(\d*)\/?$/,
		paramsResolver: urlMatch => {
			return {
				podcastId: urlMatch[1]
			};
		},
		component: PodcastPage
	},
	{
		pattern: /^\/podcast\/(\d*)\/episode\/(.*)\/?$/,
		paramsResolver: urlMatch => {
			return {
				podcastId: urlMatch[1],
				episodeId: urlMatch[2]
			};
		},
		component: EpisodePage
	}
];

export default routingConfig;
