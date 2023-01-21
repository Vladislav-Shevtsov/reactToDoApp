import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css'; the index.js file is trying to find the index.css that I've just deleted, so delete or comment the string!
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
