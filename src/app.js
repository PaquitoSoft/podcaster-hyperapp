import { h, app } from 'hyperapp';
import logger from '@hyperapp/logger';
import state from './state/state';
import actions from './state/actions';

import './styles.css';

import Header from './components/shared/header';
import Router from './components/shared/router';

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
				<Router state={state} actions={actions} />
			</main>
		</div>
	);
}

const connectedActions = logger()(app)(state, actions, App, document.body);
// const connectedActions = app(state, actions, App, document.body);
connectedActions.navigate(window.location.pathname);
