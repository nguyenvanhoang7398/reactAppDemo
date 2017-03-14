import React from 'react';

import { Route, IndexRoute } from 'react-router';  

import App from '../public/App';  

import TwoPanelView from '../public/view/TwoPanelView';

import ThreePanelView from '../public/view/ThreePanelView';

import { Router, browserHistory } from 'react-router';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
	    	<IndexRoute component={ThreePanelView} />
	    	<Route path="/twopanelview" component={TwoPanelView} />
	    	<Route path="/threepanelview" component={ThreePanelView} />
	  	</Route>
	</Router>
);

export default routes;