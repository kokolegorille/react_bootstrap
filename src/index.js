import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';

import './app.css';

import App from './app.js'

const app = document.getElementById('app');
render(
  <App />,
  app,
);
