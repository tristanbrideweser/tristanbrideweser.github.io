/**
 * APPLICATION ENTRY POINT
 * 
 * This is the main entry point for your React application.
 * It renders the App component into the DOM.
 * 
 * CUSTOMIZATION:
 * - Import global styles here
 * - Add any global providers (theme, context, etc.)
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import './styles/animations.css';
import App from './App.jsx';

// Render the App component into the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
