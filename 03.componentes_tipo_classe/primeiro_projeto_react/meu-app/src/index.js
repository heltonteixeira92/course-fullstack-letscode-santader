import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App2 title="Título">
      conteudo
      </App2>

      <App2 title="Título2">
      conteudo
      </App2>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();