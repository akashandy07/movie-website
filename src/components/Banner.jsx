import React from 'react'
import { useMovieActions } from '../custom/Videos'
import usePopularMovies from "../custom/Popular";
import './Banner.css'

const Banner = () => {
  const { handlePlay } = useMovieActions()
  const { movies: popular, loading: pLoading } = usePopularMovies();

  if (pLoading) return <h1>Loading...</h1>

  const randomShow = popular[Math.floor(Math.random() * popular.length)]



  return (
    <div className='banner'>
      <img
        src={`https://image.tmdb.org/t/p/original${randomShow?.backdrop_path}`}
        alt={randomShow?.title || randomShow?.name}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      <div className="banner-content" style={{ position: 'relative', zIndex: 1 }}>  {/* 👈 ADD THIS */}
        <h1>{randomShow?.title || randomShow?.name}</h1>
        <p style={{ color: '#ccc', fontSize: '14px', marginBottom: '24px' }}>
          {randomShow?.overview?.slice(0, 150)}...
        </p>

        <div className="banner-buttons">
          <button onClick={() => handlePlay(randomShow.id)}>▶ Play</button>
        </div>
      </div>

      <div className="banner-fade" />
    </div>
  )
}

export default Banner