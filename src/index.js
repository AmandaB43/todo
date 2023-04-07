import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Taskform from './components/taskform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Taskform /> */}
  </React.StrictMode>
);
