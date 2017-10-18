import Base from './components/Base';
import Landing from './containers/Landing';

const routes = {
	component: Base,
	childRoutes: [
		{
			path: '/',
			component: Landing
		},
	]
};

export default routes;
