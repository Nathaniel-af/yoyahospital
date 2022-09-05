import React, { useRef } from "react";
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
import aboutus from "../assets/aboutus.png";
import Group1 from "../assets/whyus/Group1.svg";
import Group2 from "../assets/whyus/Group2.svg";
import Group3 from "../assets/whyus/Group3.svg";
import { GrNext } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
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
            {/* <p> {import.meta.env.VITE_API}</p> */}
          </div>
          <motion.div
            className="flex flex-wrap -m-4"
            initial={"hidden"}
            whileInView={"visible"}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" variants={animate}>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-xl">
                <div className=" inline-flex items-center justify-center rounded-full ">
                  <img src={image1} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium mb-2">
                  Accidents/ Emergency and Out Patient
                </h2>
                <p className="leading-relaxed text-base">
                  Our outpatient department provides diagnosis and care for all
                  patients, those who do not require hospitalization as well the
                  ones that require admission.
                </p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" variants={animate}>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-xl">
                <div className=" inline-flex items-center justify-center rounded-full">
                  <img src={image2} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Inpatient Services
                </h2>
                <p className="leading-relaxed text-base">
                  YOYA hospital has a bed capacity of 150 patients. Our services
                  are geared towards ensuring that the patients receive quality
                  care that will improve their prognosis.
                </p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" variants={animate}>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-xl">
                <div className="inline-flex items-center justify-center rounded-full mb-4 ">
                  <img src={image3} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Laboratory Services
                </h2>
                <p className=" text-base">
                  Offering 24 hour service at affordable prices. The laboratory
                  is staffed with experienced laboratory technologists and well
                  equipped with current state of art technology.
                </p>
              </div>
            </motion.div>

            <motion.div className="xl:w-1/3 md:w-1/2 p-4" variants={animate}>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-xl">
                <div className="inline-flex items-center justify-center rounded-full  mb-4">
                  <img src={image6} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  MCH and Maternity
                </h2>
                <p className="leading-relaxed text-base">
                  At YOYA, we have dedicated departments that specializes in
                  caring for women during pregnancy and childbirth.
                </p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/3 md:w-1/2 p-4 " variants={animate}>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-xl">
                <div className="inline-flex items-center justify-center rounded-full  mb-4">
                  <img src={image5} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Pharmacy Services
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm. Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" variants={animate}>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-xl">
                <div className="inline-flex items-center justify-center rounded-full  mb-4">
                  <img src={image4} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Radiology and Sonography
                </h2>
                <p className="leading-relaxed text-base">
                  Ultrasound, or Sonography, is a technique that uses sound
                  waves to study and treat different areas of the body.
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
          <img className="h-16 w-16" src={Group1} alt="" />
          <h1>
            26 specialist Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Enim facere vero quasi? Laudantium{/*  */}
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
          <img className="h-16 w-16" src={Group2} alt="" />
          <h1>
            {" "}
            Fully equipped infrustructure Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos adipisci quas tempora delectus?
            Corrupti mollitia voluptatibus veniam facere perspiciatis, eos
          </h1>
        </div>
        <div className="bg-teal-600 w-full md:w-1/3 h-64 flex flex-col px-8 py-5 items-center text-center gap-2 justify-center">
          <img className="h-20 w-16" src={Group3} alt="" />{" "}
          <h1>
            24 Hours Hospitable service Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
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
                duration: 0.95,
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
              <button className="inline-flex text-white hover:bg-teal-500 border-0 py-2 px-6 focus:outline-none bg-[#1990A2] rounded text-lg ">
                READ MORE
              </button>
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

            <a
              href="#"
              rel="noreferrer noopener"
              className="group px-6 mt-4 lg:mt-0 py-3 rounded-lg block bg-teal-400 hover:bg-teal-300 text-white  "
            >
              Make Appointment{" "}
              <GrNext
                className="inline group-hover:translate-x-4 group-hover:scale-125 "
                size={20}
              />
            </a>
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
                <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" />
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
              <span className="text-xs flex items-center">
                Customer
                <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" />
              </span>
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
            <article className="flex flex-col bg-gray-50 hover:shadow-lg">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 "
                  src="https://source.unsplash.com/200x200/?fashion?1"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline "
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
                  <span>June 1, 2020</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50 hover:shadow-lg">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 "
                  src="https://source.unsplash.com/200x200/?fashion?2"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline "
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>June 2, 2020</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50 hover:shadow-lg ">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 "
                  src="https://source.unsplash.com/200x200/?fashion?3"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline "
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>June 3, 2020</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50 hover:shadow-lg">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 "
                  src="https://source.unsplash.com/200x200/?fashion?4"
                />
              </a>
              <div className="flex flex-col flex-1 p-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline "
                >
                  Convenire
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
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
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
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
      <footer className="p-4 h-[300px] w-full mt-8 rounded-lg shadow md:px-20 flex flex-col justify-center bgpic">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src={logo} class="mr-3 h-16" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">
              YOYA Hospital
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 ">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Our Doctors
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
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
