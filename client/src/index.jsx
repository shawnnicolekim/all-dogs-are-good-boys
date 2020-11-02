import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import 'regenerator-runtime';
// import 'core-js';
import App from './components/App.jsx';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('goodboys')
);