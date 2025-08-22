import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/header';
import { Content } from './components/main';
import { Footer } from './components/footer';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Header />
      <Content />
      <Footer />
    </React.StrictMode>,
  );
} else {
  console.error(
    'Failed to find the root element to mount the React application.',
  );
}
