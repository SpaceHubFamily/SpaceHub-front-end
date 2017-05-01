import App from './components/App.js';
import LandingPage from './components/LandingPage.js';
import SetUpPage from './components/SetUpPage.js';
import CompanyPage from './components/CompanyPage.js';
import UserPage from './components/UserPage.js';

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
