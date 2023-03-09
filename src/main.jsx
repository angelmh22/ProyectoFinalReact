import React from 'react';
// proporciona métodos específicos del cliente que se utilizan
// para inicializar una aplicación en el cliente
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
);
