import React from "react";
import usePopularMovies from "../custom/Popular";
import useUpcomingMovies from "../custom/Upcoming";
import { useNavigate } from "react-router-dom";
import { useMovieActions } from "../custom/Videos";
import "./HomeShow.css";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w300";
const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";

const HomeShow = () => {
    const { movies: popular, loading: pLoading } = usePopularMovies();
    const { movies: upcoming, loading: uLoading } = useUpcomingMovies();
    const { handlePlay } = useMovieActions();
    const navigate = useNavigate();

    let somepopular = popular.slice(0, 10);
    let someupcoming = upcoming.slice(0, 10);

    return (
        <div>
            {/* POPULAR MOVIES */}
            <div className="popular-section">
                <h1>Popular Movies</h1>

                {pLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {somepopular?.map((movie) => (
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

            {/* UPCOMING MOVIES */}
            <div className="upcoming-section">
                <h1>Upcoming Movies</h1>

                {uLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="upcoming-grid">
                        {someupcoming?.map((movie) => (
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
    );
};

export default HomeShow;