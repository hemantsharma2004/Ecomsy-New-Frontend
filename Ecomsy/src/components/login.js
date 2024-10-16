// src/AuthForm.js
import React, { useState } from 'react';
import logo from '../logo/logo.png';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (isLogin) {
      // Handle login
    } else {
      // Handle sign up
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        {/* Render the logo in both Login and Sign Up */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" width="80rem" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name field for Sign Up */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-600 sm:text-sm"
                placeholder="John Doe"
                required
              />
            </div>
          )}

          {/* Email Address field for both Login and Sign Up */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-600 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password field for both Login and Sign Up */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-blue-500 sm:text-sm"
              placeholder="********"
              required
            />
          </div>

          {/* Confirm Password field only for Sign Up */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="********"
                required
              />
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={toggleForm}
              className="text-blue-500 hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
