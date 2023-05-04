import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-center">
      <img src="https://cdn-icons-png.flaticon.com/512/755/755014.png" className='w-60 md:w-auto' />
      <h1 className="text-4xl font-bold mb-4">Oops! Page not found</h1>
      <p className="text-gray-600 text-lg mb-4">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;