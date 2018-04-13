# React Bootstrap Webpack

Simple project to integrate Bootstrap 4 with Webpack 4.

## Bootstrap 4

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

## Add SASS

$ yarn add -D sass-loader node-sass

Update webpack.config.js

      // Load SCSS
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" },   // translates CSS into CommonJS
          { loader: "sass-loader" },  // compiles Sass to CSS
        ]
      },

Add app.scss

    $sample_color: orange;
    body {color: $sample_color;}

Update index.js

    import './app.scss';


## Font awesome

$ yarn add font-awesome

Update webpack.config.js (Refine font and image loader)

      // Load images
      {
        test: /\.(png|svg|jpg|gif)(\?.*$|$)/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      // Load fonts
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?(\?.*$|$)/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(eot|ttf|otf)$/,
        loader: 'file-loader',
      },

Update app.scss

    @import '../node_modules/font-awesome/css/font-awesome.css';

