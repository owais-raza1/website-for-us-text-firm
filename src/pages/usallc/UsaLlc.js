import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Card from "./Card";
import Button from "../../components/Button";
function UsaLlc() {
  return (
    <>
      <Navbar />
      <div className="flex  justify-evenly">
        <Card
          className=" w-[28%]  p-6 bg-[#FDFAEE] mt-20  mb-4 pt-5 border-r border-r-black border-b border-b-black hover:transition-all hover:duration-1000 hover:scale-90"
          heading=" Company Formation in  USA - LLC / Inc. (C Corp)"
          p=" A limited liability company (LLC) is a business in the USA that
            allows for pass-through taxation and limited liability protection."
          days="3 business days"
          price="$120"
        />
        <Card
          className=" w-[28%] p-6 bg-[#FDFAEE] mt-20  mb-4 pt-5 border-r border-r-black border-b border-b-black hover:transition-all hover:duration-1000 hover:scale-90"
          heading="Employer Identification Number (EIN)"
          p=" Employer Identification numbers allow businesses to be easily identified by the IRS."
          days="30 business days"
          price="$160"
        />
        <Card
          className=" w-[28%] p-6 bg-[#FDFAEE] mt-20 pr-5 mb-4 pt-5 border-r border-r-black border-b border-b-black hover:transition-all hover:duration-1000 hover:scale-90"
          heading="Open An US Bank Account"
          p=" If you want to open a US bank account, contact Filer World Now!"
          days="30 business days"
          price="$100"
        />
      </div>

      <div className="flex justify-evenly">
        <Card
          className=" w-[28%] p-6 bg-[#FDFAEE] mt-20  mb-4 pt-5 border-r border-r-black border-b border-b-black hover:transition-all hover:duration-1000 hover:scale-90"
          heading="USA Company Formation -Complete Package"
          p="Let Filer World handle the rest when you want to settle your business in the USA. It's a complete package that includes company formation, EIN, and bank account."
          days="30 business days"
          price="$349"
        />
        <Card
          className="w-[28%] p-6 bg-[#FDFAEE] mt-20  mb-4 pt-5 border-r border-r-black border-b border-b-black hover:transition-all hover:duration-1000 hover:scale-90"
          heading="Tax Filing - State:LLC / Inc. (C Corp)"
          p="It involves many tax advantages and growth opportunities."
          days="3 business days"
          price="$200"
        />
        <Card
          className=" w-[28%] p-6 bg-[#FDFAEE] mt-20  mb-4 pt-5 border-r border-r-black border-b border-b-black hover:transition-all hover:duration-1000 hover:scale-90"
          heading="Tax Filing - Federal:LLC / Inc. (C Corp)"
          p="Let Filer World handle the rest when you want to settle your business in the USA. It's a complete package that includes company formation, EIN, and bank account."
          days="3 business days"
          price="$300"
        />
      </div>

      <div>
        <div>
          <img
            className="w-[85%] h-[500px] rounded-3xl ml-24 mt-12 mb-14"
            src="https://media.licdn.com/dms/image/D4D22AQHYFmY_Qmf1ow/feedshare-shrink_800/0/1696589073990?e=2147483647&v=beta&t=YvYb6NmU42XaWjy70B5zO1xzPvEIv0HNlg2OGpou2qY"
          />
        </div>
        <div className="bg-white absolute py-5 px-5 rounded-3xl left-28">
          <div>
            <label className="font-semibold ">Enter First Name</label>
            <br />
            <input
              className="px-14 py-3 rounded-full border border-black mt-3"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="mt-3">
            <label className="font-semibold">Email</label>
            <br />
            <input
              className="px-14 py-3 rounded-full border border-black mt-3"
              type="text"
            />
          </div>
          <div>
            <Button
              className="bg-[#B3D33E] text-black px-28 py-3 rounded-full hover:bg-white hover:text-lime-700 border border-green-600 shadow-lg hover:shadow-green-800 transition duration-300 font-semibold border-b-4 mt-5"
              text="Subscribe"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UsaLlc;
