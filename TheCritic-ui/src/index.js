import React from 'react';
import ReactDOM from 'react-dom';
import IndexRoutes from './Routes/IndexRoutes';

import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IndexRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
