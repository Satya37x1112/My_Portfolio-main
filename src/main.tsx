import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring
performance.mark('app-start');

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Log performance metrics
performance.mark('app-rendered');
performance.measure('app-load-time', 'app-start', 'app-rendered');
