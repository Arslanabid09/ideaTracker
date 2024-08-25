import React from 'react';
import { useUser } from '../context/context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = useUser();
  
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold hover:text-gray-400">
          Idea Board
        </Link>
        <div className="flex items-center space-x-4">
          {user.current ? (
            <>
              <span className="text-white">{user.current.name}</span>
              <button 
                type="button" 
                onClick={() => user.LogOut()}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/" 
              className="text-white px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
