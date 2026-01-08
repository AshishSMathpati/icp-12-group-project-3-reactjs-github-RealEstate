import React, { useState } from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router";
import Services from "../component/Services";
import {
  Shield,
  Users,
  Handshake,
  TrendingUp,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Footer from "../component/Footer";

function Home() {
  const clientArray = [
    {
      title:
        "The attention to detail and personalized service was exceptional. They found us a stunning villa that exceeded all our expectations.Thank you, RealEstate!",
      img: "https://avatar.iran.liara.run/public/25",
      name: "Pratik Salunke",
      role: "Luxury Home Buyer",
    },
    {
      title:
        "RealEstate made finding our dream home so easy. Their agents were patient, knowledgeable, and truly understood what we were looking for. Highly recommended!",
      img: "https://avatar.iran.liara.run/public/40",
      name: "Atharv Bolke",
      role: "First-time Buyer",
    },
    {
      title:
        "As an investor, I need reliable partners. RealEstate has consistently delivered excellent properties with great ROI. Their market insights are invaluable.",
      img: "https://avatar.iran.liara.run/public",
      name: "Ashish Mathpati",
      role: "Property Investor",
    },
  ];

  const [index, setIndex] = useState(0);
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
          <Link
            to="/properties"
            className=" px-3 py-2 md:px-6 md:my-4 md:py-2.5 text-lg bg-red-500 text-white rounded-xl cursor-pointer hover:bg-red-600 duration-300"
          >
            Explore Properties →
          </Link>
          <Link
            to="/contact"
            className=" py-1.5 px-4 md:py-2 md:px-8 text-lg bg-white/20 text-white cursor-pointer rounded-lg border border-white m-2.5 hover:bg-white/40 transition duration-300"
          >
            Contact Us
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

      <div className="flex justify-around items-center flex-wrap md:mx-40 mx-4">
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

      <div>
        <div className="flex flex-col justify-center items-center my-10">
          <p className="text-4xl my-4 font-semibold text-center">
            What Our Clients Say
          </p>
          <p className="text-gray-500 text-center mb-4">
            Don't just take our word for it. Hear from our satisfied clients.
          </p>
          <div className="p-20 md:w-200 w-80 shadow-2xl relative mt-10 flex flex-col justify-center items-center flex-wrap rounded-xl">
            <Quote
              size={50}
              className="-top-6 bg-red-500 text-white p-3 rounded-4xl left-[47%] absolute"
            />
            <p className="text-gray-500 text-sm md:text-lg text-center">
              "{clientArray[index].title}"
            </p>
            <img
              src={clientArray[index].img}
              alt="profile-image"
              className="h-20 my-5 rounded-[50%] border-2 border-red-500"
            />
            <p className="font-semibold text-lg">{clientArray[index].name}</p>
            <p className="text-gray-500 text-sm">{clientArray[index].role}</p>
            <div className="flex justify-center items-center mt-5">
              <ChevronLeft size={50} className="m-2 cursor-pointer text-white bg-neutral-600 rounded-3xl hover:text-red-500 duration-300" onClick={() => {
                if(index > 0) {
                  setIndex(index - 1);
                } else {
                  setIndex(0);
                }
              }} />
              <ChevronRight size={50} className="m-2 cursor-pointer text-white bg-neutral-600 rounded-3xl hover:text-red-500 duration-300" onClick={() => {
                if (index < clientArray.length - 1) {
                  setIndex(index + 1);
                } else {
                  setIndex(0);
                }
              }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
