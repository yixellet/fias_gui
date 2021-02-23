import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Api from './utils/Api';
import { API_URL } from './utils/config';

const api = new Api(API_URL);

ReactDOM.render(
  <React.StrictMode>
    <App api={api} />
  </React.StrictMode>,
  document.getElementById('root')
);
