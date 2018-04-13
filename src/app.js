import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './components/nav_bar';

const App = () => (
  <div>
    <NavBar />
    <div className='container'>
      <h1>Hello from React!?</h1>
      <i className='fa fa-bars'></i>
    </div>
  </div>
);

export default App;
