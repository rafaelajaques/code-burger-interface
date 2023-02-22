import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import MyRoutes from './routes/routes';
import AppProvider from './hooks';

import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <MyRoutes />
    </AppProvider>
    <ToastContainer autoClose={3000} theme="colored" />
    <GlobalStyles />
  </React.StrictMode>
);
