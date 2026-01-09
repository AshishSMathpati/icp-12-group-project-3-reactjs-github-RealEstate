 import React, { useState, useEffect } from "react";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogIn = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345") {
      
      localStorage.setItem(
        "user",
        JSON.stringify({ username: username })
      );

      setIsLoggedIn(true);
      alert("LogIn Successful!");
    } else {
      alert("Invalid Username or Password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    alert("Logged out successfully");
  };

  
  if (isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            Welcome Admin 👋
          </h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-500">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Real Estate LogIn
        </h2>

        <form onSubmit={handleLogIn} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition"
          >
            LogIn
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span className="text-red-500 font-semibold cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
