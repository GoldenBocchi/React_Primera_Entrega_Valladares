import 'bulma/css/bulma.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tus propios estilos
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
