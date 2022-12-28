import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import UserContext from './contexts/UserContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'Karla, sans-serif',
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <UserContext>
        <Toaster />
        <App />
      </UserContext>
    </MantineProvider>
  </React.StrictMode>
);
