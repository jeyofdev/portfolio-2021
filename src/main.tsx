import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './main.scss';
import 'react-tooltip/dist/react-tooltip.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
