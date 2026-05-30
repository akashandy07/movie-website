import React from 'react'
import { useWatchList } from '../custom/useWatchList';
import './SavedMovie.css'
import { useMovieActions } from '../custom/Videos';




const SavedMovie = () => {
  const { list, loading } = useWatchList();
  const { handlePlay } = useMovieActions();

  const randomMovie = list[Math.floor(Math.random() * list.length)];

  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w300";
  const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";


  return (
    <div className='tv-banner'>
      <div className="content">
        <img
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.name}
        />
        <div className="info">
          <h1>{randomMovie?.title}</h1>

          <p>
            {randomMovie?.overview?.slice(0, 100)}...
          </p>
          <button onClick={() => handlePlay(randomMovie.id)}>watch</button>

        </div>
      </div>




      {/* ....................................................................................................................................... */}


      <div className='tv-section'>
        <h1>Your WatchList</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='tv-grid'>
            {list.map((show) => (
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
    </div>


  )
}




export default SavedMovie