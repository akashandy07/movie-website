import React from 'react'
import { useTvShow } from '../custom/TvShow'
import TvBanner from './TvBanner'
import './Tv.css'
import { useTvActionss } from '../custom/TvVideos'
import { useAiringToday } from '../custom/AiringTodayTv'
import { useNavigate } from "react-router-dom";

const AiringTodaySection = () => {
    const { air, loadings } = useAiringToday()
    const { handlePlay } = useTvActionss();
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w300";
    const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";
    const navigate = useNavigate()
    return (
        <>
            
            <div className='tv-section'>
                <h1>Airing Today TV Shows</h1>
                {loadings ? (
                    <p>Loading...</p>
                ) : (
                    <div className='tv-grid'>
                        {air.map((show) => (
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






        </>
    )
}

export default AiringTodaySection