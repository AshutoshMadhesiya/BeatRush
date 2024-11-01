import React from "react";
function Login() {
  return (
    <>
      <body class="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-500">
        <div class="bg-white rounded-lg shadow-2xl p-10 max-w-sm w-full transform transition duration-500 hover:scale-105">
          <h2 class="text-3xl font-bold text-center text-purple-800 mb-8">
            🎶 Welcome Back to BeatRush!
          </h2>
          <form class="flex flex-col space-y-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input 
              type="password" 
              placeholder="Enter password" 
              class="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </form>
          <div class="text-sm text-purple-500 hover:text-purple-600 hover:underline cursor-pointer mt-4">
            Forgot password?
          </div>
          <div class="flex justify-between mt-8 space-x-4">
            <button class="w-full bg-purple-600 text-white font-bold py-3 rounded-md shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500">
              Log In
            </button>
            <button class="w-full bg-pink-600 text-white font-bold py-3 rounded-md shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-500">
              Register
            </button>
          </div>
        </div>
      </body>

    </>
  );
}

export default Login;
