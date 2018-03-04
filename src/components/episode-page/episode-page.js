import { h } from 'hyperapp';
import { getPodcastDetail } from '../../api/podcaster';

import Sidebar from '../shared/sidebar';

function EpisodePage({ state }) {
	const { podcast, currentEpisode } = state.router.data;
	
	return (
		<div className="episode-detail-page page-with-sidebar">
			<div className="sidebar-section">
				<Sidebar podcast={podcast} />
			</div>
			<div className="content-section">
				<div className="episode-detail section">
					<div className="title">{currentEpisode.title}</div>
					<div className="subtitle" oncreate={e => e.innerHTML = currentEpisode.description}></div>
					<hr />
					<div className="player">
						<audio src={currentEpisode.mediaUrl} controls></audio>
					</div>
				</div>
			</div>
		</div>
	);
}

EpisodePage.dataLoader = function(params) {
	return getPodcastDetail(params.podcastId)
		.then(podcast => {
			return {
				podcast,
				currentEpisode: podcast.episodes.find(episode => episode.id == params.episodeId)
			};
		});
};

export default EpisodePage;
