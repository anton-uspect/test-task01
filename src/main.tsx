import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

import '@/locales';

function RootNode() {
  return (
    <App />
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RootNode />,
);
