import React from 'react';
// import RaisedButton from 'material-ui/RaisedButton';
import Header from './Header'
import ResponsiveVideo from './ResponsiveVideo';
import store from '../utils/badstore';


const LandingPage = () => (
  <div>
    <Header store={store}/>
    <ResponsiveVideo />
  </div>
);

export default LandingPage;
