import React from 'react'
import { useTvRecommendation } from '../custom/TvRecommendation'

import './TvDetails.css'
import { useNavigate } from 'react-router-dom'
import { useTvActionss } from '../custom/TvVideos'

const TvRecommendations = ({ seriesId }) => {
    const { recommendation, loading } = useTvRecommendation(seriesId)
    const { handlePlay } = useTvActionss();

    const navigate = useNavigate()

    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w300"
    const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image"

    return (
        <div className="tv-section">
            <h1>Recommended TV Shows</h1>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="tv-grid">
                    {recommendation?.map((tv) => (
                        <div
                            key={tv.id}
                            className="tv-card"
                            onClick={() => navigate(`/tv/${tv.id}`)}
                        >
                            <img
                                src={tv.poster_path
                                    ? `${BASE_IMG_URL}${tv.poster_path}`
                                    : FALLBACK_IMG}
                                alt={tv.name}
                            />
                            <div className="card-info">
                                <h3>{tv.name}</h3>
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    handlePlay(tv.id);
                                }}>
                                    ▶ Watch
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TvRecommendations