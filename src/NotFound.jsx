import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>Sorry</h2>
      <p>the page you are searching is not here</p>
      <Link to="/">
        <p>return to the homepage....</p>
      </Link>
    </>
  );
};

export default NotFound;
