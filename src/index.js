import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';






ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
  ,
  document.getElementById('root')
)


