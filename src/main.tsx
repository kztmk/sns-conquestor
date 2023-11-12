import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// scroll bar
import 'simplebarcore/dist/simplebar.css';

import App from './App';
import { ConfigProvider } from './contexts/ConfigContext';

import { store } from './store';

// apex-chart
import './assets/third-party/apex-chart.css';
import './assets/third-party/react-table.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ConfigProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </ReduxProvider>
  </React.StrictMode>
);
