import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";
function UpperNav() {
  return (
    <>
      <div className="bg-[#0B3837] text-white px- flex items-center justify-around">
        <div className="flex gap-4 text-xl">
          <a
            href="https://web.facebook.com/filerworld?_rdc=1&_rdr"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/company/filer-world.com/about/?viewAsMember=true"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        
        <div></div>
        <div></div>
        <div></div>


        <div className="flex gap-4 mr-9">
          <a href="https://filerworld.com/us-llc" target="_blank">
            <PhoneIcon className="text-[#B3D33E] m-2" />
            <span className="text-sm">03203558296</span>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=03378031224&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <WhatsAppIcon className="text-[#B3D33E] m-2" />
            <span className="text-sm">03203558296</span>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=03378031224&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <ChatIcon className="text-[#B3D33E] m-2" />
            <span className="text-sm">info@fillerworld.com</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default UpperNav
