import React, { useState } from 'react'
import { Link} from "react-router"
import {MapPinHouse, Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className="flex justify-between items-center py-2 px-5 fixed top-0 w-full border-b-2 pb-2 border-gray-500 bg-white z-10">
        <div className="flex items-center">
          <MapPinHouse
            size={45}
            className="bg-red-500 p-2 text-white rounded-2xl"
          />
          <p className="text-3xl font-bold mx-1">
            Real<span className="text-red-500">Estate</span>
          </p>
        </div>
        <div className="hidden md:flex justify-evenly items-center">
          <Link
            to="/"
            className="text-xl mx-3 hover:text-red-500 scale-100 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/property"
            className="text-xl mx-3 hover:text-red-500 scale-100 transition-all duration-300"
          >
            Properties
          </Link>
          <Link
            to="/about"
            className="text-xl mx-3 hover:text-red-500 scale-100 transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-xl mx-3 hover:text-red-500 scale-100 transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="text-xl mx-3 hover:text-red-500 scale-100 transition-all duration-300"
          >
            Login
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white border-b border-gray-300 z-10">
          <div className="flex flex-col items-center py-4">
            <Link
              to="/"
              className="font-bold text-xl py-2 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/property"
              className="font-bold text-xl py-2 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/about"
              className="font-bold text-xl py-2 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="font-bold text-xl py-2 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="font-bold text-xl py-2 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
