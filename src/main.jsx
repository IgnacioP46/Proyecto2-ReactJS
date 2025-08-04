import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HoraProvider } from './contex/HoraProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HoraProvider>
      <App />
    </HoraProvider>
  </React.StrictMode>
);
