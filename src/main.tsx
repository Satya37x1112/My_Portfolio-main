import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('🚀 Portfolio starting...');

// Performance monitoring
performance.mark('app-start');

// Hide loading screen function
const hideLoadingScreen = () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    console.log('✅ Hiding loading screen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      if (loadingScreen.parentNode) {
        loadingScreen.parentNode.removeChild(loadingScreen);
      }
    }, 300);
  }
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.warn('⚠️ Root element not found, creating new one');
  // Create root element if it doesn't exist
  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  newRoot.style.minHeight = '100vh';
  newRoot.style.background = '#ffffff';
  document.body.appendChild(newRoot);
}

const finalRoot = document.getElementById('root');
if (!finalRoot) {
  console.error('❌ Failed to create or find root element');
  throw new Error('Failed to create or find root element');
}

console.log('🎯 Mounting React app...');

try {
  createRoot(finalRoot).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  console.log('✅ React app mounted successfully');
  
  // Hide loading screen after a short delay
  setTimeout(hideLoadingScreen, 500);
  
} catch (error) {
  console.error('❌ Failed to mount React app:', error);
  hideLoadingScreen();
  
  // Show error message
  if (finalRoot) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    finalRoot.innerHTML = `
      <div style="
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #ffffff;
        color: #1e3a8a;
        font-family: system-ui, sans-serif;
        padding: 2rem;
        text-align: center;
      ">
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Failed to Load Portfolio</h1>
        <p style="margin-bottom: 2rem;">There was an error initializing the application.</p>
        <button onclick="window.location.reload()" style="
          background: #1e3a8a;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 1rem;
        ">Reload Page</button>
        <pre style="
          margin-top: 2rem;
          padding: 1rem;
          background: #f1f5f9;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          text-align: left;
          max-width: 600px;
          overflow: auto;
        ">${errorMessage}</pre>
      </div>
    `;
  }
}
performance.measure('app-load-time', 'app-start', 'app-rendered');
