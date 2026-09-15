import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSearchMovie } from "../custom/SearchMovie";
import SearchFilter from "../serchfillter/SearchFilter";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const searchhandler = () => {
    if (query.trim()) {
      navigate(`/search?query=${query}`);
      setQuery("");
    }
  };

  const isActive = (path) => location.pathname === path;

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
            <span
              className={isActive("/") ? "active" : ""}
              onClick={() => navigate("/")}
            >
              Movies
            </span>
            <span
              className={isActive("/tv") ? "active" : ""}
              onClick={() => navigate("/tv")}
            >
              TV Shows
            </span>
            <span
              className={isActive("/my-list") ? "active" : ""}
              onClick={() => navigate("/my-list")}
            >
              My List
            </span>
          </div>

          <div className="search-container">
            <div className="search-section">
              <svg
                className="search-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && searchhandler()}
              />
              <button onClick={searchhandler}>Search</button>
            </div>
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
        <span
          className={isActive("/") ? "active" : ""}
          onClick={() => handleNavigate("/")}
        >
          Movies
        </span>
        <span
          className={isActive("/tv") ? "active" : ""}
          onClick={() => handleNavigate("/tv")}
        >
          TV Shows
        </span>
        <span
          className={isActive("/my-list") ? "active" : ""}
          onClick={() => handleNavigate("/my-list")}
        >
          My List
        </span>
      </div>
    </>
  );
};

export default NavBar;