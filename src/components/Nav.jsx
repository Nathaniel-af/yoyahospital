import React, { useState, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillTelephoneFill, BsFacebook, BsTelegram } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import logo from "../assets/logo.png";
//import logo from "../assets/logoholy-min.png";
import { useNavigate, Link } from "react-router-dom";

function Nav({ aboutref, serviceref, blogref, contactref, handleScroll }) {
  const [nav, setNav] = useState(true);

  const navigate = useNavigate();
  function handleClick() {
    setNav((prev) => !prev);
  }

  return (
    <>
      <div className=" flex relative sm:flex-col justify-between flex-row p-5 sm:p-0 ">
        <div className="bg-[#005E6C] md:flex items-center justify-between  h-12 px-4 hidden text-white">
          <div className="flex ml-auto mr-5 ">
            <div className="flex justify-between w-[500px] items-center">
              <BsFillTelephoneFill></BsFillTelephoneFill>
              <a href="tel:0943434327">0943 434327</a>
              <span className="h-5 bg-white w-[2px]"></span>
              <a href="tel:0962626234">0962 626234</a>
              <span className="h-5 bg-white w-[2px]"></span>
              <a href="tel:0222120599">0222 120599</a>
              <a href="https://facebook.com/YOYAHOSPITAL" target="_blank">
                <BsFacebook size={25}></BsFacebook>
              </a>
              <a href="https://t.me/+M3bjPP4yT1hlZDM8" target="_blank">
                <BsTelegram size={25}></BsTelegram>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white flex justify-end items-center px-14 sm:py-6 ">
          <Link to="/">
            <img
              className="absolute h-12  md:h-36 lg:h-48   md:top-[10px] top-1 left-0 z-30"
              src={logo}
              alt=""
            />
            {/* <img
              className="absolute h-[80px]  md:h-60 md:w-60  md:top-[10px] top-1 left-0 z-30"
              src={logo}
              alt=""
            /> */}
          </Link>

          <ul className="hidden lg:flex text-[#818181] text-xs md:text-sm font-semibold uppercase">
            <Link to="/">
              <li className="p-4 text-[#1990A2]">Home</li>
            </Link>{" "}
            <Link to="/" onClick={() => handleScroll(aboutref)}>
              <li className="p-4 cursor-pointer">About us </li>
            </Link>
            <Link to="/" onClick={() => handleScroll(serviceref)}>
              <li className="p-4 cursor-pointer ">services</li>
            </Link>
            <Link to="/doctors">
              <li className="p-4 cursor-pointer">Our Doctors</li>
            </Link>
            <Link to="/" onClick={() => handleScroll(blogref)}>
              <li className="p-4 cursor-pointer">Blog</li>
            </Link>
            <Link to="/" onClick={() => handleScroll(contactref)}>
              <li className="p-4 cursor-pointer">contact</li>
            </Link>
            <button
              onClick={() => navigate("/appointment")}
              className="border-2 border-[#1990A2] text-[#1990A2] rounded-full px-5 py-3 font-bold ml-14 text-center hover:bg-[#1990A2] hover:text-white hover:animate-pulse"
            >
              {" "}
              <BiCalendar className="inline mr-1" size={24}></BiCalendar>
              APPOINTMENT
            </button>
          </ul>
        </div>
        <div
          onClick={handleClick}
          className="fixed z-30 right-5 top-1  md:top-14 lg:hidden"
        >
          {nav ? (
            <AiOutlineMenu
              className="bg-white rounded-full p-[4px] "
              size={28}
            ></AiOutlineMenu>
          ) : (
            <AiOutlineClose
              className="bg-white rounded-full p-[4px] "
              size={28}
            ></AiOutlineClose>
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full bg-[#005E6C] ease-in-out duration-700 text-sm text-white z-50"
              : "fixed left-[-100%] "
          }
        >
          <img className="h-24 mx-auto mt-5" src={logo} alt="" />
          <ul className="uppercase p-4">
            <Link to="/" onClick={handleClick}>
              <li className="px-4 py-4">Home </li>
            </Link>

            <Link
              to="/"
              onClick={() => {
                handleScroll(aboutref);
                handleClick();
              }}
            >
              <li className="px-4 py-4">About us </li>
            </Link>
            <Link
              to="/"
              onClick={() => {
                handleScroll(serviceref);
                handleClick();
              }}
            >
              <li className="px-4 py-4">services</li>
            </Link>
            <Link to="/doctors">
              <li className="px-4 py-4">Our Doctors</li>
            </Link>
            <Link
              to="/"
              onClick={() => {
                handleScroll(blogref);
                handleClick();
              }}
            >
              <li className="px-4 py-4">Blog</li>
            </Link>
            <Link
              to="/"
              onClick={() => {
                handleScroll(contactref);
                handleClick();
              }}
            >
              <li className="px-4 py-4">contact</li>
            </Link>
            <Link className="text-sm" to="/appointment">
              <li className="px-4 py-4">APPOINTEMENT</li>
            </Link>
          </ul>
          <div className="flex flex-col justify-center items-center gap-2">
            <BsFillTelephoneFill size={20} />
            <a href="tel:0943434327">0943 434327</a>
            <a href="tel:0962626234">0962 626234</a>
            <a href="tel:0222120599">0222 120599</a>

            <div className="flex gap-4">
              <a href="https://facebook.com/YOYAHOSPITAL" target="_blank">
                <BsFacebook size={24}></BsFacebook>
              </a>
              <a href="https://t.me/+M3bjPP4yT1hlZDM8" target="_blank">
                <BsTelegram size={24}></BsTelegram>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
