import Base from './components/Base';
import Landing from './containers/Landing';
import About from './containers/About';
import Contact from './containers/Contact';
import Industries from './containers/Industries';
import Banking from './containers/Banking';
import Insurance from './containers/Insurance';
import Public from './containers/Public';
import Retail from './containers/Retail';
import Tech from './containers/Tech';
import Travel from './containers/Travel';
import Services from './containers/Services';

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
		},
		{
			path: '/industries',
			component: Industries
		},
		{
			path: 'industries/insurance',
			component: Insurance
		},
		{
			path: 'industries/banking',
			component: Banking
		},
		{
			path: 'industries/technology',
			component: Tech
		},
		{
			path: 'industries/retail',
			component: Retail
		},
		{
			path: 'industries/travel',
			component: Travel
		},
		{
			path: 'industries/public',
			component: Public
		},
		{
			path: '/services',
			component: Services
		}
	]
};

export default routes;
