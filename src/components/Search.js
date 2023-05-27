import React, {useState} from 'react'

export const Search = () => {
  const [text, setText] = useState('Elon Musk');

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