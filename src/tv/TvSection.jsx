import React from 'react'
import { useTvShow } from '../custom/TvShow'
import TvBanner from './TvBanner'
import './Tv.css'
import { useTvActionss } from '../custom/TvVideos'
import { useTvDay } from '../custom/TvDay'
import { useNavigate } from "react-router-dom";
import AirTv from './AirTv'
import AiringTodaySection from './AiringToday'

const TvSection = () => {
  const { tv, loading } = useTvShow()
  const { tvDay, loadings } = useTvDay()
  const { handlePlay } = useTvActionss();
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w300";
  const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";
  const navigate = useNavigate()
  return (
    <>
      
      <TvBanner /> 
      
      <div className='tv-section'>
        <h1>Popular TV Shows</h1>
        {loadings ? (
          <p>Loading...</p>
        ) : (
          <div className='tv-grid'>
            {tv.map((show) => (
              <div key={show.id} className='tv-card' onClick={() => navigate(`/tv/${show.id}`)}>
                <img
                  src={show.poster_path ? `${BASE_IMG_URL}${show.poster_path}` : FALLBACK_IMG}
                  alt={show.name}
                />
                <div className="card-info">
                  <h3>{show.name}</h3>
                  <button onClick={(e) => { e.stopPropagation(); handlePlay(show.id) }}>
                    ▶ Watch
                  </button>
                </div>
              </div>
            ))}
          </div>

        )}

      </div>

      <div className='tv-section'>
        <h1>Trending TV Shows This Week</h1>
        {loadings ? (
          <p>Loading...</p>
        ) : (
          <div className='tv-grid'>
            {tvDay.map((show) => (
              <div key={show.id} className='tv-card' onClick={() => navigate(`/tv/${show.id}`)}>
                <img
                  src={show.poster_path ? `${BASE_IMG_URL}${show.poster_path}` : FALLBACK_IMG}
                  alt={show.name}
                />
                <div className="card-info">
                  <h3>{show.name}</h3>
                  <button onClick={(e) => { e.stopPropagation(); handlePlay(show.id) }}>
                    ▶ Watch
                  </button>
                </div>
              </div>
            ))}
          </div>

        )}

      </div>
      <AirTv />
      <AiringTodaySection />





    </>
  )
}

export default TvSection