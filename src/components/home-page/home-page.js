import { h } from 'hyperapp';
import { getAllPodcasts } from '../../api/podcaster';

import PodcastSummary from './podcast-summary';

function HomePage({ state, actions }) {
	const podcasts = state.router.data;
	const filter = state.filter;
	const filteredPodcasts = state.filteredPodcasts || [...podcasts];

	return (
		<div class="podcasts-grid">
			<div class="filter">
				<span class="badge">{filteredPodcasts.length}</span>
				<input
					type="text"
					name="filter-value"
					autoFocus
					placeholder="Filter podcasts..."
					value={filter}
					onkeyup={e => {
						actions.filterPodcasts({
							filter: e.target.value,
							podcasts
						});
					}}
				/>
			</div>
			<div class="podcasts-list">
				{filteredPodcasts.map(podcast => <PodcastSummary podcast={podcast} />)}
			</div>
		</div>
	);
}

HomePage.dataLoader = function() {
	return getAllPodcasts();
};

export default HomePage;
