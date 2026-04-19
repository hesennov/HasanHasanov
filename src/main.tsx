import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n'; // must import before App so translations are ready
import './index.css';
import App from './App.tsx';

const rootElement = document.getElementById('root')!;
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
