import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// eslint-disable-next-line no-unused-vars
import i18n from './i18n/i18n';
import './util/no-focus-event';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App />, document.getElementById('root'));

// if (module.hot) {
//   module.hot.accept();
// }
