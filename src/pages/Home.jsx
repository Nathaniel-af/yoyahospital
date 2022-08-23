import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Nav from "../components/Nav";
import Swipper from "../components/swiper";
import Typed from "react-typed";
import image1 from "../assets/services/image1.png";
import image2 from "../assets/services/image2.png";
import image3 from "../assets/services/image3.png";
import image4 from "../assets/services/image4.png";
import image5 from "../assets/services/image5.png";
import image6 from "../assets/services/image6.png";
import aboutus from "../assets/aboutus.png";
import { useEffect } from "react";
const Variants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5, duration: 0.6 },
  },
};

function Home() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
    console.log("use effect hook , inview=", inView);
  }, [inView]); /*  */

  return (
    <>
      <Nav />
      <Swipper />
      {/* Services */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 md:py-14 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
              OUR SERVICES
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              YOYA Hospital offers the following services
            </p>
          </div>
          <div ref={ref} className="flex flex-wrap -m-4">
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" animate={animation}>
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
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" animate={animation}>
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
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" animate={animation}>
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
            <motion.div
              className="xl:w-1/3 md:w-1/2 p-4"
              ref={ref}
              animate={animation}
            >
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
            <motion.div className="xl:w-1/3 md:w-1/2 p-4 " animate={animation}>
              <div className="border border-gray-200 p-6 rounded-lg hover:shadow-xl">
                <div className="inline-flex items-center justify-center rounded-full  mb-4">
                  <img src={image5} alt="" />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Pharmacy Services
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </motion.div>
            <motion.div className="xl:w-1/3 md:w-1/2 p-4" animate={animation}>
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
          </div>
        </div>
      </section>
      {/* About us */}

      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              // class="object-cover object-center rounded md:h-80 w-[100%] sm:w-full sm:h-full"
              className="object-cover object-center rounded"
              alt="hero"
              src={aboutus}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center  justify-center ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ABOUT US
              <br className="" />
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              <p className="inline border-b-2 text-gray-800">OUR STORY</p> YOYA
              Hospital is established Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nihil consectetur omnis suscipit repudiandae,
              voluptas possimus ea architecto reiciendis soluta aperiam, tenetur
              magnam sequi optio maxime dolorum incidunt atque vitae.
              Placeat!.....
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white hover:bg-indigo-500 border-0 py-2 px-6 focus:outline-none bg-[#1990A2] rounded text-lg">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* video and typed text */}

      <section className="text-gray-600  bg-gray-100">
        <div className=" mx-auto flex px-5 py-5 md:flex-row flex-col md:gap-7 items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded  "
              alt="hero"
              src="https://scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/276242238_156328050115085_424367970683167284_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=51ZbHuBci7wAX-ygHQ3&_nc_ht=scontent.fadd2-1.fna&oh=00_AT-OAqehxAOJO3n9u2FNcDp_7JwavgJZNEfTeoil_zCZKw&oe=62E08216"
            />
          </div>
          <div className=" md:py-24 py-10 px-20 sm:px-0  w-full md:w-1/2   flex flex-col justify-center items-center text-center bg-white rounded-xl shadow-lg">
            <p className=" font-pacifico   leading-relaxed text-base  md:text-xl lg:text-2xl text-gray-600">
              <p className="text-[#1990A2] inline">" </p>{" "}
              <Typed
                strings={["Your Center of Excellence", "Center of Excellence "]}
                typeSpeed={120}
                loop
              />{" "}
              <p className="text-[#1990A2] inline">" </p>.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonioal */}
      <div className="title-font sm:text-2xl text-xl mt-10 md:text-3xl  h-20 font-semibold text-gray-900 flex justify-center gap-2 ">
        What patients say <h1 className="inline text-[#1990A2]">About YOYA</h1>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
        <div className="bg-gray-100  w-72 shadow-lg mx-auto rounded-xl p-4">
          <p className="text-black ">
            <span className="font-bold text-indigo-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-indigo-500 text-lg">”</span>
          </p>
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
          <p className="text-black ">
            <span className="font-bold text-indigo-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-indigo-500 text-lg">”</span>
          </p>
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
          <p className="text-black ">
            <span className="font-bold text-indigo-500 text-lg">“</span>
            To get social media testimonials like these, keep your customers
            engaged with your social media accounts by posting regularly
            yourself
            <span className="font-bold text-indigo-500 text-lg">”</span>
          </p>
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
      </div>
      {/* news feed */}
      <section className="py-6 sm:py-12 ">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
            <p className="font-serif text-sm ">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col ">
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
            <article className="flex flex-col ">
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
            <article className="flex flex-col ">
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
            <article className="flex flex-col">
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

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            {/* <iframe
              width="100%"
              height="100%"
              class="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
            ></iframe> */}
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
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
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>

      {/* footer */}

      <footer className="px-4 divide-y ">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="flex-shrink-0 w-5 h-5 rounded-full "
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                </svg>
              </div>
              <span className="self-center text-2xl font-semibold">
                Brand name
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase ">Product</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase ">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase ">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-50">Social media</div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-400">
          © 2022 YOYA Hospital. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;
