/*
    Context API
    ----------------------------------------------------------
    The Context API is useful for scenarios where you have data that needs to be accessed by multiple components across the component tree, eliminating the need for prop drilling. 
    It helps simplify the management and sharing of state in your React applications.
*/
import React, { createContext, useContext, useState } from 'react';

/*
    Step 1. Create a Context
    ----------------------------------------------------------
    - Creating StateContext object using createContext will return 'Provider' & 'Consumer'
*/
const StateContext = createContext();
// const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'; //google search api
// const baseUrl = 'https://google-search74.p.rapidapi.com'; //google search api

//Step 2: Create a Provider component
export const StateContextProvider = ({children}) =>{
    //result, loading, searchTerm
    const [results, setResults] = useState([]);//results
    const [loading, setLoading] = useState(false);//loding
    const [searchTerm, setSearchTerm] = useState('Nike');//search text

    //fetch results
    const getResults = async(type) => {
        setLoading(true); //to show loading icon

        const baseUrl = 'https://google-search74.p.rapidapi.com';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c8737bdfd9msh382abd883a864d5p10f865jsn28ce3f7335fc',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(`${baseUrl}${type}`, options);
            const data = await response.json();

            setResults(data.results); //set fetched data
            setLoading(false); //stop showing loading icon
        } catch (error) {
            console.error(error);
        }
    }//getResults

    return (
        /* 
            Step 2: Create a Provider (StateContextProvider)
            ----------------------------------------------------------
            - The Provider component is responsible for providing the data to all the child components that are interested in consuming it.
            - passing values from the StateContext to entire webApp.
        */
        <StateContext.Provider value={{getResults, results, searchTerm, setSearchTerm, loading}}>
            {children}
        </StateContext.Provider>
    )
}//StateContextProvider

/*
    Step 3. Consume the Context
    --------------------------------------------------
    - To access the shared data, use the Consumer component or the useContext hook. 
      This allows you to access the data within the wrapped component.
    - exporting the StateContext to the entire the webApp
*/
export const useStateContext = () => useContext(StateContext);

//check step 4 in index.js file.