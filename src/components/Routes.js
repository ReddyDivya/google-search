import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';

export const Routes = () => {
  return (
    <div className="p-4">
        <Switch>
          <Route exact path="/">
            <Redirect to="/search"></Redirect>
          </Route>
        </Switch>
    </div>
  )
}
