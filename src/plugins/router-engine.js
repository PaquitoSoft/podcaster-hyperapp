import config from '../config/routing-config';

function getConfigForUrl(url) {
  return config.find(configItem => configItem.pattern.test(url));
}

// export function urlChangeHandler(url) {
//   const currentRouteConfig = getConfigForUrl(url);

//   if (!currentRouteConfig) throw new Error('No route found for URL: ' + url);

//   // Extract params from the URL
//   // We want the route configuration to return an object with the right attributes
//   const urlParams = currentRouteConfig.paramsResolver ?
//     currentRouteConfig.paramsResolver(url.match(currentRouteConfig.pattern)) :
//     {};

//   this.sendLoadingEvent(true);

//   // Fire the function that will provide the data needed by the component
//   currentRouteConfig.component.dataLoader(urlParams)
//     .then(data => {
//       this.render(currentRouteConfig.component, data);
//       this.sendLoadingEvent(false);
//       window.scrollTo(0, 0); // Restore scroll upon navigation

//       if (!isHistoryEvent) {
//         // Update URL if this is not a happening
//         // because of a popstate event, as, in that scenario
//         // url has already changed
//         window.history.pushState(null, '', url);
//       }
//     })
//     .catch(err => {
//       this.sendLoadingEvent(false);
//       console.error(`Error trying to navigate: ${err}`);
//       console.error(err.stack);
//     })
// }