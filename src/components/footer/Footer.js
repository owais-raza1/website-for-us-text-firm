import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";
import MailIcon from "@mui/icons-material/Mail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SendIcon from "@mui/icons-material/Send";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#0B3837] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-start mb-8">
            <div className="w-[37%]">
              <div className="flex items-center mb-4">
                <div className="text-white text-5xl font-bold ml-14">
                  Filer <div className="text-green-600">World</div>
                </div>
              </div>
              <p className="text-white ml-14">
                We strive to help entrepreneurs, freelancers, and enterprises in
                Pakistan fulfill their tax obligations, benefit from tax perks,
                and foster a presence in the US. Our full-fledged set of
                services includes business registration, LLC formation in the
                US, income tax filing, amazon account opening, ITIN
                registration, and trademark registration in the US.
              </p>
            </div>

            <div className="ml-4">
              <h4 className="text-[#B3D33E] font-bold text-xl mb-4 ml-1">
                Quick Links
              </h4>
              <ul className="space-y-6">
                <li className="text-white hover:text-[#B3D33E] hover:transition-all duration-500">
                  <ChevronRightIcon />
                  <Link to="/about">About Us</Link>
                </li>
                <li className="text-white hover:text-[#B3D33E] hover:transition-all duration-500">
                  <ChevronRightIcon />
                  <Link to="/services">Services</Link>
                </li>
                <li className="text-white hover:text-[#B3D33E] hover:transition-all duration-500">
                  <ChevronRightIcon />
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="text-white hover:text-[#B3D33E] hover:transition-all duration-500">
                  <ChevronRightIcon />
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="text-white hover:text-[#B3D33E] hover:transition-all duration-500">
                  <ChevronRightIcon />
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="ml-4">
              <h4 className="text-[#B3D33E]  font-bold mb-4 text-xl ml-1">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="text-white  hover:text-[#B3D33E] hover:transition-all duration-500">
                  <ChevronRightIcon />
                  <PhoneIcon />
                  <span>
                    <a target="_blank" href="https://filerworld.com/us-llc">
                      03203558296
                    </a>
                  </span>
                </li>
                <li className="text-white  hover:text-[#B3D33E] hover:transition-all duration-500">
                  <ChevronRightIcon />
                  <WhatsAppIcon />
                  <span>
                    <a
                      href="https://api.whatsapp.com/send/?phone=03378031224&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    03203558296
                    </a>
                  </span>
                </li>
                <li className="text-white  hover:text-[#B3D33E] hover:transition-all duration-500">
                  <ChevronRightIcon />
                  <ChatIcon />
                  <span><a href="https://api.whatsapp.com/send/?phone=03378031224&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">Start live chat</a></span>
                </li>
                <li className="text-white  hover:text-[#B3D33E] hover:transition-all duration-500">
                  <ChevronRightIcon />
                  <MailIcon />
                  info@fillerworld.com
                </li>
                <li className="text-white  hover:text-[#B3D33E] hover:transition-all duration-500">
                  <ChevronRightIcon />
                  <FmdGoodIcon />
                  <span>
                    <span className="text-sm">
                      R-41 & 42, Street No. 3 Dehli
                      <br />
                      <span className="ml-7">
                        Merchandise Society, PECHS Block-3.
                      </span>
                      <br />
                      <span className="ml-7">Opposite Naheed Super Store.</span>
                      <br /> <span className="ml-7">Near Gaffar Kabab.</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="mr-20">
              <h4 className="ml-1 text-xl text-[#B3D33E]">Subscribe Us</h4>
              <div className="mt-5 text-white text-lg">
                Stay updated with our latest <br /> news. We promise not to
                spam!
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border-gray-500 mt-5 p-3"
                />
              </div>
            </div>
          </div>
          <div className="flex ml-14">
            <div className="text-white text-2xl">
              <a
                target="_blank"
                href="https://web.facebook.com/filerworld?_rdc=1&_rdr"
              >
                <FaFacebook className=" hover:bg-gray-700 hover:transition-all duration-500"/>
              </a>
            </div>
            <div className="text-white ml-5 text-2xl">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/filer-world.com/about/?viewAsMember=true"
              >
                <FaLinkedin className=" hover:bg-gray-700 hover:transition-all duration-500" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-between bg-[#51BC7C] p-5">
        <div className="ml-14">
          <p className="text-black">
            © Copyright 2023 - 2024 Filer World (Pvt) Ltd. All rights reserved.
          </p>
        </div>
        <div className="flex mr-14">
          <a
            href="https://filerworld.com/terms-and-conditions"
            className="text-black hover:text-white hover:font-bold hover:transition-all duration-500"
          >
            Terms & Condition
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://filerworld.com/privacy-policy"
            className="text-black hover:text-white hover:font-bold hover:transition-all duration-500"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
