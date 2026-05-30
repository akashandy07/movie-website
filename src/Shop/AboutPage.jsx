import React from 'react'
import './About.css'

const AboutPage = () => {
  return (
    <div className="about-wrapper">

      {/* Hero Section */}
      <div className="about-hero">
        <h1>🎬 About CineWorld</h1>
        <p>Your ultimate destination for movies, ratings, and more.</p>
      </div>

      {/* What We Offer */}
      <div className="about-section">
        <h2>What We Offer</h2>
        <div className="about-cards">
          <div className="about-card">
            <span>🔥</span>
            <h3>Popular Movies</h3>
            <p>Stay up to date with the most watched and trending movies worldwide.</p>
          </div>
          <div className="about-card">
            <span>⭐</span>
            <h3>Top Rated</h3>
            <p>Explore the highest rated movies of all time, ranked by fans like you.</p>
          </div>
          <div className="about-card">
            <span>🎥</span>
            <h3>Watch Trailers</h3>
            <p>Play trailers and preview movies before you decide what to watch.</p>
          </div>
          <div className="about-card">
            <span>📅</span>
            <h3>Upcoming Releases</h3>
            <p>Never miss a release. Get notified about upcoming blockbusters.</p>
          </div>
          <div className="about-card">
            <span>📺</span>
            <h3>TV Shows</h3>
            <p>Discover top TV shows and series across all genres.</p>
          </div>
          <div className="about-card">
            <span>🗳️</span>
            <h3>Rate Movies</h3>
            <p>Login with TMDB and share your ratings with the community.</p>
          </div>
        </div>
      </div>

      {/* Powered By */}
      <div className="about-section about-powered">
        <h2>Powered By</h2>
        <p>
          This app is built using the{' '}
          <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
            TMDB API
          </a>
          , one of the most comprehensive movie and TV databases in the world.
        </p>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c0143a536b.svg"
          alt="TMDB Logo"
          className="tmdb-logo"
        />
      </div>

      {/* Developer */}
      <div className="about-section about-dev">
        <h2>👨‍💻 Developer</h2>
        <p>Built with ❤️ using <strong>React</strong> and the <strong>TMDB API</strong>.</p>
        <p>Designed for movie lovers who want a clean, fast, and modern experience.</p>
      </div>

    </div>
  )
}

export default AboutPage