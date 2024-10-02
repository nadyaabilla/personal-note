import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import './App.jsx'
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);