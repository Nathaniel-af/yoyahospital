import React from "react";
import Nav from "../components/Nav";
function Aboutus() {
  return (
    <>
      <Nav />
      <div className="mt-28 px-20 leading-relaxed">
        <h1 className="text-2xl font-bold text-[#1990A2]">About US</h1>
        <p className="text-teal-600 inline leading-relaxed">OUR STORY</p> YOYA
        Hospital is a hospital founded by specialists and sub-specialists with a
        commitment to providing high-quality medical care in a facility that
        provides affordable and accessible quality health care to the public,
        with a strong emphasis on enhancing the dignity of the sick.We rely on
        our motto, "Excellence is our passion," to provide a healing touch to
        everyone who seeks a treatment in our hospital. <br></br>
        <p className=" mt-4">
          Our cutting edge laboratory and imaging departments deliver a reliable
          result to provide a high quality care with quite devoted staff. We
          strive to provide all necessary utmost care for our community in a
          single institute with a distinguished and experienced doctor with most
          affordable cost. We are extremely dedicated in social works and
          Medical/ Surgical campaigns where and when we are needed.
        </p>
      </div>
    </>
  );
}

export default Aboutus;
