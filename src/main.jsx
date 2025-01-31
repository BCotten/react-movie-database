import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './routers/AppRouter.jsx';
import React from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
