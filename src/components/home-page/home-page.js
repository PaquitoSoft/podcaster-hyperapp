import { h } from 'hyperapp';
import { getAllPodcasts } from '../../api/podcaster';

import PodcastSummary from './podcast-summary';

function HomePage({ state, actions, location, match }) {
	const filter = state.filter;
	const { originalPodcasts } = state;
	const filteredPodcasts = state.filteredPodcasts || originalPodcasts; 
	
	return (
		<div class="home-page podcasts-grid" oncreate={() => { actions.loadAllPodcasts() }}>
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
							podcasts: originalPodcasts
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

export default HomePage;
