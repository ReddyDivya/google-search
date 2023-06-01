//Context API
import React, {createContext, useContext, useState} from 'react';

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
        /* passing values from the statecontext to entire webApp*/
        <StateContext.Provider value={{getResults, results, searchTerm, setSearchTerm, loading}}>
            {{children}}
        </StateContext.Provider>
    )

}//StateContextProvider


