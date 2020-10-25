import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import AppContext from './context/AppContext';
import RootStore from './stores/RootStore';

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={new RootStore()}>
      <App />
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

