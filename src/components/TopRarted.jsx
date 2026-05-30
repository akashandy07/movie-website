import React from 'react'
import { useTopRate } from '../custom/TopRate'
import './Movie.css'
import { useMovieActions } from "../custom/Videos";
import { useNavigate } from "react-router-dom";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w300";
const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";


const TopRarted = () => {
    const { topRate, loading } = useTopRate()
    const { handlePlay } = useMovieActions();
    const navigate = useNavigate();


    return (
        <div>


            <div className="popular-section">
                <h1>Top Rated Movies</h1>


                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {topRate?.map((movie) => (
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

export default TopRarted