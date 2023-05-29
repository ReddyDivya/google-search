import React from 'react'
import { BrowserRouter, Route, Switch, Navigate } from 'react-router-dom';
import { Results } from './Results';

export const Routes = () => {
  return (
    <div className="p-4">
        {
          /*
            BrowserRouter
            ------------------
            We wrap our application components inside the BrowserRouter component.
            This sets up the router and enables us to use routing functionality in our application.
          */
        }
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Navigate to="/search"/>
            </Route>
            <Route exact path="/search">
                <Results/>
            </Route>
            <Route exact path="/images">
                <Results/>
            </Route>
            <Route exact path="/news">
                <Results/>
            </Route>
            <Route exact path="/videos">
                <Results/>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  )
}
