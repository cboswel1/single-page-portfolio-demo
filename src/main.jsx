import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/home/home.component'
import './index.scss';
import './globals.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
