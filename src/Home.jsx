import React,{useState} from 'react';
import {useUser} from './context/context';
import { useIdea } from './context/Dbcontext';

const Home = () => {
  const user = useUser();
  const ideas = useIdea();

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  return (

    <>
    
    
        <section className="bg-gray-100 p-8 rounded-md shadow-md max-w-lg mx-auto mt-20">
  <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Submit Ideas</h1>
  <form
    className="flex flex-col space-y-4"
    onSubmit={(e) => {
      e.preventDefault();
      
    }}
  >
    <label htmlFor="forTitle" className="text-lg font-medium text-gray-700">
      Enter Title Of Your Idea
    </label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Your idea's title"
    />

    <label htmlFor="forDescription" className="text-lg font-medium text-gray-700">
      Enter Description Of Your Idea
    </label>
    <textarea
      type="text"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Describe your idea"
      rows="5"
    ></textarea>

    <button
      type="submit"
      onClick={()=> ideas.AddIdea({userid:user.current.$id, title, description})}
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Submit
    </button>
  </form>
</section>
      
      
    
    </>
    

  )
}

export default Home