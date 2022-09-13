import React from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { Context } from "./Context";
function Blogdetails() {
  const { id } = useParams();
  const { blog } = Context();
  console.log(blog);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <Nav />
      {
        <div className="mt-20 px-3 md:px-10 lg:px-40 flex flex-col gap-2">
          <img
            src={`${import.meta.env.VITE_MEDIA}${blog[id.slice(1)].blogImage}`}
            alt=""
          />
          <div className="bg-teal-600 text-white flex flex-col gap-1  p-3 rounded-b-md">
            <h1 className=" ">{blog[id.slice(1)].blogTitle}</h1>
            <p className="text-xs self-end">
              {new Date(blog[id.slice(1)].dateAdded).toLocaleDateString(
                "en-US",
                options
              )}
            </p>
          </div>
          <p className="px-4">{blog[id.slice(1)].blogDetail}</p>
          {}
        </div>
      }
    </>
  );
}

export default Blogdetails;
