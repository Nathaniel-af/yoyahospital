import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import Pagination from "./Pagination";
function Blog() {
  const { loading } = Context();
  const blog = JSON.parse(localStorage.getItem("blog"));
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(3);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = () => {
  //   setCurrentPage((currentPage) => currentPage + 1);
  // };

  // const paginateLeft = () => {
  //   setCurrentPage((currentPage) => currentPage - 1);
  // };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      {loading ? (
        <p className="text-center">loading ...</p>
      ) : (
        blog.map((data, index) => (
          <Link
            to={`/blog:${index}`}
            key={index}
            className=" flex flex-col bg-gray-50 hover:shadow-lg"
          >
            <Link to={`/blog:${index}`}>
              <img
                alt=""
                className="object-cover w-full h-52 "
                src={`${import.meta.env.VITE_MEDIA}${data.blogImage}`}
              />
            </Link>
            <div className="flex flex-col p-6">
              <Link
                to={`/blog:${index}`}
                className=" py-2 text-lg font-semibold "
              >
                {`${data.blogTitle.slice(0, 50)} ${
                  data.blogTitle.length > 20 ? "..." : ""
                }`}
              </Link>
              <h1 className="text-base py-2 leading-relaxed  ">
                {data.blogDetail.slice(0, 100)}
                {data.blogDetail.length > 20 ? (
                  <Link to={`/blog:${index}`} className="text-indigo-700 ml-2">
                    Read more ...
                  </Link>
                ) : (
                  <p> </p>
                )}
              </h1>
              <div className=" text-xs">
                <span>
                  {new Date(data.dateAdded).toLocaleDateString(
                    "en-US",
                    options
                  )}
                </span>
              </div>
            </div>
          </Link>
        ))
      )}
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={blog.length}
        paginate={paginate}
        paginateLeft={paginateLeft}
        currentPage={currentPage}
      /> */}
    </>
  );
}

export default Blog;
