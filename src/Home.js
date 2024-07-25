// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    Err,
  } = useFetch("http://localhost:8000/blogs");
  // const HandleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // const [name,setName] =useState('Nafiur');

  // useEffect(()=>{
  //   console.log("use effect ran");
  //   console.log(blogs);
  // },[name])

  return (
    <div className="home">
      {Err && (
        <div>
          <h3>{Err}</h3>
        </div>
      )}
      {isLoading && (
        <div>
          <h2>Loading...</h2>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blg) => blg.author === "mario")}
        title="Mario's blogs"
      /> */}
      {/* <button onClick={()=>setName('Rajieb')}>Change Name</button> */}
      {/* <h2>{name}</h2> */}
    </div>
  );
};

export default Home;
