import App from './components/App.js';
import LandingPage from './containers/LandingPage.js';
import SetUpPage from './containers/SetUpPage.js';
import CompanyPage from './containers/CompanyPage.js';
import UserPage from './containers/UserPage.js';

const routes = {
  // App component (wrapper for the whole application).
  component: App,
  childRoutes: [

    {
      path: '/',
      component: LandingPage
    },

    {
      path: '/setUpPage',
      component: SetUpPage
    },

    {
      path: '/CompanyPage',
      component: CompanyPage
    },

    {
      path: '/UserPage',
      component: UserPage
    }

  ]
};

export default routes;
