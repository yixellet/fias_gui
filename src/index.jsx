import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import App from './components/App/App';
import Api from './utils/Api';
import { API_URL } from './utils/config';

import './index.css';

const history = createBrowserHistory()
const api = new Api(API_URL);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <ScrollToTop />
      <App api={api} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
