import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar">

          {/* Logo */}
          <div className="logo" onClick={() => navigate("/")}>
            MyFlix
          </div>

          {/* Desktop Menu */}
          <div className="nav-links desktop">
            <span onClick={() => navigate("/")}>Movie</span>
            <span onClick={() => navigate("/tv")}>TV Shows</span>
            <span onClick={() => navigate("/my-list")}>My List</span>
          </div>

          {/* Right */}
          <div className="right-section">
            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            {/* Hamburger */}
            <div
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>
          </div>

        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

      {/* Slide Menu */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <span onClick={() => handleNavigate("/")}>Movie</span>
        <span onClick={() => handleNavigate("/tv")}>TV Shows</span>
        <span onClick={() => handleNavigate("/my-list")}>My List</span>
      </div>
    </>
  );
};

export default NavBar;