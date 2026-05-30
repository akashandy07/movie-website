import React from 'react'
import { useParams } from 'react-router-dom'
import { useTvDetails } from '../custom/TvDetails'
import { useMovieActions } from '../custom/Videos'
import './TvDetails.css'
import TvRecommendations from './TvRecommendations'
import { useNavigate } from 'react-router-dom'

const TvDetails = () => {
    const { id } = useParams()
    const { tvData, loading, error } = useTvDetails(id)
    const { handlePlay } = useMovieActions();
    const navigate = useNavigate()

    if (loading) return <p className="status-msg">Loading...</p>
    if (error) return <p className="status-msg error">Error: {error}</p>

    const imageUrl = tvData.poster_path
        ? `https://image.tmdb.org/t/p/w500${tvData.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image'

    return (
        <>
            <div className="tv-card-detail">

                {/* LEFT — Poster */}
                <div className="tv-poster">
                    <img src={imageUrl} alt={tvData.name} />
                </div>

                {/* RIGHT — Info */}
                <div className="tv-info">

                    <h1 className="tv-title">{tvData.name}</h1>

                    <p className="tv-rating">
                        ⭐ {tvData.vote_average?.toFixed(1)} / 10
                    </p>

                    <div className="tv-meta">
                        <span>📅 {tvData.first_air_date?.slice(0, 4)}</span>
                        <span>🎬 {tvData.number_of_seasons} Season{tvData.number_of_seasons > 1 ? 's' : ''}</span>
                        <span>📺 {tvData.status}</span>
                    </div>

                    <div className="tv-genres">
                        {tvData.genres?.map(g => (
                            <span key={g.id} className="genre-tag">{g.name}</span>
                        ))}
                    </div>

                    {tvData.tagline && (
                        <p className="tv-tagline">"{tvData.tagline}"</p>
                    )}

                    <p className="tv-overview">{tvData.overview}</p>

                    {tvData.networks?.length > 0 && (
                        <div className="tv-networks">
                            <span className="label">Network:</span>
                            {tvData.networks.map(n => (
                                <span key={n.id} className="network-name">{n.name}</span>
                            ))}
                        </div>
                    )}

                    <div className="tv-buttons">
                        <button onClick={() => handlePlay(id)}> ▶ Play</button>
                        <button onClick={() => navigate(-1)}> Back</button>

                    </div>

                </div>

            </div>
            <TvRecommendations seriesId={id} />
        </>
    )
}

export default TvDetails