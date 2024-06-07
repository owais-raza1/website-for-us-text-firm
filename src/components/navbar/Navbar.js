import React from "react";
import { Link } from "react-router-dom";
import UpperNav from "./UpperNav";
import Button from "../Button";

const Navbar = () => {
  return (
    <>
      <UpperNav />
      <nav className="bg-[#FDFAEE] shadow-md ">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <div className="flex items-center space-x-6">
            <div className="font-bold text-xl flex items-center">
              <div className="text-black text-3xl ml-16 mr-20">
                Filer <div className="text-green-600">World</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-12">
              <Link
                to="/"
                className="text-black hover:text-green-600 hover:underline hover:transition-all duration-500"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-black hover:text-green-600 hover:underline hover:transition-all duration-500"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-black hover:text-green-600 hover:underline hover:transition-all duration-500"
              >
                Services
              </Link>
              <Link
                to="/usa-llc"
                className="text-black hover:text-green-600 hover:underline hover:transition-all duration-500"
              >
                USA LLC
              </Link>
              <Link
                to="/pricing"
                className="text-black hover:text-green-600 hover:underline hover:transition-all duration-500"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="text-black hover:text-green-600 hover:underline hover:transition-all duration-500"
              >
                Blog
              </Link>
              <Link
                to="/contact-us"
                className="text-black hover:text-green-600 hover:underline hover:transition-all duration-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:flex ml-20">
            <Button className="bg-[#B3D33E] text-black px-10 py-3 rounded-full hover:bg-white hover:text-lime-700 border border-green-600 shadow-lg hover:shadow-green-800 transition duration-300 font-semibold border-b-4" text="Get Qoute"/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
