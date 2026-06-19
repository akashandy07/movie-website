import React from 'react'
import { useAiringToday } from '../custom/AiringTodayTv'
import { useTvActionss } from '../custom/TvVideos'
import { useNavigate } from "react-router-dom";
import './Tv.css'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w300";
const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";

const AiringTodaySection = () => {
    const { state } = useAiringToday()  // ✅ Get full state
    const { handlePlay } = useTvActionss();
    const navigate = useNavigate()

    return (
        <div className='tv-section'>
            <h1>Airing Today TV Shows</h1>

            {state.loading ? (
                <p>Loading...</p>
            ) : state.error ? (  // ✅ Handle error
                <p>Error loading movies. Please try again.</p>
            ) : state.movies.length === 0 ? (  // ✅ Handle empty
                <p>No movies found.</p>
            ) : (
                <div>
                    {state.movies.map((movie) => (  // ✅ Use state.movies
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
    )
}



export default AiringTodaySection