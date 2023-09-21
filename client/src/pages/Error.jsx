import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import notFoundImg from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={notFoundImg} alt="Not Found" />
          <h3>Ohh! page not found</h3>
          <p>It seems the we can't find the page you ar looking for </p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <div>
      <h1> Error Page!!</h1>
      <Link to="/dashboard">Dashboard Page </Link>
    </div>
  );
};

export default Error;
