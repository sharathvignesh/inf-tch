import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router';
import { browserHistory } from 'react-router'
import routes from './routes.js';


ReactDOM.render(
	<Router history={browserHistory} routes={routes} />, document.getElementById('root'));
registerServiceWorker();
