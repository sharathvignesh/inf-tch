import Base from './components/Base';
import Landing from './containers/Landing';
import About from './containers/About';
import Contact from './containers/Contact';

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
		},
		{
			path: '/contact',
			component: Contact
		}
	]
};

export default routes;
