import Base from './components/Base';
import Landing from './containers/Landing';
import About from './containers/About';

const routes = {
	component: Base,
	childRoutes: [
		{
			path: '/',
			component: Landing
		},
		{
			path: '/discover',
			component: About
		}
	]
};

export default routes;
