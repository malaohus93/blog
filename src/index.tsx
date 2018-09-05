import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routes from './index.route';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
