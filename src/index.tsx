import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CssBaseline } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { MessageProvider } from './contexts/Message';
import { AuthProvider } from './contexts/Auth';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <MessageProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MessageProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
