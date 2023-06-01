import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './global.css';
import { BrowserRouter as Router} from 'react-router-dom'
import {StateContextProvider} from './context/StateContextProvider';

/*
    BrowserRouter
    ------------------
    We wrap our application components inside the BrowserRouter component.
    This sets up the router and enables us to use routing functionality in our application.
    By using BrowserRouter and defining routes with Route components, we can enable navigation and rendering of different components based on the URL path in our React application.
*/
const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Render an element to the root.
root.render(
    /*
        Step:4 Wrap Components with Provider
        ----------------------------------------
        - Wrap the components that need access to the shared data with the Provider component, and pass the data as the value prop.
        -  App component consumes the data provided by the StateContextProvider component using the useContext hook. 
    */
    //entire webApp has access to the state context
    <StateContextProvider>
        {/* Router enables us to use the routing functionality*/ }
        <Router> 
            <App/>
        </Router>    
    </StateContextProvider>    
);
