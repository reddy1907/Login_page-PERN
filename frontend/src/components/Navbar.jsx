import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );

      setUser(null);       // clear frontend auth state
      navigate("/login"); // optional but recommended
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold">
        PERN Auth
      </Link>

      <div>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="mx-2">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
