import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // everything or lot of things is happing 2 times  in our local  project only like api call,event hover,.. because of strictmode and react does extra rendring  of our  components to check some  inconsistency between yours calls only happens in devlopment mode
  // but if we build for production it will not happen twice
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
