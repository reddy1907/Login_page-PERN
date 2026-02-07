import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setUser }) => {
  const [form, setForm] = useState({
    name:"",
    email: "",
    password: "",
  });

const [error, setError] = useState("");
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form,
        { withCredentials: true }
      );

      setUser(res.data.user); 
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl mb-4 text-center">Register</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="text"
          placeholder="name"
          className="border p-2 w-full mb-3"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />
         
          <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          required
        />

        <button
          type="submit"
          className="border p-2 w-full bg-black text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
