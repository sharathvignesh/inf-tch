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
import Technologies from './containers/Technologies';
import Services from './containers/Services';
import Salesforce from './containers/Salesforce';
import Iot from './containers/Iot';
import Datasolutions from './containers/Datasol';
import Businessop from './containers/Businessop';
import Consult from './containers/Consult';
import Techop from './containers/Techop';

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
			path: '/technologies',
			component: Technologies
		},
		{
			path: '/technologies/salesforce',
			component: Salesforce
		},
		{
			path: '/technologies/iot',
			component: Iot
		},
		{
			path: '/technologies/datasolutions',
			component: Datasolutions
		},
		{
			path: '/services',
			component: Services
		},
		{
			path: '/services/business',
			component: Businessop
		},
		{
			path: '/services/technology',
			component: Techop
		},
		{
			path: '/services/consulting',
			component: Consult
		}
	]
};

export default routes;
