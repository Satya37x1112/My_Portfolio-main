import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring
performance.mark('app-start');

const rootElement = document.getElementById('root');
if (!rootElement) {
  // Create root element if it doesn't exist
  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  document.body.appendChild(newRoot);
  console.warn('Root element not found, created a new one');
}

const finalRoot = document.getElementById('root');
if (!finalRoot) {
  throw new Error('Failed to create or find root element');
}

createRoot(finalRoot).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Log performance metrics
performance.mark('app-rendered');
performance.measure('app-load-time', 'app-start', 'app-rendered');
