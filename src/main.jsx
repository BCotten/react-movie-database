import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './routers/AppRouter.jsx';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MovieIdProvider } from './components/context/MovieIdContext.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MovieIdProvider>
        <App />
      </MovieIdProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
