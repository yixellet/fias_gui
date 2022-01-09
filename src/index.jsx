import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import Api from './utils/Api';
import toDMY from './utils/dateConverter';
import { API_URL } from './utils/config';

const api = new Api(API_URL);
ReactDOM.render(
  <BrowserRouter>
    <App api={api} toDMY={toDMY} />
  </BrowserRouter>, document.getElementById('root')
);
