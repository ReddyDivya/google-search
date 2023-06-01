import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom'; 
import {Loading} from './Loading';//to show loading icon
import { useStateContext } from '../context/StateContextProvider';//to fetch data from state context

/*
  useLocation
  -------------------------------
  - In React Router, the useLocation hook is a built-in hook that allows you to access the current location object.
  - The location object represents the current URL and provides information about the current route, query parameters, and other location-related data.

  'pathname' represents the path of the current URL.
  'search' represents the query parameters in the URL.
  'hash' represents the hash fragment in the URL.
*/

export const Results = () => {
  return (
    <div>
      <h2>Results</h2>
    </div>
  )
}
