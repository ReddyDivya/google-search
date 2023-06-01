import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom'; 
import {Loading} from './Loading';//to show loading icon
import { useStateContext } from '../context/StateContextProvider';//to fetch data from state context
import ReactPlayer from 'react-player';//to play video

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
  const {results, loading, getResults, searchTerm} = useStateContext();//fetch data from the stateContext 
  const location = useLocation();
  
  useEffect(() => {
    if(searchTerm !== '')
    {
      //to fetch videos data
      if(location.pathname === '/videos')
      {
        getResults(`/search/q=${searchTerm} videos`);
      }
      else //to fetch data which is other than videos
      {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]); //run this only when searchTerm, location.pathname are changed

  //showing loading spinner
  if(loading) return <Loading/>
  
  switch(location.pathname)
  {
    case '/search':
      return(
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a>
            </div>
          ))}
        </div>
      )
  }//switch
}
