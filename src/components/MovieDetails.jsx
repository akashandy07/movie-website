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

    return (
        <>
            <div className="details-container">

                {/* LEFT SIDE */}
                <div className="left">

                    {/* Back Button */}
                    <button
                        className="BTN back-btn"
                        onClick={() => navigate(-1)}
                    >
                        ⬅ Go Back
                    </button>

                    {/* Poster */}
                    <img src={posterUrl} alt={movie.title} />
                </div>

                {/* RIGHT SIDE */}
                <div className="right">
                    <h1>{movie.title}</h1>

                    <p className="rating">
                        ⭐ {movie.vote_average?.toFixed(1)} / 10
                    </p>

                    <p className="overview">
                        {movie.overview}
                    </p>

                    <p className="release-date">
                        🗓 Release Date: {movie.release_date}
                    </p>

                    <div className="buttons">
                        <button onClick={() => handlePlay(id)}>
                            ▶ Play
                        </button>

                        <button onClick={() => addWatch(movie.id)}>
                            Save
                        </button>

                        <PostRating movieId={movie.id} />
                    </div>
                </div>
            </div>

            <RecommendationMovie />
        </>
    );
}

export default MovieDetails