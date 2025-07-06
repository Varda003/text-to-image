import React from "react";

function Navbar({ user, onLoginClick }) {
  return (
    <header className="w-full bg-gray-900 p-4 flex justify-between items-center">
      {/* Left side: App name button */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-4 py-2 rounded-full shadow-lg cursor-default select-none text-white font-bold text-lg">
        Text To Image
      </div>

      {/* Right side: Login/Signup buttons */}
      <div>
        {user ? (
          <span>Welcome, {user.name}</span>
        ) : (
          <button
            onClick={onLoginClick}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Login / Signup
          </button>
        )}
      </div>
    </header>
  );
}


export default Navbar;
