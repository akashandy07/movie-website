import React from 'react'
import { useNowPlaying } from '../custom/NowPlaying'
import './Movie.css'
import { useMovieActions } from "../custom/Videos";
import { useNavigate } from "react-router-dom";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w300";
const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";

const NowPlaying = () => {
    const { state } = useNowPlaying()  // ✅ You don't need dispatch here
    const { handlePlay } = useMovieActions(); 
    const navigate = useNavigate();

    return (
        <div>
            <div className="popular-section">
                <h1>Now Playing</h1>
                
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
        </div>
    )
}

export default NowPlaying