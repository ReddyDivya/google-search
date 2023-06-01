//Context API
import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'; //google search api

export const StateContextProvider = () =>{
    //result, loading, searchTerm
    const [results, setResults] = useState([]);//results
    const [loading, setLoading] = useState(false);//loding
    const [searchTerm, setSearchTerm] = useState('Elon Musk');//search text

    //fetch results
    const getResults = async(url) => {
        setLoading(true); //to show loading icon

        
    }//getResults

}//StateContextProvider


