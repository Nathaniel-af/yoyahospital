import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "./Context";
function Blogdetails() {
  const { id } = useParams();
  const { blog } = Context();
  console.log(blog);

  return <>{<div>{blog[id.slice(1)].blogTitle}</div>}</>;
}

export default Blogdetails;
