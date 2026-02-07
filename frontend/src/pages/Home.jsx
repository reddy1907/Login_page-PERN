import React from "react";

const Home = ({ user, error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96 text-center">

        {/* Error message */}
        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}

        {user ? (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Welcome, {user.name}!
            </h2>
            <p className="text-gray-600">
              Email: {user.email}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl text-gray-700">
              Please log in or register.
            </h2>
          </>
        )}

      </div>
    </div>
  );
};

export default Home;
