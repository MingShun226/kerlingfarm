import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F3E9D2]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2F5233]"></div>
  </div>
);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>
);