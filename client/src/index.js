import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import VenueProvider from './providers/VenueProvider'

ReactDOM.render(
  <React.StrictMode>
    <VenueProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VenueProvider>
  </React.StrictMode>,
  document.getElementById('root')
);