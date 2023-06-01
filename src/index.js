import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './global.css';
import StateContextProvider from './context/StateContextProvider';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Render an element to the root.
root.render(
    //entire webApp has access to the state context
    <StateContextProvider>
        <App/>
    </StateContextProvider>    
);
