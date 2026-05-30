import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand-logo">CINEMAX</div>
          <p className="brand-desc">
            Your ultimate destination for movies and TV shows.
            Stream the latest blockbusters anytime, anywhere.
          </p>
          <div className="social-row">
            <span className="social-btn">f</span>
            <span className="social-btn">X</span>
            <span className="social-btn">in</span>
            <span className="social-btn">yt</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Browse</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/popular">Popular</a></li>
            <li><a href="/upcoming">Upcoming</a></li>
            <li><a href="/top-rated">Top Rated</a></li>
            <li><a href="/tv">TV Shows</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Genres</h4>
          <ul>
            <li><a href="#">Action</a></li>
            <li><a href="#">Comedy</a></li>
            <li><a href="#">Drama</a></li>
            <li><a href="#">Horror</a></li>
            <li><a href="#">Sci-Fi</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2025 <span>CINEMAX</span>. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
        <select className="lang-select">
          <option>English</option>
          <option>Tamil</option>
          <option>Hindi</option>
        </select>
      </div>
    </footer>
  )
}

export default Footer