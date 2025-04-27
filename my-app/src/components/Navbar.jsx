import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Menu, X } from "lucide-react"; // Optional: Lucide icons for hamburger

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isAuthenticated) {
      fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          auth0Id: user.sub,
          name: user.name,
          email: user.email,
          picture: user.picture,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log("User saved:", data))
        .catch((err) => console.error("Error:", err));
    }
  }, [isAuthenticated, user]);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold cursor-pointer">AI Resume Builder</h1>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/templatePage" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Resume</Link>
              {isAuthenticated ? (
                <>
                  <span className="text-green-300 font-semibold">{user.name}</span>
                  <button
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                    className="bg-red-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="bg-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-gray-700">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Home</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">About</Link>
          <Link to="/templatePage" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">Resume</Link>
          {isAuthenticated ? (
            <>
              <span className="block px-3 py-2 text-green-300 font-semibold">{user.name}</span>
              <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="block w-full text-left bg-red-600 px-3 py-2 rounded-md text-base font-medium"
              >
                Log Out
              </button>
            </>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="block w-full text-left bg-green-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
