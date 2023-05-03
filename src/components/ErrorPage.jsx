import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-gray-500 mb-4">
          <path fillRule="evenodd" d="M21.707 2.293a1 1 0 0 1 1.414 1.414L2.707 23.414a1 1 0 0 1-1.414-1.414L21.707 2.293zM21 10.172V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.172l9.293-9.293a1 1 0 0 1 1.414 0L21 10.172z" clipRule="evenodd" />
        </svg>
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