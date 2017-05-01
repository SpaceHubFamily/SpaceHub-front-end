import App from './components/App.jsx';
import LandingPage from './containers/LandingPage.jsx';
import SetUpPage from './containers/SetUpPage.jsx';
import CompanyPage from './containers/CompanyPage.jsx';
import UserPage from './containers/UserPage.jsx';

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
