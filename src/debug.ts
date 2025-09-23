// Debug script to help diagnose issues
console.log('🔍 Portfolio Debug Info:');
console.log('- User Agent:', navigator.userAgent);
console.log('- Window available:', typeof window !== 'undefined');
console.log('- Document ready state:', document.readyState);
console.log('- Theme support:', window.matchMedia ? 'Yes' : 'No');
console.log('- Local storage:', typeof localStorage !== 'undefined');

// Check if root element exists
const root = document.getElementById('root');
console.log('- Root element:', root ? 'Found' : 'Missing');

// Check if React is loaded
console.log('- React loaded:', typeof React !== 'undefined');

// Theme preference check
if (window.matchMedia) {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log('- Prefers dark mode:', darkMode);
}

// Check for console errors
const originalError = console.error;
console.error = function(...args) {
  console.log('🚨 Error detected:', ...args);
  originalError.apply(console, args);
};

export {};