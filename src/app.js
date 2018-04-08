import { h, app } from 'hyperapp';
import { Switch, Route, location } from '@hyperapp/router';
import logger from '@hyperapp/logger';
import state from './state/state';
import actions from './state/actions';

import './styles.css';

import Header from './components/shared/header';
// import Router from './components/shared/router';
import HomePage from './components/home-page/home-page';
import PodcastPage from './components/podcast-page/podcast-page';
import EpisodePage from './components/episode-page/episode-page';


function appClickHandler(navigate, event) {
	let target = event.target;

	while (target && target.tagName !== 'A') {
		target = target.parentNode;
	}

	if (target) {
		event.preventDefault();
		navigate(target.pathname);
	}
}

function App(state, actions) {
	return (
		<div onclick={appClickHandler.bind(null, actions.navigate)}>
			<Header showLoading={state.isLoading} />

			<main className="main-content">
				<Switch>
					<Route exact path="/" render={({ location, match }) => {
						return (<HomePage state={state} actions={actions} location={location} match={match} />);
					}} />
					<Route exact path="/podcast/:podcastId/episode/:episodeId" render={({ location, match }) => {
						return (<EpisodePage state={state} actions={actions} location={location} match={match} />);
					}} />
					<Route exact path="/podcast/:podcastId" render={({ location, match }) => {
						return (<PodcastPage state={state} actions={actions} location={location} match={match} />);
					}} />
				</Switch>
			</main>
		</div>
	);
}

// const connectedActions = logger()(app)(state, actions, App, document.body);
const connectedActions = app(state, actions, App, document.body);
// connectedActions.navigate(window.location.pathname);
location.subscribe(connectedActions.location);
