import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {  HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';
// import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      {/* <HashRouter > */}
        {/* <Toaster /> */}
        <App />
      {/* </HashRouter> */}
    </Provider>
  </>
);

reportWebVitals();
