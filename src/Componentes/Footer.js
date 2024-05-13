import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>Version</b> 1.0.0
      </div>
      <strong>
        Copyright © 2024{" "}
        <Link to={"https://www.linkedin.com/in/yeimer-lopez/"}>
          YeimerLopez
        </Link>
        .
      </strong>{" "}
      All rights reserved.
    </footer>
  );
};

export default Footer;
