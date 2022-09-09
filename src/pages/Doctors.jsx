import React from "react";
import Nav from "../components/Nav";

function Doctors() {
  const docs = JSON.parse(localStorage.getItem("physician"));
  return (
    <div>
      <Nav />
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            YOYA TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Meet our Most Talented Doctors
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {docs.map((data) => (
              <div
                key={data.id}
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={`${import.meta.env.VITE_MEDIA}${
                          data.physicianImage
                        }`}
                        alt
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16 mb-5">
                    <div className="font-bold text-3xl text-center pb-1">
                      {data.name}
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      {data.speciality}
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      {data.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
