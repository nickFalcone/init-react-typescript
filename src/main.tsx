import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start();
}

const container = document.getElementById('container');
if (container) {
  createRoot(container).render(<App />);
}
