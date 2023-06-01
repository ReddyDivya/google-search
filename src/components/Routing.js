import React from 'react'
import { Route, Routes} from 'react-router-dom';
import { Results } from './Results';

export const Routing = () => {

  return (
    <div className="p-4">
        {
          /*
            BrowserRouter
            ------------------
            We wrap our application components inside the BrowserRouter component.
            This sets up the router and enables us to use routing functionality in our application.

            Routes
            -------------------
            Within the Routes component, we define our routes using the Route component. 
            The exact prop is used to match the exact path. 
            We specify the path and the component to render for each route.

            In this case, we have three routes:
              - The root route ("/") renders the Home component.
              - The "/about" route renders the Videos component.
              - The Routes component also includes a default route that matches any other paths and renders the NotFound component.
            -----------------------------------------
            By using BrowserRouter and defining routes with Route components, we can enable navigation and rendering of different components based on the URL path in our React application.
          */
        }
        <Routes>
          <Route exact path="/">
            {/* <Navigate to="/search"/> */}
          </Route>
          <Route exact path="/search" element={<Results/>}/>
          <Route path="/images" element={<Results/>}/>
          <Route path="/news"element={<Results/>}/>
          <Route path="/videos" element={<Results/>}/>
        </Routes>
    </div>
  )
}
