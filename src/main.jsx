import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
let token;

export function grabToken() {
  return token;
}

export const setToken = (newToken) => {
  token = newToken;
  console.log(token);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
