 import React, { useState, useEffect } from "react";

function LogIn() {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Check login on page load
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // 🔹 SIGN UP
  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem("savedUsername", username);
    localStorage.setItem("savedPassword", password);

    alert("Signup Successful! Now Sign In.");
    setIsSignup(false);

    setUsername("");
    setPassword("");
  };

  // 🔹 SIGN IN
  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("savedUsername");
    const savedPass = localStorage.getItem("savedPassword");

    if (username === savedUser && password === savedPass) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      alert("Login Successful!");
    } else {
      alert("Invalid Username or Password");
    }
  };

  // 🔹 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  // 🔹 After Login Screen
  if (isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Welcome {localStorage.getItem("savedUsername")}
          </h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // 🔹 LOGIN / SIGNUP FORM
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-500">

        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? "Real Estate Signup" : "Real Estate Login"}
        </h2>

        <form
          onSubmit={isSignup ? handleSignup : handleLogin}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md font-semibold"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}
          <span
            className="text-red-500 font-semibold cursor-pointer ml-1"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Sign In" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LogIn;