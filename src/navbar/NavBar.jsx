import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { useSearchMovie } from "../custom/SearchMovie";
import SearchFilter from "../serchfillter/SearchFilter";






const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [query, setQuery] = useState("")


  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const searchhandler = () => {
    if (query.trim()) {
      navigate(`/search?query=${query}`)
      setQuery("") // clear input after search
    }
  }



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

          <div className="search-container">
            <div className="search-section">
              <input
                type="text"
                placeholder="Search movies..."
                value={query} // ✅ bind to search input
                onChange={(e) => setQuery(e.target.value)}

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
        <span onClick={() => handleNavigate("/")}>Movie</span>
        <span onClick={() => handleNavigate("/tv")}>TV Shows</span>
        <span onClick={() => handleNavigate("/my-list")}>My List</span>
      </div>
    </>
  );
};

export default NavBar;