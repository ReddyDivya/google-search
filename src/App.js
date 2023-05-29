import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Routing} from './components/Routing';

const App = () => {
  {
    /*
      BrowserRouter
      ------------------
      We wrap our application components inside the BrowserRouter component.
      This sets up the router and enables us to use routing functionality in our application.
      By using BrowserRouter and defining routes with Route components, we can enable navigation and rendering of different components based on the URL path in our React application.
    */
  }
  const [darkTheme, setDarkTheme] = useState(false);//dark/light themes

  return (

    <div className={darkTheme ? 'dark' : ''}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
            <BrowserRouter>
                <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
                <Routing/>
                <Footer/>
            </BrowserRouter>
        </div>
    </div>
  )
}

export default App