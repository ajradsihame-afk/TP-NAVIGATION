// Import de React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import de BrowserRouter pour activer le routage
import { BrowserRouter } from 'react-router-dom';

// Import du composant principal
import App from './App';

// Rendu de l'application dans l'élément avec id "root"
ReactDOM.render(
  // BrowserRouter entoure l'application pour gérer la navigation
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);