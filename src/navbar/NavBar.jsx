import React, { useState } from 'react'
// import SearchFilter from '../serchfillter/SearchFilter'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'


const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();


  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar">

          {/* Logo */}
          <div className="logo">MyFlix</div>

          {/* Menu */}
          <div className="nav-links">
            <span onClick={() => navigate("/")}>Movie</span>
            <span onClick={() => navigate("/tv")}>TV Shows</span>
            <span onClick={() => navigate('/my-list')}>My List</span>
          </div>

          {/* Right side */}
          <div className="right-section">

            {/* Search */}
            {/* <div className="search-box">
              <input
                type="text"
                placeholder="Search for movies..."
                 value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div> */}

            <div>
              <button className="login-btn"
                onClick={() => navigate("/login")}>
                Login
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* <SearchFilter searchTerm={searchTerm} /> */}
    </>
  )

}

export default NavBar