import React from 'react'
import { useIdea } from '../context/Dbcontext'
import { useUser } from '../context/context';

const Ideas = () => {
    const ideas = useIdea();
    const user = useUser();
  return (
    <section className="bg-white p-8 rounded-md shadow-md max-w-2xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Latest Ideas</h2>
        <ul className="space-y-6">
          {ideas.current.map((idea) => (
            <li key={idea.$id} className="border-b pb-4">
              <strong className="text-lg font-semibold text-gray-800">{idea.title}</strong>
              <p className="text-gray-600 mt-2">{idea.description}</p>
              {/* Show the remove button to idea owner. */}
                <button
                  type="button"
                  onClick={() => ideas.remove(idea.$id)}
                  className="mt-4 bg-red-500 text-white font-semibold py-1 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Remove
                </button>
            </li>
          ))}
        </ul>
      </section>
  )
}

export default Ideas