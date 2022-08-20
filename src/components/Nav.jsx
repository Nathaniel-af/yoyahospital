import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillTelephoneFill, BsFacebook, BsTelegram } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import logo from "../assets/logo.png";

function Nav() {
  const [nav, setNav] = useState(true);

  function handleClick() {
    setNav((prev) => !prev);
  }
  return (
    <>
      <div className=" flex relative sm:flex-col justify-between flex-row p-5 sm:p-0 ">
        <div className="bg-[#005E6C] md:flex  justify-between items-center h-12 px-4 hidden text-white">
          <div className="flex ml-auto mr-5 ">
            <div className="flex justify-between w-[500px] items-center">
              <BsFillTelephoneFill></BsFillTelephoneFill>
              <a href="tel:0228125646">0228 125646</a>
              <span className="h-5 bg-white w-[2px]"></span>
              <a href="tel:0904073307">0904 073307</a>
              <span className="h-5 bg-white w-[2px]"></span>
              <a href="tel:0222122032">022 2122032</a>
              <BsFacebook size={25}></BsFacebook>
              <BsTelegram size={25}></BsTelegram>
            </div>
          </div>
        </div>
        <div className="bg-white flex justify-end items-center px-14 py-6">
          <img
            className="absolute h-20 w-24 md:h-56 md:w-60  md:top-[10px] top-1 left-0 z-30"
            src={logo}
            alt=""
          />
          <ul className="hidden sm:flex text-[#818181] text-sm font-semibold uppercase">
            <li className="p-4 text-[#1990A2]">Home</li>
            <li className="p-4">About us</li>
            <li className="p-4">services</li>
            <li className="p-4">Our Doctors</li>
            <li className="p-4">Blog</li>
            <li className="p-4">contact</li>
            <button className="border-2 border-[#1990A2] text-[#1990A2] rounded-full px-5 py-3 font-bold ml-14 text-center hover:bg-[#1990A2] hover:text-white">
              {" "}
              <BiCalendar className="inline mr-1" size={24}></BiCalendar>
              APPOINTMENT
            </button>
          </ul>
        </div>
        <div onClick={handleClick} className="block md:hidden">
          {nav ? (
            <AiOutlineMenu size={22}></AiOutlineMenu>
          ) : (
            <AiOutlineClose size={20}></AiOutlineClose>
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full bg-[#005E6C] ease-in-out duration-700 text-white z-50"
              : "fixed left-[-100%] "
          }
        >
          <ul className="uppercase p-4">
            <li className="p-4">Home</li>
            <li className="p-4">About us</li>
            <li className="p-4">services</li>
            <li className="p-4">Our Doctors</li>
            <li className="p-4">Blog</li>
            <li className="p-4">contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
