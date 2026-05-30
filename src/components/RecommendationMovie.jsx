import React from 'react'
import useRecommendation from '../custom/Recommendation'
import "./recommendation.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useMovieActions } from '../custom/Videos'

const RecommendationMovie = () => {

  const { id } = useParams()

  const { handlePlay } = useMovieActions()

  const { recommendation, loading } = useRecommendation(id)

  const navigate = useNavigate()
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/w300";
  const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div>
      <div className="popular-section">
        <h1>Recommendation Movie</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {recommendation?.map((movie) => (
              <div
                key={movie.id}
                className="movie-details"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <img
                  src={
                    movie.poster_path
                      ? `${BASE_IMG_URL}${movie.poster_path}`
                      : FALLBACK_IMG
                  }
                  alt={movie.title}
                />


                <div className="movie-overlay">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlay(movie.id);
                    }}
                  >
                    ▶ Play
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


export default RecommendationMovie