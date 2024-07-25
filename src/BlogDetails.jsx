import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, Err, isLoading } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const history = useNavigate();

  const HandleClick = async () => {
    try {
      const response = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("network response is not ok");
      } else {
        // isPending(false);
        history("/");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {Err && <div>{Err}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <br />
          <h2>Content</h2>
          <div>{data.body}</div>
          <button onClick={HandleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
