import React, {useState, useEffect} from 'react'
import { Links } from './Links'; //Navlinks
import { useDebounce } from 'use-debounce';
import { useStateContext } from '../context/StateContextProvider';

export const Search = () => {
  const [text, setText] = useState('Elon Musk');
  const {setSearchTerm} = useStateContext();//fetching setSearchTerm function from stateContext
  const [debouncedValue] = useDebounce(text, 300);//debounced

  /*
    useDebounce hook
    --------------------------------------------
    the useDebounce hook is not a built-in hook, but it is a custom hook that can be implemented to add debounce functionality to your components. 
    The purpose of the useDebounce hook is to delay the execution of a function until a certain period of inactivity has passed.
  */
  useEffect(() => {
    if(debouncedValue)
      setSearchTerm(debouncedValue);

  }, [debouncedValue]);
  
  return (
    <div className=" sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input value={text} type="text" 
      className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
      placeholder="Search Google or type URL"
      onChange={(e) => setText(e.target.value)}
      />
      {
        text !== "" && 
        <button className="absolute top-1.1 p-1 right-18 text-2xl text-gray-500"
        onClick={() => setText('')}
        >x</button>
      }
    </div>
  )
}