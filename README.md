# React Bootstrap

Simple project to integrate Bootstrap 4 with Webpack 4.

Warning, popper and popper.js are not the same!
https://stackoverflow.com/questions/45660672/webpack-fails-to-load-bootstrap-v4-0-0-beta

$ yarn add jquery popper.js bootstrap

Add plugin 

    // https://stackoverflow.com/questions/45660672/webpack-fails-to-load-bootstrap-v4-0-0-beta
    new Webpack.ProvidePlugin({ // inject ES5 modules as global vars
      $: 'jquery',
      jQuery: 'jquery', 'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),

Update index.js

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