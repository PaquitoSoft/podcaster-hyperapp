import { h } from 'hyperapp';

function Router({ state, actions }) {
  const {
    currentComponent: Component,
    data,
    url,
    params
  } = state.router;

	if (Component) {
    return <Component state={state} actions={actions} />
	} else {
		return null;
	}
}

export default Router;
