import { h } from 'hyperapp';
import { getPodcastDetail } from '../../api/podcaster';

import Sidebar from '../shared/sidebar';

function renderEpisodes(podcast) {
	return podcast.episodes.map(episode => (
		<tr className="podcast-episode-summary">
			<td>
				<a href={`/podcast/${podcast.id}/episode/${episode.id}`}>{episode.title}</a>
			</td>
			<td>{episode.date}</td>
			<td className="duration">{episode.duration}</td>
		</tr>
	));
}

function PodcastPage({ state }) {
	const podcast = state.router.data;

	return (
		<div className="podcast-detail-page page-with-sidebar">
			<section className="sidebar-section">
				<Sidebar podcast={podcast} />
			</section>
			<section className="content-section">
				<div className="section podcast-episodes-count">
					<span>
						Episodes: {podcast.episodes.length}
					</span>
				</div>
				<div className="section podcast-episodes">
					<table className="table table-hover table-striped">
						<thead>
							<tr>
								<th>Title</th>
								<th>Date</th>
								<th>Duration</th>
							</tr>
						</thead>
						<tbody>
							{renderEpisodes(podcast)}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	);
}

PodcastPage.dataLoader = function(params) {
	return getPodcastDetail(params.podcastId);
};

export default PodcastPage;
