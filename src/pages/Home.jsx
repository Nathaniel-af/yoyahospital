import React, { useRef, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { motion } from "framer-motion";
import axios from "axios";
import video from "../assets/video.mp4";
import Nav from "../components/Nav";
import Swipper from "../components/swiper";
import Typed from "react-typed";
import logo from "../assets/logo.png";
import image1 from "../assets/services/image1-min.png";
import image2 from "../assets/services/image2-min.png";
import image3 from "../assets/services/image3-min.png";
import image4 from "../assets/services/image4-min.png";
import image5 from "../assets/services/image5-min.png";
import image6 from "../assets/services/image6-min.png";
import aboutus from "../assets/square.webp";
import { GrNext } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import Blog from "../components/blog";

const animate = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.1, duration: 1.8, bounce: 0.4 },
  },
};

function Home() {
  const about = useRef(null);
  const service = useRef();
  const blog = useRef();
  const contact = useRef();

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const userSchema = yup.object().shape({
    name: yup.string().required("Full Name is Required"),
    email: yup.string().email("Not a valid email Address , must include @"),
    phone: yup
      .string()
      .required("Phone number is Required")
      .max(10)
      .matches(phoneRegExp, "Phone number is not valid"),
    message: yup.string().required("Message Empty"),
  });

  return (
    <>
      <ToastContainer />
      <Nav
        aboutref={about}
        serviceref={service}
        blogref={blog}
        contactref={contact}
        handleScroll={handleScroll}
      />
      <Swipper />
      {/* Services */}
      <section ref={service} className="text-gray-600 body-font">
        <div className="container px-5 py-10 md:py-14 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
              OUR SERVICES
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              YOYA Hospital offers the following services
            </p>
          </div>
          <motion.div
            className="flex flex-wrap -m-4"
            initial={"hidden"}
            whileInView={"visible"}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" variants={animate}>
              <div className="border border-gray-300 p-6 h-[26rem] md:h-[22rem] rounded-lg hover:shadow-xl">
                <div className=" inline-flex items-center justify-center rounded-full ">
                  <img src={image1} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium mb-2">
                  Emergency and Out Patient
                </h2>
                <p className="leading-relaxed text-base">
                  Our emergency team is always ready and standby with life
                  saving emergency handling skills. Our outpatient department
                  provides diagnosis and care for all patients, those who do not
                  require hospitalization as well the ones that require
                  admission.
                </p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" variants={animate}>
              <div className="border border-gray-300 p-6 h-[22rem] rounded-lg hover:shadow-xl">
                <div className=" inline-flex items-center justify-center rounded-full">
                  <img src={image2} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Inpatient Services
                </h2>
                <p className="leading-relaxed text-base">
                  Yoya hospital has enough space to accommodate inpatients
                  including an Adult Intensive care unit (ICU). Our services are
                  geared towards ensuring that the patients receive quality care
                  that will improve their prognosis.
                </p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" variants={animate}>
              <div className="border border-gray-300 p-6 h-[22rem] rounded-lg hover:shadow-xl">
                <div className="inline-flex items-center justify-center rounded-full mb-4 ">
                  <img src={image3} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Laboratory Services
                </h2>
                <p className=" text-base">
                  Offering 24 hour reliable diagnostic laboratory and pathology
                  investigation service with affordable prices. The laboratory
                  is staffed with experienced laboratory technologists and well
                  equipped with current state of art technology.
                </p>
              </div>
            </motion.div>

            <motion.div className="xl:w-1/3 md:w-1/2 p-4" variants={animate}>
              <div className="border border-gray-300 p-6 h-[24rem] md:h-[22rem] rounded-lg hover:shadow-xl">
                <div className="inline-flex items-center justify-center rounded-full  mb-4">
                  <img src={image6} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  MCH and Maternity
                </h2>
                <p className="leading-relaxed  text-base">
                  At YOYA, we have dedicated OB/GYN specialists in the
                  department. In addition our nurses are highly skilled and
                  caring for women during pregnancy and childbirth. We have a
                  well organized Neonatal Intensive Care Unit (NICU) that
                  includes a Phototherapy Unit.
                </p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/3 md:w-1/2 p-4 " variants={animate}>
              <div className="border border-gray-300 h-[19rem] md:h-[26rem] lg:h-[22rem] p-6 rounded-lg hover:shadow-xl">
                <div className="inline-flex items-center justify-center rounded-full  mb-4">
                  <img src={image5} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Pharmacy Services
                </h2>
                <p className="leading-relaxed  text-base">
                  We provide pharmacy services 24 hours and for seven days a
                  week, with advice from knowledgeable professionals in the area
                </p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" variants={animate}>
              <div className="border border-gray-300 p-6 h-[26rem] lg:h-[22rem] rounded-lg hover:shadow-xl">
                <div className="inline-flex items-center justify-center rounded-full  mb-4">
                  <img src={image4} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Diagnostic Imaging Unit
                </h2>
                <p className="leading-relaxed text-base">
                  With the expertise of skilled professionals, we provide
                  high-quality diagnostic and therapeutic radiology services. We
                  also have a digital X-ray system and a 4D color doppler
                  ultrasound machine. We also provide endoscopic services
                  (Colonoscopy, Sigmoidoscopy and Gastroduodenoscopy)
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* why us */}
      <div className="title-font sm:text-2xl text-xl my-6 md:text-3xl  font-semibold text-gray-900 flex justify-center gap-2 ">
        WHY US
      </div>
      <div className="flex px-5 flex-col md:flex-row mt-10 text-white">
        <div className="bg-blue-400 w-full md:w-1/3 h-64 flex flex-col gap-2 items-center justify-center px-6 text-center">
          <svg
            className="h-16 w-16"
            width="79"
            height="103"
            viewBox="0 0 79 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68.974 50.5511C65.0024 56.0206 60.2364 59.1697 55.4705 59.8326H54.8085V76.904C54.8085 91.1578 44.8794 102.76 32.435 102.76C20.2553 102.76 10.1939 91.1578 10.1939 76.904V61.8215C4.50118 60.6613 0 55.0261 0 47.8993C0 39.9437 5.56028 33.6455 12.3121 33.6455C19.1962 33.6455 24.7565 39.9437 24.7565 47.8993C24.7565 55.0261 20.3877 60.6613 14.5626 61.8215V76.904C14.5626 88.6716 22.7707 98.1189 32.6998 98.1189C42.7612 98.1189 50.9693 88.6716 50.9693 76.904L51.1017 59.8326C46.4681 59.1697 41.9669 55.8548 37.8629 50.5511C37.201 49.7224 37.0686 48.728 37.201 47.7335C31.6407 39.2807 28.331 28.176 28.331 19.3917C28.331 6.02282 33.455 4.52158 41.6869 2.10979C41.8235 2.06976 41.961 2.02948 42.0993 1.9889H42.2317C42.7612 0.828707 43.8203 0 45.1442 0C46.8653 0 48.3215 1.82315 48.3215 3.81205C48.3215 5.80095 46.8653 7.6241 45.1442 7.6241C44.4823 7.6241 43.688 7.29262 43.1584 6.62965V6.96114C43.0503 6.99122 42.9431 7.021 42.837 7.0505C34.76 9.29597 32.5674 9.90553 32.5674 19.5575C32.5674 27.1816 35.7447 37.4576 40.5106 44.9159C41.1726 44.9159 41.9669 45.4131 42.6288 46.2418C45.0118 49.3909 48.8511 53.3687 53.4846 53.3687C57.9858 53.3687 61.9575 49.3909 64.3404 46.0761C65.0024 45.2474 65.6643 44.9159 66.4586 44.9159C71.2246 37.4576 74.2695 27.1816 74.2695 19.5575C74.2695 9.66267 72.1724 9.12098 63.9354 6.9933L63.8109 6.96114L63.6785 6.7954C63.2813 7.45836 62.6194 7.78984 61.8251 7.78984C60.104 7.78984 58.6478 5.96669 58.6478 3.97779C58.6478 1.9889 60.104 0.165741 61.8251 0.165741C63.1489 0.165741 64.0757 0.828707 64.7376 2.15464V2.32038C73.3428 4.47502 78.3735 5.96669 78.3735 19.3917C78.3735 28.0103 75.0638 39.2807 69.6359 47.5678C69.7683 48.728 69.6359 49.5567 68.974 50.5511ZM12.2427 57.5557C16.5571 57.5557 20.0545 53.1566 20.0545 47.7299C20.0545 42.3033 16.5571 37.9042 12.2427 37.9042C7.92838 37.9042 4.43091 42.3033 4.43091 47.7299C4.43091 53.1566 7.92838 57.5557 12.2427 57.5557Z"
              fill="white"
            />
          </svg>

          <h1>
            With over 25 specialists and subspecialists all under one roof, we
            provide complete healthcare services.
          </h1>
          <Link to="/doctors">
            <button className="rounded-lg bg-white group text-blue-400 p-2 font-medium text-center">
              {" "}
              FIND OUT MORE{" "}
              <MdOutlineNavigateNext
                className="inline text-blue-400 group-hover:translate-x-2 group-hover:scale-150"
                size={23}
              ></MdOutlineNavigateNext>
            </button>
          </Link>
        </div>
        <div className="bg-teal-300 w-full md:w-1/3 h-64 flex px-8 flex-col items-center text-center justify-center">
          <svg
            className="h-16 w-16 mb-2"
            width="91"
            height="91"
            viewBox="0 0 91 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.7344 28.4375H68.25V4.26562C68.25 3.47933 67.613 2.84375 66.8281 2.84375H24.1719C23.387 2.84375 22.75 3.47933 22.75 4.26562V28.4375H4.26562C3.48075 28.4375 2.84375 29.0731 2.84375 29.8594V86.7344C2.84375 87.5207 3.48075 88.1562 4.26562 88.1562H86.7344C87.5192 88.1562 88.1562 87.5207 88.1562 86.7344V29.8594C88.1562 29.0731 87.5192 28.4375 86.7344 28.4375ZM5.6875 31.2812H22.75V85.3125H5.6875V31.2812ZM49.7656 71.0938V85.3125H41.2344V71.0938H49.7656ZM65.4062 85.3125H52.6094V71.0938H55.4531V68.25H35.5469V71.0938H38.3906V85.3125H25.5938V5.6875H65.4062V85.3125ZM85.3125 85.3125H68.25V31.2812H85.3125V85.3125Z"
              fill="white"
            />
            <path
              d="M72.5156 45.5H81.0469C81.8317 45.5 82.4688 44.8644 82.4688 44.0781V35.5469C82.4688 34.7606 81.8317 34.125 81.0469 34.125H72.5156C71.7308 34.125 71.0938 34.7606 71.0938 35.5469V44.0781C71.0938 44.8644 71.7308 45.5 72.5156 45.5ZM73.9375 36.9688H79.625V42.6562H73.9375V36.9688Z"
              fill="#FFFDFD"
            />
            <path
              d="M72.5156 59.7188H81.0469C81.8317 59.7188 82.4688 59.0832 82.4688 58.2969V49.7656C82.4688 48.9793 81.8317 48.3438 81.0469 48.3438H72.5156C71.7308 48.3438 71.0938 48.9793 71.0938 49.7656V58.2969C71.0938 59.0832 71.7308 59.7188 72.5156 59.7188ZM73.9375 51.1875H79.625V56.875H73.9375V51.1875Z"
              fill="#FFFDFD"
            />
            <path
              d="M72.5156 73.9375H81.0469C81.8317 73.9375 82.4688 73.3019 82.4688 72.5156V63.9844C82.4688 63.1981 81.8317 62.5625 81.0469 62.5625H72.5156C71.7308 62.5625 71.0938 63.1981 71.0938 63.9844V72.5156C71.0938 73.3019 71.7308 73.9375 72.5156 73.9375ZM73.9375 65.4062H79.625V71.0938H73.9375V65.4062Z"
              fill="#FFFDFD"
            />
            <path
              d="M18.4844 34.125H9.95312C9.16825 34.125 8.53125 34.7606 8.53125 35.5469V44.0781C8.53125 44.8644 9.16825 45.5 9.95312 45.5H18.4844C19.2692 45.5 19.9062 44.8644 19.9062 44.0781V35.5469C19.9062 34.7606 19.2692 34.125 18.4844 34.125ZM17.0625 42.6562H11.375V36.9688H17.0625V42.6562Z"
              fill="#FFFDFD"
            />
            <path
              d="M29.8594 39.8125H35.5469C36.3317 39.8125 36.9688 39.1769 36.9688 38.3906V32.7031C36.9688 31.9168 36.3317 31.2812 35.5469 31.2812H29.8594C29.0745 31.2812 28.4375 31.9168 28.4375 32.7031V38.3906C28.4375 39.1769 29.0745 39.8125 29.8594 39.8125ZM31.2812 34.125H34.125V36.9688H31.2812V34.125Z"
              fill="#FFFDFD"
            />
            <path
              d="M48.3438 31.2812H42.6562C41.8714 31.2812 41.2344 31.9168 41.2344 32.7031V38.3906C41.2344 39.1769 41.8714 39.8125 42.6562 39.8125H48.3438C49.1286 39.8125 49.7656 39.1769 49.7656 38.3906V32.7031C49.7656 31.9168 49.1286 31.2812 48.3438 31.2812ZM46.9219 36.9688H44.0781V34.125H46.9219V36.9688Z"
              fill="#FFFDFD"
            />
            <path
              d="M54.0312 32.7031V38.3906C54.0312 39.1769 54.6683 39.8125 55.4531 39.8125H61.1406C61.9255 39.8125 62.5625 39.1769 62.5625 38.3906V32.7031C62.5625 31.9168 61.9255 31.2812 61.1406 31.2812H55.4531C54.6683 31.2812 54.0312 31.9168 54.0312 32.7031ZM56.875 34.125H59.7188V36.9688H56.875V34.125Z"
              fill="#FFFDFD"
            />
            <path
              d="M29.8594 51.1875H35.5469C36.3317 51.1875 36.9688 50.5519 36.9688 49.7656V44.0781C36.9688 43.2918 36.3317 42.6562 35.5469 42.6562H29.8594C29.0745 42.6562 28.4375 43.2918 28.4375 44.0781V49.7656C28.4375 50.5519 29.0745 51.1875 29.8594 51.1875ZM31.2812 45.5H34.125V48.3438H31.2812V45.5Z"
              fill="#FFFDFD"
            />
            <path
              d="M48.3438 42.6562H42.6562C41.8714 42.6562 41.2344 43.2918 41.2344 44.0781V49.7656C41.2344 50.5519 41.8714 51.1875 42.6562 51.1875H48.3438C49.1286 51.1875 49.7656 50.5519 49.7656 49.7656V44.0781C49.7656 43.2918 49.1286 42.6562 48.3438 42.6562ZM46.9219 48.3438H44.0781V45.5H46.9219V48.3438Z"
              fill="#FFFDFD"
            />
            <path
              d="M61.1406 42.6562H55.4531C54.6683 42.6562 54.0312 43.2918 54.0312 44.0781V49.7656C54.0312 50.5519 54.6683 51.1875 55.4531 51.1875H61.1406C61.9255 51.1875 62.5625 50.5519 62.5625 49.7656V44.0781C62.5625 43.2918 61.9255 42.6562 61.1406 42.6562ZM59.7188 48.3438H56.875V45.5H59.7188V48.3438Z"
              fill="#FFFDFD"
            />
            <path
              d="M29.8594 62.5625H35.5469C36.3317 62.5625 36.9688 61.9269 36.9688 61.1406V55.4531C36.9688 54.6668 36.3317 54.0312 35.5469 54.0312H29.8594C29.0745 54.0312 28.4375 54.6668 28.4375 55.4531V61.1406C28.4375 61.9269 29.0745 62.5625 29.8594 62.5625ZM31.2812 56.875H34.125V59.7188H31.2812V56.875Z"
              fill="#FFFDFD"
            />
            <path
              d="M48.3438 54.0312H42.6562C41.8714 54.0312 41.2344 54.6668 41.2344 55.4531V61.1406C41.2344 61.9269 41.8714 62.5625 42.6562 62.5625H48.3438C49.1286 62.5625 49.7656 61.9269 49.7656 61.1406V55.4531C49.7656 54.6668 49.1286 54.0312 48.3438 54.0312ZM46.9219 59.7188H44.0781V56.875H46.9219V59.7188Z"
              fill="#FFFDFD"
            />
            <path
              d="M61.1406 54.0312H55.4531C54.6683 54.0312 54.0312 54.6668 54.0312 55.4531V61.1406C54.0312 61.9269 54.6683 62.5625 55.4531 62.5625H61.1406C61.9255 62.5625 62.5625 61.9269 62.5625 61.1406V55.4531C62.5625 54.6668 61.9255 54.0312 61.1406 54.0312ZM59.7188 59.7188H56.875V56.875H59.7188V59.7188Z"
              fill="#FFFDFD"
            />
            <path
              d="M18.4844 48.3438H9.95312C9.16825 48.3438 8.53125 48.9793 8.53125 49.7656V58.2969C8.53125 59.0832 9.16825 59.7188 9.95312 59.7188H18.4844C19.2692 59.7188 19.9062 59.0832 19.9062 58.2969V49.7656C19.9062 48.9793 19.2692 48.3438 18.4844 48.3438ZM17.0625 56.875H11.375V51.1875H17.0625V56.875Z"
              fill="#FFFDFD"
            />
            <path
              d="M18.4844 62.5625H9.95312C9.16825 62.5625 8.53125 63.1981 8.53125 63.9844V72.5156C8.53125 73.3019 9.16825 73.9375 9.95312 73.9375H18.4844C19.2692 73.9375 19.9062 73.3019 19.9062 72.5156V63.9844C19.9062 63.1981 19.2692 62.5625 18.4844 62.5625ZM17.0625 71.0938H11.375V65.4062H17.0625V71.0938Z"
              fill="#FFFDFD"
            />
            <path
              d="M36.9688 22.75H41.2344V27.0156C41.2344 27.8019 41.8714 28.4375 42.6562 28.4375H48.3438C49.1286 28.4375 49.7656 27.8019 49.7656 27.0156V22.75H54.0312C54.8161 22.75 55.4531 22.1144 55.4531 21.3281V15.6406C55.4531 14.8543 54.8161 14.2188 54.0312 14.2188H49.7656V9.95312C49.7656 9.16683 49.1286 8.53125 48.3438 8.53125H42.6562C41.8714 8.53125 41.2344 9.16683 41.2344 9.95312V14.2188H36.9688C36.1839 14.2188 35.5469 14.8543 35.5469 15.6406V21.3281C35.5469 22.1144 36.1839 22.75 36.9688 22.75ZM38.3906 17.0625H42.6562C43.4411 17.0625 44.0781 16.4269 44.0781 15.6406V11.375H46.9219V15.6406C46.9219 16.4269 47.5589 17.0625 48.3438 17.0625H52.6094V19.9062H48.3438C47.5589 19.9062 46.9219 20.5418 46.9219 21.3281V25.5938H44.0781V21.3281C44.0781 20.5418 43.4411 19.9062 42.6562 19.9062H38.3906V17.0625Z"
              fill="#FFFDFD"
            />
            <path
              d="M62.5625 79.625H59.7188V82.4688H62.5625V79.625Z"
              fill="#FFFDFD"
            />
            <path
              d="M62.5625 73.9375H59.7188V76.7812H62.5625V73.9375Z"
              fill="#FFFDFD"
            />
            <path
              d="M62.5625 68.25H59.7188V71.0938H62.5625V68.25Z"
              fill="#FFFDFD"
            />
          </svg>

          <h1>
            {" "}
            We are equipped with the best diagnostic modalities and we give
            every service with experienced and outstanding physicians with very
            affordable price
          </h1>
        </div>
        <div className="bg-teal-600 w-full md:w-1/3 h-64 flex flex-col px-8 py-5 items-center text-center gap-2 justify-center">
          {/* <img className="h-20 w-16" src={Group3} alt="" />{" "} */}
          <svg
            className="h-16 w-16 mb-2"
            width="99"
            height="108"
            viewBox="0 0 99 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.1281 79.4219C54.7594 78.8687 54.2063 78.5 53.4688 78.5C49.4125 78.5 45.5406 80.3437 43.1438 83.6625L41.4844 85.875C39.4563 88.2719 36.3219 89.5625 33.1875 89.5625H27.6563C26.55 89.5625 25.8125 88.825 25.8125 87.7188C25.8125 86.6125 26.55 85.875 27.6563 85.875H31.1594C34.1094 85.875 36.875 83.4781 36.875 80.5281V80.3438C36.875 79.4219 35.9531 78.5 35.0313 78.5H23.7844C17.1469 78.5 11.8 81.45 8.85002 86.2438L3.8719 93.9875C3.50315 94.5406 3.50315 95.2781 3.8719 95.8312L9.40315 105.05C9.58752 105.419 10.1406 105.787 10.5094 105.972C10.6938 105.972 10.6938 105.972 10.8781 105.972C11.2469 105.972 11.6156 105.788 11.9844 105.603C18.9906 100.994 27.1031 98.5969 35.4 98.5969C41.4844 98.5969 47.0156 95.2781 49.9656 89.9313L54.9438 81.0812C55.3125 80.7125 55.3125 79.975 55.1281 79.4219Z"
              fill="white"
            />
            <path
              d="M65.6666 63.3333C78.2366 63.3333 84.5233 63.3333 88.4266 59.4267C92.3333 55.5233 92.3333 49.2367 92.3333 36.6667C92.3333 24.0967 92.3333 17.81 88.4266 13.9067C84.5233 10 78.2366 10 65.6666 10H52.3333C39.7633 10 33.4766 10 29.5733 13.9067C25.6666 17.81 25.6666 24.0967 25.6666 36.6667C25.6666 49.2367 25.6666 55.5233 29.5733 59.4267C31.75 61.6067 34.6666 62.57 39 62.9933"
              fill="white"
            />
            <path
              d="M65.6666 63.3333C78.2366 63.3333 84.5233 63.3333 88.4266 59.4267C92.3333 55.5233 92.3333 49.2367 92.3333 36.6667C92.3333 24.0967 92.3333 17.81 88.4266 13.9067C84.5233 10 78.2366 10 65.6666 10H52.3333C39.7633 10 33.4766 10 29.5733 13.9067C25.6666 17.81 25.6666 24.0967 25.6666 36.6667C25.6666 49.2367 25.6666 55.5233 29.5733 59.4267C31.75 61.6067 34.6666 62.57 39 62.9933"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M65.6666 63.3334C61.5466 63.3334 57.0066 65 52.8633 67.15C46.2033 70.6067 42.8733 72.3367 41.2333 71.2334C39.5933 70.1334 39.9033 66.7167 40.5266 59.8867L40.6666 58.3334"
              fill="white"
            />
            <path
              d="M65.6666 63.3334C61.5466 63.3334 57.0066 65 52.8633 67.15C46.2033 70.6067 42.8733 72.3367 41.2333 71.2334C39.5933 70.1334 39.9033 66.7167 40.5266 59.8867L40.6666 58.3334"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M39.228 43V41.1918L44.0252 36.489C44.484 36.0257 44.8664 35.6141 45.1722 35.2543C45.4781 34.8944 45.7075 34.5458 45.8604 34.2085C46.0134 33.8711 46.0898 33.5112 46.0898 33.1289C46.0898 32.6926 45.9909 32.3192 45.793 32.0089C45.5951 31.694 45.3229 31.4511 44.9766 31.2802C44.6302 31.1093 44.2366 31.0238 43.7958 31.0238C43.3415 31.0238 42.9434 31.1183 42.6016 31.3072C42.2597 31.4916 41.9943 31.7547 41.8054 32.0966C41.621 32.4384 41.5288 32.8455 41.5288 33.3178H39.147C39.147 32.4407 39.3472 31.6783 39.7475 31.0305C40.1478 30.3828 40.6989 29.8813 41.4006 29.5259C42.1068 29.1706 42.9164 28.9929 43.8295 28.9929C44.7562 28.9929 45.5703 29.1661 46.272 29.5124C46.9737 29.8588 47.518 30.3333 47.9048 30.9361C48.2962 31.5388 48.4918 32.227 48.4918 33.0007C48.4918 33.518 48.3929 34.0263 48.195 34.5256C47.997 35.0249 47.6484 35.5781 47.1491 36.1854C46.6544 36.7926 45.9594 37.5281 45.0643 38.3917L42.6825 40.8139V40.9084H48.701V43H39.228ZM50.4822 40.4361V38.4457L56.3455 29.1818H58.0053V32.0156H56.9933L53.0462 38.2702V38.3782H61.2305V40.4361H50.4822ZM57.0742 43V39.8288L57.1012 38.9382V29.1818H59.4627V43H57.0742ZM69.0538 28.5341L64.6007 45.0781H62.4618L66.915 28.5341H69.0538ZM71.0914 43L76.9682 31.3679V31.2734H70.1468V29.1818H79.5591V31.3207L73.6891 43H71.0914Z"
              fill="#005E6C"
            />
          </svg>

          <h1>
            You can get hospitable service 24 hours a day, seven days a week
          </h1>
          <Link to="/appointment">
            <button className="rounded-lg bg-white group text-teal-600 p-2 font-medium text-center">
              {" "}
              GET APPOINTMENT{" "}
              <MdOutlineNavigateNext
                className="inline text-teal-600 group-hover:translate-x-2 group-hover:scale-150"
                size={23}
              ></MdOutlineNavigateNext>
            </button>
          </Link>
        </div>
      </div>
      {/* About us */}
      <section ref={about} className="text-gray-600 body-font mt-2">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              // class="object-cover object-center rounded md:h-80 w-[100%] sm:w-full sm:h-full"
              className="object-cover object-center rounded"
              alt="hero"
              src={aboutus}
            />
          </div>
          <motion.div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center  justify-center "
            transition={{ staggerChildren: 0.5 }}
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ABOUT US
              <br className="" />
            </h1>
            <motion.span
              className="mb-8 leading-relaxed text-justify"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1,
                bounce: 0.2,
                delay: 0.2,
              }}
            >
              <p className="inline border-b-2 text-[#1990A2] font-semibold">
                OUR STORY
              </p>{" "}
              YOYA Hospital is a hospital founded by specialists and
              sub-specialists with a commitment to providing high-quality
              medical care in a facility that provides affordable and accessible
              quality health care to the public, with a strong emphasis on
              enhancing the dignity of the sick.We rely on our motto,
              "Excellence is our passion," to provide a healing touch to
              everyone who enters our hospital. In the same vein, we strive to
              provide our customers with comprehensive, evidence-based health
              care.
            </motion.span>
            <div className="flex justify-center">
              <Link
                to="/aboutus"
                className="inline-flex text-white hover:bg-teal-500 border-0 py-2 px-6 focus:outline-none bg-[#1990A2] rounded text-lg "
              >
                READ MORE
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* video and typed text */}
      <section className="text-gray-600  ">
        <div className=" mx-auto flex px-5 py-5 md:flex-row flex-col md:gap-7 items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <video src={video} controls autoPlay></video>
          </div>
          <div className=" md:py-24 py-10 px-20 sm:px-0  w-full md:w-1/2   flex flex-col justify-center items-center text-center  rounded-xl shadow-lg">
            <p className=" font-pacifico   leading-relaxed text-base  md:text-xl lg:text-2xl text-gray-600">
              <p className="text-[#1990A2] inline">" </p>{" "}
              <Typed
                strings={["Excellence is our passion"]}
                typeSpeed={120}
                loop
              />{" "}
              <p className="text-[#1990A2] inline">" </p>.
            </p>
          </div>
        </div>
      </section>
      {/* banner */}
      <div className="p-6 py-12 bg-gradient-to-r from-sky-500 to-teal-500 mt-16 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-5xl tracking-tighter font-bold">
              Providing cutting-edge health care to your family
              <br className="sm:hidden" />
            </h2>

            <Link
              to="/appointment"
              className="group px-6 mt-4 lg:mt-0 py-3 rounded-lg block bg-teal-400 hover:bg-teal-300 text-white  "
            >
              Make Appointment{" "}
              <GrNext
                className="inline group-hover:translate-x-4 group-hover:scale-125 "
                size={20}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Testimonioal */}
      <div className="title-font sm:text-2xl text-xl mt-20 mb-6 md:text-3xl  font-semibold text-gray-900 flex justify-center gap-2 ">
        What patients say <h1 className="inline text-[#1990A2]">About YOYA</h1>
      </div>
      <motion.div
        className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8"
        transition={{ staggerChildren: 0.5 }}
      >
        <div className="bg-gray-100  w-72 shadow-lg mx-auto rounded-xl p-4">
          <motion.p
            className="text-black "
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.4,
              delay: 0.2,
            }}
          >
            <span className="font-bold text-indigo-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-indigo-500 text-lg">”</span>
          </motion.p>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://img.freepik.com/free-photo/young-handsome-man-isolated-white-background_185193-82024.jpg?t=st=1658584176~exp=1658584776~hmac=722d922409729aa341bee966de291e133e9df5224d41865c3463180c3d7a0d93&w=740"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col ml-2 justify-between">
              <span className="font-semibold text-[#1990A2] text-sm">
                Firaol Birhanu
              </span>
              <span className=" text-xs flex items-center">CEO of HABESHA</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100  w-72 shadow-lg mx-auto rounded-xl p-4">
          <motion.p
            className="text-black "
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.95,
              bounce: 0.4,
              delay: 0.2,
            }}
          >
            <span className="font-bold text-indigo-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-indigo-500 text-lg">”</span>
          </motion.p>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://img.freepik.com/free-photo/young-handsome-man-isolated-white-background_185193-82024.jpg?t=st=1658584176~exp=1658584776~hmac=722d922409729aa341bee966de291e133e9df5224d41865c3463180c3d7a0d93&w=740"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col ml-2 justify-between">
              <span className="font-semibold text-[#1990A2] text-sm">
                Firaol Birhanu
              </span>
              <span className=" text-xs flex items-center">
                employee of yoya
              </span>
            </div>
          </div>
        </div>
        <div className="bg-gray-100  w-72 shadow-lg mx-auto rounded-xl p-4">
          <motion.p
            className="text-black"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.95,
              bounce: 0.4,
              delay: 0.2,
            }}
          >
            <span className="font-bold text-indigo-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-indigo-500 text-lg">”</span>
          </motion.p>
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src="https://img.freepik.com/free-photo/young-handsome-man-isolated-white-background_185193-82024.jpg?t=st=1658584176~exp=1658584776~hmac=722d922409729aa341bee966de291e133e9df5224d41865c3463180c3d7a0d93&w=740"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col ml-2 justify-between">
              <span className="font-semibold text-[#1990A2] text-sm">
                Firaol Birhanu
              </span>
              <span className="text-xs flex items-center">Customer</span>
            </div>
          </div>
        </div>
      </motion.div>
      {/* news feed */}

      <section ref={blog} className=" ">
        <div className="container  mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <div className="title-font sm:text-2xl text-xl mt-10 md:text-3xl  font-semibold text-gray-900 flex justify-center gap-2 ">
              Our Recent
              <h1 className="inline text-[#1990A2]">News</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 px-5">
            <Blog />
          </div>
        </div>
      </section>
      {/* contact us */}
      <section ref={contact} className="text-gray-600 body-font relative">
        <div className="title-font sm:text-2xl text-xl mt-10 md:text-3xl  h-20 font-semibold text-gray-900 flex justify-center gap-2 ">
          Contact
          <h1 className="inline text-[#1990A2]">US</h1>
        </div>
        <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2S rounded-lg overflow-hidden sm:mr-10 p-28 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.578652733735!2d39.25757541529175!3d8.540220998802674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b210f1cfd3ef7%3A0x62970f3c76619070!2sYoya%20hospital!5e0!3m2!1sen!2set!4v1661762090595!5m2!1sen!2set"
            ></iframe>

            <div className="bg-[#1990A2] relative flex flex-wrap p-3 rounded shadow-md text-xs md:text-base text-white">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-teal-300 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Adama,Oromia,Ethiopia.
                  <br />
                  Near Robi Hotel
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-teal-300 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="leading-relaxed">support@yoyahospital.org</a>
                <h2 className="title-font font-semibold text-teal-300 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">0228 125646</p>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={userSchema}
              onSubmit={(values, { resetForm }) => {
                axios
                  .post(
                    `${import.meta.env.VITE_API}feedback/`,
                    {
                      name: values.name,
                      email: values.email,
                      phoneNumber: values.phone,
                      message: values.message,
                    },
                    { headers: { "Content-Type": "application/json" } }
                  )
                  .then((res) => {
                    console.log(res);
                    toast.success("Feedback sent success", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                    resetForm({ values: "" });
                  })

                  .catch((err) => console.error(err));
              }}
            >
              {(formik) => (
                <Form>
                  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                    Feedback
                  </h2>
                  <p className="leading-relaxed mb-5 text-gray-600">
                    We value your feedback and encourage you to contact us if
                    you have any.
                  </p>
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <div className="text-red-600">
                      <ErrorMessage name="name" />
                    </div>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email (optional)
                    </label>
                    <div className="text-red-600">
                      <ErrorMessage name="email" />
                    </div>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Phone number
                    </label>
                    <div className="text-red-600">
                      <ErrorMessage name="phone" />
                    </div>
                    <Field
                      type="phone"
                      id="phone"
                      name="phone"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <div className="text-red-600">
                      <ErrorMessage name="message" />
                    </div>
                    <Field
                      type="text"
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-[#1990A2] border-0 py-2 px-6 focus:outline-none hover:bg-teal-500 rounded text-lg"
                  >
                    SEND
                  </button>
                  <p className="text-xs text-gray-500 mt-3">
                    yoya hospital customer support
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      {/* footer */}
      {/* bgpic */}
      <footer className="p-4 h-[300px] w-full mt-8 rounded-lg shadow md:px-20 flex flex-col justify-center  bg-teal-700 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="mr-3 h-16" alt="YOYA Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">
              YOYA Hospital
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 ">
            <li>
              <button
                className="mr-4 hover:underline md:mr-6 "
                onClick={() => handleScroll(about)}
              >
                About
              </button>
            </li>
            <li>
              <Link to="/doctors" className="mr-4 hover:underline md:mr-6">
                Our Doctors
              </Link>
            </li>
            <li>
              <button
                className="mr-4 hover:underline md:mr-6 "
                onClick={() => handleScroll(blog)}
              >
                News
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll(contact)}
                className="hover:underline"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">
          © 2022 YOYA™ . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}

export default Home;
