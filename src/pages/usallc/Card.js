import React from "react";
import Button from "../../components/Button";

function Card(props) {
  let { p, price, days, heading, className } = props;
  return (
    <>
      <div className={className}>
        <div></div><div>
          <h4 className="text-2xl text-[#0F5756] font-bold pr-5">{heading}</h4>
        </div>
        <div className="flex justify-between mt-5">
          <div>
            <h3 className="text-2xl  text-[#4EBB7C]  mt-1 font-bold ">
              {price}
            </h3>
          </div>
          <div>
            <div className="border border-black rounded-full bg-[#FDFAEE] text-black p-2 mr-4 font-semibold">
              {days}
            </div>
          </div>
        </div>
        <div>
          <p className="  pt-5 mr-6 mt-2 text-[#39736c]  text-base">{p}</p>
        </div>
        <div>
          <Button
            className="bg-[#B3D33E] flex text-black px-10 py-3 rounded-full hover:bg-white hover:text-lime-700 border border-green-600 shadow-lg hover:shadow-green-800 transition duration-300 font-semibold border-b-4 mt-16 mb-4"
            text="Get Qoute"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
