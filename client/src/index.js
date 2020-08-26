import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import VenueProvider from './providers/VenueProvider';
import ResultProvider from './providers/ResultProvider';
import AuthProvider from './providers/AuthProvider';


ReactDOM.render(
  
  <React.StrictMode>
    <AuthProvider>
      <VenueProvider>
        <ResultProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ResultProvider>
      </VenueProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);