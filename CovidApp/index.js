import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApiProvider} from "@reduxjs/toolkit/src/query/react/ApiProvider";
import { api } from "./api";

ReactDOM.render(
    <ApiProvider api={api}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
    </ApiProvider>
);


reportWebVitals();
