import React from 'react'
import { Link } from 'react-router-dom';

const Navbar =({user, setUser}) =>{
    return (
        <nav className="bg-gray-800 p-4 text-white">
        <Link to="/" className="font-bold">
        PERN Auth
        </Link>
        <div>
            {user ? (
              <button>Logout</button>
            ): (
                <>
                <Link to='/login'>Login</Link>
                <Link to='/register' className='mx-2'>Register</Link>
                </>
            )}
        </div>
        </nav>
    );
};

export default Navbar;