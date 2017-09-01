import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Routes } from './components/Routes/Routes';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
