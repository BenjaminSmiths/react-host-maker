import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './component/app/App';
import configureStore from './store/store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const container = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, container,
);

registerServiceWorker();
