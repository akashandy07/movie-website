import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useWatchList } from "../custom/useWatchList";
import { useAddWatch } from "../custom/AddWatch";
import { useMovieDetails } from "../custom/MovieDetails";
import RecommendationMovie from "./RecommendationMovie";
import { useMovieActions } from "../custom/Videos";

import PostRating from "./PostRating";
import "./MovieDetails.css";

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoggedIn, sessionId } = useAuth();
    const { list } = useWatchList();
    const { details: movie, loading } = useMovieDetails(id);
    const { addWatch } = useAddWatch()
    const { handlePlay } = useMovieActions();

    const isInWatchList = list.find((m) => m.id === movie?.id);

    if (loading) return <h2>Loading...</h2>;

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x500?text=No+Image";

    const backdropUrl = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : null;

    const runtime = movie.runtime
        ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
        : null;

    const cast = movie.credits?.cast?.slice(0, 3).map((c) => c.name).join(", ");

    return (
        <>
            <div
                className={`details-hero ${backdropUrl ? '' : 'no-backdrop'}`}
                style={backdropUrl ? { '--backdrop-url': `url(${backdropUrl})` } : {}}
            >
                <div className="details-container">

                    {/* Back Button */}
                    <button
                        className="BTN back-btn"
                        onClick={() => navigate(-1)}
                    >
                        ⬅ Go Back
                    </button>

                    <div className="details-body">
                        {/* LEFT SIDE */}
                        <div className="left">
                            <img src={posterUrl} alt={movie.title} />
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="right">

                            {(movie.genres?.length > 0 || runtime) && (
                                <div className="badges">
                                    {runtime && <span className="badge">{runtime}</span>}
                                    {movie.genres?.map((g) => (
                                        <span key={g.id} className="badge">{g.name}</span>
                                    ))}
                                </div>
                            )}

                            <h1>{movie.title}</h1>

                            <p className="rating">
                                ⭐ {movie.vote_average?.toFixed(1)} / 10
                            </p>

                            <p className="overview">
                                {movie.overview}
                            </p>

                            {cast && (
                                <p className="cast">
                                    <span className="cast-label">Cast: </span>{cast}
                                </p>
                            )}

                            <p className="release-date">
                                🗓 Release Date: {movie.release_date}
                            </p>

                            <div className="buttons">
                                <button className="play-btn" onClick={() => handlePlay(id)}>
                                    ▶ Play
                                </button>

                                <button className="save-btn" onClick={() => addWatch(movie.id)}>
                                    Save
                                </button>

                                <PostRating movieId={movie.id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RecommendationMovie />
        </>
    );
}

export default MovieDetails