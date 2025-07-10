import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/header';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>,
  );
} else {
  console.error(
    'Failed to find the root element to mount the React application.',
  );
}
