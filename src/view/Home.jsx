import React from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router";
import Services from "../component/Services";
import { Shield, Users, Handshake, TrendingUp } from "lucide-react";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative flex justify-center items-center flex-wrap w-full">
        <img
          src="../src/images/home/backgroundRealEstate.jpeg"
          alt="background-image"
          className="w-full h-180 brightness-30"
        />
        <div className="absolute top-45 md:pl-0">
          <p className="text-4xl w-90 md:w-150 md:text-6xl font-medium text-white">
            Find Your Perfect Home with
            <span className="text-red-500"> RealEstate</span> Realty
          </p>
          <p className="text-white m-0 text-lg md:text-xl w-80  my-8 md:w-170 ">
            Discover exceptional properties in prime locations. Whether you're
            buying, selling, or renting, we're here to make your real estate
            journey seamless.
          </p>
          <Link to="/properties">
            <button className=" px-3 py-2 md:px-6 md:my-4 md:py-2.5 text-lg bg-red-500 text-white rounded-xl cursor-pointer hover:bg-red-600 duration-300">
              Explore Properties →
            </button>
            <Link to="/contact">
              <button className=" py-1.5 px-4 md:py-2 md:px-8 text-lg bg-white/20 text-white cursor-pointer rounded-lg border border-white m-2.5 hover:bg-white/40 transition duration-300">
                Contact Us
              </button>
            </Link>
          </Link>
        </div>
      </div>

      <div className=" w-full my-16">
        <p className="text-4xl text-gray-500 text-center">
          Why Choose RealEstate?
        </p>
        <p className="w-80 md:w-180 mx-auto text-xl text-gray-500 text-center my-4">
          We're committed to providing exceptional service and helping you find
          the property of your dreams.
        </p>
      </div>

      <div className="flex justify-around items-center flex-wrap md:mx-40 mx-8">
        <Services
          icon={
            <Shield
              size={60}
              className="text-white border p-2 rounded-2xl bg-red-500"
            />
          }
          title="Verified Listings"
          description="Every property is thoroughly verified to ensure authenticity and
        quality."
        />

        <Services
          icon={
            <Users
              size={60}
              className="text-white border p-2 rounded-2xl bg-red-500"
            />
          }
          title="Trusted Agents"
          description="Our experienced agents are committed to finding your perfect home."
        />

        <Services
          icon={
            <Handshake
              size={60}
              className="text-white border p-2 rounded-2xl bg-red-500"
            />
          }
          title="Best Deals"
          description="Get access to exclusive listings and competitive market prices."
        />

        <Services
          icon={
            <TrendingUp
              size={60}
              className="text-white border p-2 rounded-2xl bg-red-500"
            />
          }
          title="Market Insights"
          description="Stay informed with our expert analysis and property trends."
        />
      </div>
    </div>
  );
}

export default Home;
