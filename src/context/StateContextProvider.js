//Context API
import React, {createContext, useContext, useState} from 'react';

/*
    Step 1. Creating StateContext object using createContext
    ----------------------------------------------------------
    - Creating StateContext object using createContext will return 'Provider' & 'Consumer'


*/    

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'; //google search api

export const StateContextProvider = ({children}) =>{
    //result, loading, searchTerm
    const [results, setResults] = useState([]);//results
    const [loading, setLoading] = useState(false);//loding
    const [searchTerm, setSearchTerm] = useState('Elon Musk');//search text

    //fetch results
    const getResults = async(url) => {
        setLoading(true); //to show loading icon

        //fetching the response from an api
        const response = await fetch(`${baseUrl}${url}`,{
            method : 'GET',
            headers : {
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            },
        });

        const data = await response.json();

        setResults(data); //set fetched data
        setLoading(false); //stop showing loading icon

    }//getResults

    return (
        /* 
            Step 2: Create a Provider (StateContextProvider)
            ----------------------------------------------------------
            - The Provider component is responsible for providing the data to all the child components that are interested in consuming it.
            - passing values from the StateContext to entire webApp.
        */
        <StateContext.Provider value={{getResults, results, searchTerm, setSearchTerm, loading}}>
            {{children}}
        </StateContext.Provider>
    )
}//StateContextProvider

/*
    Step 4. Consume the Context
    --------------------------------------------------
    - To access the shared data, use the Consumer component or the useContext hook. 
      This allows you to access the data within the wrapped component.
    - exporting the StateContext to the entire the webApp
*/
export const useStateContext = () => useContext(StateContext);

//check step 3 in index.js file.