import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-uyzeb8r6qgxf.frontegg.com',
  clientId: 'a7ae3bbe-a5c4-42a5-b3e1-4391914a44a6'
};

const authOptions = {
keepSessionAlive: true // Uncomment this in order to maintain the session alive
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);