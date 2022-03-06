import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbarStyle">
      <div className="travelIcon">
        <img src="https://i.ibb.co/tzRc8f7/Logo.png" alt="" />
      </div>
      <div className="searchBar">
        <input
          style={{ backgroundColor: "lightGray" }}
          placeholder="Search your destination"
          type="text"
        />
      </div>
      <div className="navLink">
        <ul>
          <li>
            <a href="news">News</a>
          </li>
          <li>
            <a href="news">Destination</a>
          </li>
          <li>
            <a href="news">Blog</a>
          </li>
          <li>
            <a href="news">Contact</a>
          </li>
          <li>
            <a
              href="news"
              style={{
                backgroundColor: "#ee6226",
                padding: "6px 14px",
                borderRadius: "6px",
              }}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
