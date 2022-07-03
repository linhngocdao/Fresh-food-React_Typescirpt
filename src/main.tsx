import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App />
  
  </BrowserRouter>,
  document.getElementById('root')
)
