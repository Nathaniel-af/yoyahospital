import React from "react";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import { Context } from "./Context";
function Blogdetails() {
  const { id } = useParams();
  const blog = JSON.parse(localStorage.getItem("blog"));
  // const { blog } = Context();
  // console.log(blog);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      {
        <div className="mt-20 px-3 md:px-10 lg:px-40 flex flex-col gap-2">
          <img
            src={`${import.meta.env.VITE_MEDIA}${blog[id.slice(1)].blogImage}`}
            alt=""
          />
          <div className="bg-cyan-600 text-white flex flex-col gap-1  p-3 rounded-b-md">
            <h1 className="text-4xl font-extrabold ">
              {blog[id.slice(1)].blogTitle}
            </h1>
            <p className="text-xs self-start">
              {new Date(blog[id.slice(1)].dateAdded).toLocaleDateString(
                "en-US",
                options
              )}
            </p>
          </div>
          <div className="px-4  whitespace-pre-wrap ">
            {blog[id.slice(1)].blogDetail}
          </div>
          {}
        </div>
      }
    </>
  );
}

export default Blogdetails;
