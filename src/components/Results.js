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
        getResults(`/?query=${searchTerm} videos`);
      }
      else //to fetch data which is other than videos
      {
        // getResults(`${location.pathname}/?query=${searchTerm}&limit=10&related_keywords=true`);
        getResults(`/?query=${searchTerm}&limit=10`);
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
          {
            results?.map(({url, title, description, image}, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <a href={url} target="_blank" rel="noreferrer">
                  <p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-gray-500">{description}</p>
                </a>
                <img src={image?.url} alt={title} loading="lazy" />
              </div>
            ))
          }
        </div>
      )//search
      case '/images':
        return (
          <div className="flex flex-wrap justify-center items-center">
            {results?.map(({ image, url: { href, title } }, index) => (
              <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                <img src={image?.url} alt={title} loading="lazy" />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            ))}
          </div>
        );
      case '/news':
        return (
          <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
            {results?.map(({ id, url, source, title }) => (
              <div key={id} className="md:w-2/5 w-full ">
                <a href={url?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                  <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
                </a>
                <div className="flex gap-4">
                  <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {source?.href}</a>
                </div>
              </div>
            ))}
          </div>
        );
      case '/videos':
        return (
          <div className="flex flex-wrap ">
            {results?.results?.map((video, index) => (
              <div key={index} className="p-2">
                <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
              </div>
            ))}
          </div>
        );
      default:
        return 'Error...';
  }//switch
}
