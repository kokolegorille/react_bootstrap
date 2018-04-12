import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';

// Bootstrap 4
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import './app.css';

import App from './app.js'

const app = document.getElementById('app');
render(
  <App />,
  app,
);
