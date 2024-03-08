import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import AuthReducer from './components/reducer/AuthReducer';
import rootReducer from './components/reducer'

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

renderApp();
store.subscribe(renderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
