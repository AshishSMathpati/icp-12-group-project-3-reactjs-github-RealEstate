import React from "react";
import {
  MapPinHouse,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="bg-neutral-800">
      <div className="flex justify-start md:justify-around bg-neutral-800 p-8 md:p-16 flex-wrap">
        <div className="m-5">
          <div className="flex items-center">
            <MapPinHouse
              size={45}
              className="bg-red-500 p-2 text-white rounded-2xl"
            />
            <p className="text-3xl font-bold mx-1 text-white">
              Real<span className="text-red-500">Estate</span>
            </p>
          </div>
          <p className="text-white mt-5 w-80 text-lg">
            Your trusted partner in finding the perfect home. We specialize in
            residential and commercial properties across prime locations.
          </p>
          <div className="my-5 flex">
            <a href="https://www.instagram.com/tcf.realty?igsh=ZW0zdzdkcWZ6aHhi">
              <Instagram
                size={45}
                className="text-white bg-neutral-700 p-3 m-2 rounded-4xl hover:bg-red-500 duration-300 cursor-pointer"
              />
            </a>
            <a href="https://www.facebook.com/p/TCF-Realty-61579154775005/?hr=1&wtsid=rdr_0nfKR3MCDueyW0GPq#">
              <Facebook
                size={45}
                className="text-white bg-neutral-700 p-3 m-2 rounded-4xl hover:bg-red-500 duration-300 cursor-pointer"
              />
            </a>

            <a href="https://www.linkedin.com/in/tcf-realty-58767437b/">
              <Twitter
                size={45}
                className="text-white bg-neutral-700 p-3 m-2 rounded-4xl hover:bg-red-500 duration-300 cursor-pointer"
              />
            </a>

            <a href="https://x.com/realestate?lang=en">
              <Linkedin
                size={45}
                className="text-white bg-neutral-700 p-3 m-2 rounded-4xl hover:bg-red-500 duration-300 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start m-5">
          <p className="text-white text-2xl text-start my-3">Quick Links</p>
          <div className="flex flex-col text-white justify-evenly items-start">
            <Link
              to="/"
              className=" text-xl mx-3 my-2 hover:text-red-500 scale-100 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/property"
              className=" text-xl mx-3 my-2 hover:text-red-500 scale-100 transition-all duration-300"
            >
              Properties
            </Link>
            <Link
              to="/about"
              className="text-xl mx-3 my-2 hover:text-red-500 scale-100 transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-xl mx-3 my-2 hover:text-red-500 scale-100 transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="text-xl mx-3 my-2 hover:text-red-500 scale-100 transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start m-5">
          <p className="text-white text-2xl text-center my-3">Contact Us</p>
          <div className="flex flex-col justify-evenly h-50">
            <div className="flex justify-evenly items-start">
              <MapPin size={20} className="text-red-500 mr-4" />
              <p className="text-start text-sm text-white w-60">
                123 Real Estate Avenue, Suite 100, Los Angeles, CA 90001
              </p>
            </div>
            <div className="flex justify-evenly items-start">
              <Phone size={20} className="text-red-500 mr-4" />
              <p className="text-start text-sm text-white w-60 cursor-pointer hover:text-red-500 duration-300">
                +91 826019461
              </p>
            </div>

            <div className="flex justify-evenly items-start">
              <Mail size={20} className="text-red-500 mr-4 " />
              <p className="text-start text-sm text-white w-60 cursor-pointer hover:text-red-500 duration-300">
                atharvbolke99@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t px-10 text-neutral-600 flex flex-col-reverse py-4 md:flex-row justify-between items-center">
        <p className="py-5 text-center">
          © 2026 RealEstate Realty. All rights reserved.
        </p>

        <div className="flex items-center">
          <a
            href="https://www.termsfeed.com/public/uploads/2021/12/sample-privacy-policy-template.pdf"
            className="hover:text-red-500 cursor-pointer duration-300 mx-3"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.termsfeed.com/public/uploads/2021/12/sample-terms-conditions-agreement.pdf"
            className="hover:text-red-500 cursor-pointer duration-300 mx-3"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
